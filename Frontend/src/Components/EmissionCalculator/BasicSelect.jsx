import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./BasicSelect.css";
import EmissionsChart from "./EmissionChart";
import { excavatingTools, electricEquipment } from "./tool.js";
import { predefinedSuggestions } from './suggestions.js'; // Import predefined suggestions

export default function BasicSelect() {
  const [selectedTool, setSelectedTool] = useState("");
  const [electricTool, setElectricTool] = useState("");
  const [coalAmount, setCoalAmount] = useState("");
  const [reduction, setReduction] = useState("");
  const [emissions, setEmissions] = useState(0);
  const [fuelConsumption, setFuelConsumption] = useState("");
  const [fuelEmission, setFuelEmission] = useState(0);
  const [hoursImplemented, setHoursImplemented] = useState("");
  const [total, setTotal] = useState(0);
  const [fuelOfTransport, setFuelOfTransport] = useState("");
  const [distanceTravelled, setDistanceTravelled] = useState("");
  const [transportEmission, setTransportEmission] = useState(0);
  const [power, setPower] = useState("");
  const [time, setTime] = useState("");
  const [energy, setEnergy] = useState(0);
  const [employees, setEmployees] = useState("");
  const [capitaEmissions, setCapitaEmissions] = useState(null);
  const [finalEmission, setFinalEmission] = useState(0);
  const [chartType, setChartType] = useState("individual");
  const [suggestions, setSuggestions] = useState([]); // State for storing filtered suggestions

  const calculateEnergy = () => {
    const P = parseFloat(power) || 0;
    const t = parseFloat(time) || 0;
    const energyKWh = (P * t) / 1000;
    const equipment = electricEquipment.find(
      (tool) => tool.name === electricTool
    );
    if (equipment) {
      const EF = equipment.emissionFactor;
      const equipmentUsage = energyKWh * EF;
      setEnergy(equipmentUsage);
    }
  };

  const calculateEmissions = () => {
    const tool = excavatingTools.find((tool) => tool.name === selectedTool);
    if (tool) {
      const EF = tool.emissionFactor;
      const A = parseFloat(coalAmount) || 0;
      const ER = parseFloat(reduction) || 0;
      const H = parseFloat(hoursImplemented) || 0;
      const F = parseFloat(fuelConsumption) || 0;

      const excavationEmission = A * EF * H * (1 - ER / 100);
      const fuelEmissions = EF * F;

      setEmissions(excavationEmission);
      setFuelEmission(fuelEmissions);

      const totalEmissions = excavationEmission + fuelEmissions;
      setTotal(totalEmissions);
    }
  };

  const calculateTransportEmission = () => {
    const fuel = parseFloat(fuelOfTransport);
    const transportEmission = fuel * 2.67;
    setTransportEmission(transportEmission);
  };

  const calculatePerCapitaEmission = () => {
    const totalEmissions = total;
    const transportEmissions = transportEmission;
    const electricEmissions = energy;
    const employeeCount = parseFloat(employees) || 0;

    if (employeeCount > 0) {
      const capitaEmission =
        (totalEmissions + transportEmissions + electricEmissions) /
        employeeCount;
      setCapitaEmissions(capitaEmission);
    } else {
      setCapitaEmissions(0);
    }
  };

  const calculateTotalEmissions = () => {
    const Emission = total || 0;
    const transportEmissions = transportEmission || 0;
    const energyEmissions = energy || 0;
    const capitaEmission = capitaEmissions || 0;

    const totalMonthlyEmissions =
      Emission + transportEmissions + energyEmissions + capitaEmission;
    setFinalEmission(totalMonthlyEmissions);
  };

  // Function to filter suggestions based on input data
  const filterSuggestions = () => {
    const data = {
      selectedTool,
      coalAmount: parseFloat(coalAmount),
      hoursImplemented: parseFloat(hoursImplemented),
      electricTool,
      time: parseFloat(time),
      energy,
      fuelConsumption: parseFloat(fuelConsumption),
      fuelOfTransport,
      distanceTravelled: parseFloat(distanceTravelled),
    };

    // Filter predefined suggestions based on the data
    const filteredSuggestions = predefinedSuggestions
      .filter((suggestion) => suggestion.condition(data)) // Check the condition of each suggestion
      .slice(0, 10); // Get top 10 suggestions

    setSuggestions(filteredSuggestions); // Update the suggestions state
  };

  const calculateAll = () => {
    calculateEmissions();
    calculateTransportEmission();
    calculateEnergy();
    calculatePerCapitaEmission();
    calculateTotalEmissions();
    filterSuggestions(); // Call filter suggestions after calculations
  };

  return (
    <Box sx={{ minWidth: 120 }} style={{ padding: "2rem" }}>
      {/* Form fields */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Excavation Tool</InputLabel>
            <Select
              value={selectedTool}
              onChange={(e) => setSelectedTool(e.target.value)}
            >
              {excavatingTools.map((tool) => (
                <MenuItem key={tool.name} value={tool.name}>
                  {tool.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Electric Tool</InputLabel>
            <Select
              value={electricTool}
              onChange={(e) => setElectricTool(e.target.value)}
            >
              {electricEquipment.map((tool) => (
                <MenuItem key={tool.name} value={tool.name}>
                  {tool.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Additional form fields */}
      {/* [Omitted for brevity, but similar structure as before] */}

      {/* Buttons to toggle chart type and calculate emissions */}
      <Box mt={4} className="graph-btns">
        <Button
          variant="outlined"
          onClick={() => {
            calculateAll();
            setChartType("individual");
          }}
        >
          Show Individual Emissions
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            calculateAll();
            setChartType("total");
          }}
          sx={{ ml: 2 }}
        >
          Show Total Monthly Emissions
        </Button>
      </Box>

      {/* Display chart */}
      <Box mt={4}>
        <EmissionsChart
          emissionsData={{
            individual: [
              total,
              transportEmission,
              energy,
              capitaEmissions || 0,
            ],
            total: [finalEmission],
          }}
          type={chartType}
        />
      </Box>

      {/* Display suggestions */}
      <Box mt={4} className="suggestions-box">
        <h3>Suggestions to Reduce Emissions:</h3>
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion.id}>{suggestion.text}</li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}
