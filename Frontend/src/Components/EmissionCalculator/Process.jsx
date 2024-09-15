import React, { useState } from "react";
import { emissionFactor, electricitySource } from "./tool";
import "./Process.css";

const FugitiveEmissions = ({
  data,
  handleChange,
  updateEmissions,
  handleNext,
}) => {
  const [emissions, setEmissions] = useState(null);

  const calculateEmissions = () => {
    const {
      waterUsed,
      fuelConsumption,
      electricityUsed,
      fuelType,
      electricityType,
    } = data;

    // Fetch emission factor for electricity based on the electricity source used
    const electricityFactor =
      electricitySource.find((source) => source.name === electricityType)
        ?.emissionFactor || 0.5; 

    const fuelEmissionFactor =
      emissionFactor.find((fuel) => fuel.name === fuelType)?.emissonFactor || 0; // Default 0 if not found

    const dustManagementEmissions = waterUsed * 0.003 * electricityFactor;

    const fuelEmissions = fuelConsumption * fuelEmissionFactor;

    const electricityEmissions = electricityUsed * electricityFactor;

    const totalEmissions =
      dustManagementEmissions + fuelEmissions + electricityEmissions;

    setEmissions(totalEmissions);
    updateEmissions(totalEmissions, "fugitive");
  };

  return (
    <div className="fugitive-emissions-form">
      <h2>Fugitive Emissions from Coal Handling</h2>
      <div className="form-row">
      <label>
        Water usage for dust management (liters):
        <input
          type="number"
          name="waterUsed"
          value={data.waterUsed}
          onChange={handleChange}
        />
      </label>
      <label>
        Fuel consumption for dust control (liters):
        <input
          type="number"
          name="fuelConsumption"
          value={data.fuelConsumption}
          onChange={handleChange}
        />
      </label>
      <label>
        Electricity consumption for dust control (kWh):
        <input
          type="number"
          name="electricityUsed"
          value={data.electricityUsed}
          onChange={handleChange}
        />
      </label>
      </div>
      <div className="form-row-second">
      <label>
        Fuel Type:
        <select name="fuelType" value={data.fuelType} onChange={handleChange}>
          <option>None</option>
          {emissionFactor.map((fuel) => (
            <option key={fuel.name} value={fuel.name}>
              {fuel.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Electricity Source:
        <select
          name="electricityType"
          value={data.electricityType}
          onChange={handleChange}
        >
          <option>None</option>
          {electricitySource.map((source) => (
            <option key={source.name} value={source.name}>
              {source.name}
            </option>
          ))}
        </select>
      </label>
      </div>
      <div onClick={handleNext} className="button-container">
        <button onClick={calculateEmissions} className="btn">Next</button>
      </div>

      {emissions && (
        <div style={{ display: "none" }}>
          <h3>Results</h3>
          <p>Total Emissions: {emissions.toFixed(2)} kg CO₂</p>
        </div>
      )}
    </div>
  );
};

export default FugitiveEmissions;
