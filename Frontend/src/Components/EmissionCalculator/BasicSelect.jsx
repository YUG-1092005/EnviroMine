import React, { useState } from "react";
import ExcavationForm from "./ExcavationForm.jsx";
import TransportationForm from "./Transport.jsx";
import ElectricityForm from "./Electric.jsx";
import MineVentilation from "./MineVentilation.jsx";
import FugitiveEmissions from "./Process.jsx";
import Percapita from "./Percapita.jsx";
import EmissionsChart from "./EmissionChart.jsx";
import AfforestationChart from "./AfforestationChart.jsx";
import Suggestions from "./suggestions.jsx";
import "./BasicSelect.css";

const BasicSelect = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalEmissions, setTotalEmissions] = useState(0);
  const [showIndividualChart, setShowIndividualChart] = useState(false);
  const [showTotalChart, setShowTotalChart] = useState(false);
  const [showAfforestationChart, setShowAfforestationChart] = useState(false); 
  const [afforestationData, setAfforestationData] = useState(null); 
  const [individualEmissions, setIndividualEmissions] = useState({
    excavation: 0,
    transport: 0,
    electricity: 0,
    ventilation: 0,
    fugitive: 0,
  });

  const [formData, setFormData] = useState({
    machineType: "",
    fuelConsumptionExcavation: "",
    operatingHours: "",
    typeOfCoal: "",
    typeOfFuel: "",
    amountOfCoal: "",
    explosives: "",
    explosivesFrequency: "",
    vehicleType: "",
    transportFuel: "",
    distanceTravelled: "",
    fuel: "",
    load: "",
    trips: "",
    electricityUsage: "",
    daysOperated: "",
    electricitySource: "",
    ventilation: "",
    ventilationType: "",
    daysOperatedVentilation: "",
    waterUsed: "",
    fuelConsumption: "",
    electricityUsed: "",
    fuelType: "",
    electricityType: "",
    population: "",
  });

  // Function to calculate land required and number of trees
  const calculateAfforestationOffsets = () => {
    const sequestrationRate = 25; // avearge tons CO₂ per hectare per year
    const treesPerHectare = 500; // average Number of trees per hectare

   const emissionsInTons = totalEmissions / 1000; // Convert kg to tons

    const landRequired = emissionsInTons / sequestrationRate; 
    const treesRequired = landRequired * treesPerHectare; 
  
    setAfforestationData({ landRequired, treesRequired });
  };

  // Handler for the Afforestation Offsets button
  const handleShowAfforestationChart = () => {
    calculateAfforestationOffsets();
    setShowAfforestationChart(true);
    setShowIndividualChart(false);
    setShowTotalChart(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Adding new emissions to total
  const handleEmissionsUpdate = (newEmissions, type) => {
    setIndividualEmissions((prev) => ({
      ...prev,
      [type]: newEmissions,
    }));
    setTotalEmissions((prev) => prev + newEmissions);
  };

  const handleShowIndividualChart = () => {
    setShowIndividualChart(true);
    setShowTotalChart(false);
  };

  const handleShowTotalChart = () => {
    setShowIndividualChart(false);
    setShowTotalChart(true);
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <ExcavationForm
            data={formData}
            handleChange={handleChange}
            updateEmissions={(emissions) =>
              handleEmissionsUpdate(emissions, "excavation")
            }
            handleNext={nextStep}
          />
        );
      case 1:
        return (
          <TransportationForm
            data={formData}
            handleChange={handleChange}
            updateEmissions={(emissions) =>
              handleEmissionsUpdate(emissions, "transport")
            }
            handleNext={nextStep}
          />
        );
      case 2:
        return (
          <ElectricityForm
            data={formData}
            handleChange={handleChange}
            updateEmissions={(emissions) =>
              handleEmissionsUpdate(emissions, "electricity")
            }
            handleNext={nextStep}
          />
        );
      case 3:
        return (
          <MineVentilation
            data={formData}
            handleChange={handleChange}
            updateEmissions={(emissions) =>
              handleEmissionsUpdate(emissions, "ventilation")
            }
            handleNext={nextStep}
          />
        );
      case 4:
        return (
          <FugitiveEmissions
            data={formData}
            handleChange={handleChange}
            updateEmissions={(emissions) =>
              handleEmissionsUpdate(emissions, "fugitive")
            }
            handleNext={nextStep}
          />
        );
      case 5:
        return (
          <Percapita
            totalEmissions={totalEmissions}
            updateEmissions={(emissions) =>
              handleEmissionsUpdate(emissions, "perCapita")
            }
            handleNext={nextStep}
          />
        );
      default:
        return (
          <h2 style={{ textAlign: "center", marginTop: "2.5rem" }}>
            Form Completed!
          </h2>
        );
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className="previous-button-container">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="previous-button"
            >
              Previous
            </button>
          )}
          {currentStep < 6 ? (
            <button
              type="button"
              onClick={nextStep}
              style={{ display: "none" }}
            >
              Next
            </button>
          ) : (
            <div className="button-container-bs">
              <button
                type="button"
                onClick={handleShowIndividualChart}
                className="button-bs"
              >
                Show Individual Emissions Chart
              </button>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <button
                type="button"
                onClick={handleShowTotalChart}
                className="button-bs"
              >
                Show Total Emissions Chart
              </button>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <button
                type="button"
                onClick={handleShowAfforestationChart}
                className="button-bs"
              >
                Afforestation Offsets
              </button>
            </div>
          )}
        </div>
      </form>
      {showIndividualChart && !showTotalChart && (
        <EmissionsChart
          emissionsData={{ individual: individualEmissions }}
          type="individual"
        />
      )}
      {showTotalChart && !showIndividualChart && (
        <EmissionsChart
          emissionsData={{ total: totalEmissions }}
          type="total"
        />
      )}
      {showAfforestationChart && afforestationData && (
  <>
    <AfforestationChart data={afforestationData} totalEmissions={totalEmissions} />
    <div className="suggestions-container">
      <Suggestions formData={formData} />
    </div>
  </>
)}

      
    </div>
  );
};

export default BasicSelect;
