import React, { useState } from "react";
import { transportEmissionFactors } from "./tool";
import "./Transport.css";

const TransportationForm = ({
  data,
  handleChange,
  updateEmissions,
  handleNext,
}) => {
  const [emissions, setEmissions] = useState(null);

  const calculateEmissions = () => {
    const { transportFuel, fuel, trips, load, distanceTravelled } = data;

    // Find the emission factor for the selected fuel
    const fuelFactor = transportEmissionFactors.find(
      (factor) => factor.name.toLowerCase() === fuel.toLowerCase()
    );
    const fuelEmissionFactor = fuelFactor ? fuelFactor.emissonFactor : 0;
    console.log("Fuel Factor:", fuelFactor);
    console.log("Fuel Emission Factor:", fuelEmissionFactor);

    const totalEmissions = transportFuel * fuelEmissionFactor * trips;
    const emissionsPerTon = totalEmissions / load;
    console.log(emissionsPerTon);

    setEmissions(totalEmissions);
    updateEmissions(totalEmissions);
    console.log("Transport", updateEmissions);
  };

  return (
    <div className="container">
      <div className="transportation-form">
        <h2>Transportation</h2>
        <div className="form-group">
          <label>
            Vehicle Type:
            <input
              type="text"
              name="vehicleType"
              value={data.vehicleType}
              onChange={handleChange}
            />
          </label>
          <label>
            Fuel Consumption (liters/trip):
            <input
              type="number"
              name="transportFuel"
              value={data.transportFuel}
              onChange={handleChange}
              min={1}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Distance Travelled (km/trip):
            <input
              type="number"
              name="distanceTravelled"
              value={data.distanceTravelled}
              onChange={handleChange}
              min={1}
            />
          </label>
          <label>
            Fuel Type:
            <select name="fuel" value={data.fuel} onChange={handleChange}>
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
            Total coal transported (tons):
            <input
              type="number"
              name="load"
              value={data.load}
              onChange={handleChange}
              min={1}
            />
          </label>
          <label>
            Number of Trips:
            <input
              type="number"
              name="trips"
              value={data.trips}
              onChange={handleChange}
              min={1}
            />
          </label>
        </div>

        <div onClick={handleNext} className="button-container">
          <button onClick={calculateEmissions} className="btn">
            Next
          </button>
        </div>

        {emissions && (
          <div style={{ display: "none" }}>
            <p>Total Emissions: {emissions.toFixed(2)} kg CO2</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransportationForm;
