import React, { useState } from "react";
import "./Percapita.css";

const Percapita = ({ totalEmissions, updateEmissions, handleNext }) => {
  const [population, setPopulation] = useState(1);
  const [perCapitaEmissions, setPerCapitaEmissions] = useState(1);

  const calculateEmissions = () => {
    if (
      population > 0 &&
      typeof totalEmissions === "number" &&
      !isNaN(totalEmissions)
    ) {
      // Calculate per capita emissions
      const emissions = totalEmissions / population;
      setPerCapitaEmissions(emissions); // Update state
      updateEmissions(emissions, "PerCapita Emissions"); // Use the calculated value directly
    } else {
      setPerCapitaEmissions(0);
      updateEmissions(0, "PerCapita Emissions");
    }
  };

  console.log("pop", population);
  console.log("tp", totalEmissions);
  console.log("perCapita", perCapitaEmissions);

  return (
    <div className="per-capita-form">
      <h2>Per Capita Emissions</h2>
      <label>
        Population (number of people):
        <input
          type="number"
          value={population}
          min={1}
          onChange={(e) => setPopulation(e.target.value)} 
          required
        />
      </label>
      <div onClick={handleNext} className="btn-container">
        <button onClick={calculateEmissions} className="btn">Submit</button>
      </div>

      {typeof totalEmissions === "number" ? (
        <>
          <p style={{ display: "none" }}>
            Total Emissions: {totalEmissions.toFixed(2)} kg CO₂
          </p>
          {population > 0 && (
            <p style={{ display: "none" }}>
              Per Capita Emissions: {perCapitaEmissions.toFixed(2)} kg
              CO₂/person
            </p>
          )}
        </>
      ) : (
        <p>Total emissions data is not available.</p>
      )}
    </div>
  );
};

export default Percapita;
