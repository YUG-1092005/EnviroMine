import React, { useState } from "react";
import { electricitySource as emissionFactors } from "./tool"; 
import "./Electric.css";

const ElectricityForm = ({
  data,
  handleChange,
  updateEmissions,
  handleNext,
}) => {
  const [emissions, setEmissions] = useState(null);

  const calculateEmissions = () => {
    const { electricityUsage, daysOperated, electricitySource } = data;

    const P = parseFloat(electricityUsage) || 0; 
    const t = parseFloat(daysOperated) || 0; 

    // Find the emission factor for the selected electricity source
    const selectedSource = emissionFactors.find(
      (source) => source.name === electricitySource
    );
    const emissionFactor = selectedSource ? selectedSource.emissionFactor : 0;

    // Calculating total energy usage and total emissions
    const energyKWh = P * t; 
    const totalEmissions = energyKWh * emissionFactor; 

    console.log("Total Emissions:", totalEmissions);

    setEmissions(totalEmissions);
    updateEmissions(totalEmissions, "electricity");
  };

  return (
    <div className="container">
      <div className="electric-form">
        <h2>Electricity Usage</h2>
        <div className="form-group">
          <label>
            Electricity Usage (kWh/day):
            <input
              type="number"
              name="electricityUsage"
              value={data.electricityUsage}
              onChange={handleChange}
            />
          </label>
          <label>
            Source of Electricity:
            <select
              name="electricitySource"
              value={data.electricitySource}
              onChange={handleChange}
            >
              <option>None</option>
              <option value="coal">Coal</option>
              <option value="oil">Oil</option>
              <option value="naturalGas">Natural Gas</option>
              <option value="nuclear">Nuclear</option>
              <option value="hydropower">Hydropower</option>
              <option value="wind">Wind</option>
              <option value="solar">Solar</option>
              <option value="average">Average</option>
            </select>
          </label>
        </div>
        <div className="individual-form">
          <label>
            Days of operation:
            <input
              type="number"
              name="daysOperated"
              value={data.daysOperated}
              onChange={handleChange}
            />
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
    </div>
  );
};

export default ElectricityForm;
