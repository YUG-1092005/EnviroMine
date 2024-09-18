import React, { useState } from "react";
import { ventilation as emissionFactors } from "./tool";
import "./Ventilation.css";

const MineVentilation = ({
  data,
  handleChange,
  updateEmissions,
  handleNext,
}) => {
  const [emissions, setEmissions] = useState(null);

  const calculateEmissions = () => {
    const { ventilation, daysOperatedVentilation, ventilationType } = data;

    // Convert input values to numbers
    const electricityUsagePerDay = parseFloat(ventilation) || 0;
    const daysOperatedNum = parseInt(daysOperatedVentilation);

    // Calculate total electricity usage
    const totalElectricityUsage = electricityUsagePerDay * daysOperatedNum;

    const selectedSource = emissionFactors.find(
      (source) => source.name === ventilationType
    );
    console.log("Selected Source:", selectedSource);

    const emissionFactor = selectedSource ? selectedSource.emissionFactor : 0;
    console.log(emissionFactor);

    // Calculate total emissions
    const totalEmissions = totalElectricityUsage * emissionFactor; 

    console.log("Total Emissions:", totalEmissions);

    // Set the emissions result
    setEmissions(totalEmissions);
    updateEmissions(totalEmissions, "ventilation");
  };

  return (
    <div className="container">
      <div className="ventilation">
        <h2>Mine Ventilation Usage</h2>
        <div className="form-group">
        <label>
            Approx days operated:
            <input
              type="number"
              name="daysOperatedVentilation"
              value={data.daysOperatedVentilation}
              onChange={handleChange}
              min={1}
              required
            />
          </label>
          <label>
            Electricity consumption for ventilation (kWh/day):
            <input
              type="number"
              name="ventilation"
              value={data.ventilation}
              onChange={handleChange}
              min={1}
              required
            />
          </label>
        </div>
        <div className="ventilation-individual">
          <label>
            Ventilation Type:
            <select
              name="ventilationType"
              value={data.ventilationType}
              onChange={handleChange}
              required
            >
              <option>None</option>
              <option value="natural">Natural</option>
              <option value="powered">Powered</option>
              {/* Add other options as needed */}
            </select>
          </label>
        </div>

        <div onClick={handleNext} className="button-container">
          <button onClick={calculateEmissions} className="btn">
            Next
          </button>
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

export default MineVentilation;
