import React, { useState } from "react";
import { emissionFactor } from "./tool";
import "./Excavation.css";

const ExcavationForm = ({
  data,
  handleChange,
  updateEmissions,
  handleNext,
}) => {
  const [emissions, setEmissions] = useState(null);

  const calculateEmissions = () => {
    const {
      typeOfFuel,
      fuelConsumptionExcavation,
      operatingHours,
      explosives,
      explosivesFrequency,
    } = data;

    // Convert input values to numbers
    const fuelConsumptionNum = parseFloat(fuelConsumptionExcavation) || 0;
    const operatingHoursNum = parseFloat(operatingHours) || 0;
    const explosivesNum = parseFloat(explosives) || 0;
    const explosivesFrequencyNum = parseFloat(explosivesFrequency) || 0;

    // Find the emission factor for the selected fuel
    const fuelFactor = emissionFactor.find(
      (factor) => factor.name.toLowerCase() === typeOfFuel.toLowerCase()
    );
    const fuelEmissionFactor = fuelFactor ? fuelFactor.emissonFactor : 0;
    console.log("Fuel Factor:", fuelFactor);
    console.log("Fuel Emission Factor:", fuelEmissionFactor);

    // Calculate total fuel consumption
    const totalFuelConsumption = fuelConsumptionNum * operatingHoursNum;
    console.log("Total Fuel Consumption:", totalFuelConsumption);

    // Calculate CO2 emissions from fuel consumption
    const fuelEmissions = totalFuelConsumption * fuelEmissionFactor;
    console.log("Fuel Emissions:", fuelEmissions);

    // Calculate emissions from explosives
    const explosiveFactor =
      emissionFactor.find((factor) => factor.name === "Blasting")
        ?.emissonFactor || 0;
    const explosiveEmissions =
      explosivesNum * explosivesFrequencyNum * explosiveFactor;
    console.log("Explosive Emissions:", explosiveEmissions);

    // Calculate total emissions
    const totalEmissions = fuelEmissions + explosiveEmissions;
    console.log("Total Emissions:", totalEmissions);

    setEmissions(totalEmissions);
    updateEmissions(totalEmissions, "excavation");
    console.log(updateEmissions);
  };

  return (
    <div className="container">
      <div className="excavation-form">
        <h2>Excavation & Extraction</h2>
        <div className="form-group">
          <label>
            Machine Type:
            <input
              type="text"
              name="machineType"
              value={data.machineType}
              onChange={handleChange}
            />
          </label>

          <label>
            Type of fuel:
            <select
              name="typeOfFuel"
              value={data.typeOfFuel}
              onChange={handleChange}
            >
              <option>None</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="NaturalGas">Natural Gas</option>
              <option value="Electric">Electric</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Fuel Consumption (liters/hour):
            <input
              type="number"
              name="fuelConsumptionExcavation"
              value={data.fuelConsumptionExcavation}
              onChange={handleChange}
              min={1}
            />
          </label>
          <label>
            Operating Hours:
            <input
              type="number"
              name="operatingHours"
              value={data.operatingHours}
              onChange={handleChange}
              min={1}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Type of coal being extracted (soft/hard):
            <input
              type="text"
              name="typeOfCoal"
              value={data.typeOfCoal}
              onChange={handleChange}
            />
          </label>
          <label>
            Amount of coal extracted (tons):
            <input
              type="number"
              name="amountOfCoal"
              value={data.amountOfCoal}
              onChange={handleChange}
              min={1}
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Explosives used (kg):
            <input
              type="number"
              name="explosives"
              value={data.explosives}
              onChange={handleChange}
              min={1}
            />
          </label>
          <label>
            Frequency of explosives:
            <input
              type="number"
              name="explosivesFrequency"
              value={data.explosivesFrequency}
              onChange={handleChange}
              min={1}
            />
          </label>
        </div>

        <div onClick={handleNext} className="button-container">
          <button onClick={calculateEmissions} className="btn">Next</button>
        </div>
        {emissions !== null && (
          <div style={{ display: "none" }}>
            <h3>Total Emissions: {emissions.toFixed(2)} kg CO₂</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExcavationForm;
