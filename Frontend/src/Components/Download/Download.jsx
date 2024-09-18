import React, { useEffect, useState } from "react";
import { logoBase64 } from "./logoBase64";
import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (formData, individualEmissions, totalEmissions, afforestationData) => {
    const doc = new jsPDF();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString(); 

  
    // Adding title
    doc.setFontSize(16);
    doc.text("Emissions Report", 14, 20);

     // Adding date of download
  doc.setFontSize(10);
  doc.text(`Downloaded on: ${formattedDate}`, 14, 30); // Adjust position as needed
  
    // Adding logo with proper aspect ratio
    const logoWidth = 30; 
    const logoHeight = (30 / 1.5); 
    doc.addImage(logoBase64, "PNG", 160, 10, logoWidth, logoHeight);
  
    const labelMapping = {
      machineType: "Machine type for Excavation",
      fuelConsumptionExcavation: "Fuel consumption for Excavation (litres/hr)",
      operatingHours: "Operating hours of excavating machine",
      typeOfCoal: "Type of coal extracted",
      typeOfFuel: "Type of fuel used for excavation",
      amountOfCoal: "Amount of coal being extracted (tons)",
      explosives: "Explosives used for excavation (kg)",
      explosivesFrequency: "Explosives frequency",
      vehicleType: "Transportation vehicle type",
      transportFuel: "Transportation fuel (litres/trip)",
      distanceTravelled: "Distance travelled by vehicle (km/trip)",
      fuel: "Fuel type",
      load: "Load with vehicle (tons)",
      trips: "Trips done by vehicle",
      electricityUsage: "Electricity Usage (kwh/day)",
      daysOperated: "Days Operated",
      electricitySource: "Electricity Source",
      ventilation: "Electricity consumption for ventilation (kwh/day)",
      ventilationType: "Ventilation Type",
      daysOperatedVentilation: "Days Operated Ventilation",
      waterUsed: "Water usage for dust management (liters)",
      fuelConsumption: "Fuel consumption for dust control (liters)",
      electricityUsed: "Electricity consumption for dust control (kWh)",
      fuelType: "Fuel Type",
      electricityType: "Electricity Type",
      population: "Population",
    };
  
    // Map the form data to be displayed with labels
    const formDataArray = Object.keys(formData).map((key) => [
      labelMapping[key] || key,
      formData[key] || "NA",
    ]);
  
    // Form data section
    doc.setFontSize(12);
    doc.autoTable({
      head: [["Category", "Value"]],
      body: formDataArray,
      startY: 50, // Adjust starting Y position to accommodate logo
    });
  
    // Individual Emissions section
    doc.text("Individual Emissions", 14, doc.lastAutoTable.finalY + 10);
    const emissionsArray = Object.keys(individualEmissions).map((key) => [key, individualEmissions[key]]);
    doc.autoTable({
      head: [["Type", "Emissions (kg)"]],
      body: emissionsArray,
      startY: doc.lastAutoTable.finalY + 15,
    });
  
    // Total Emissions section
    doc.text("Total Emissions", 14, doc.lastAutoTable.finalY + 10);
    doc.autoTable({
      body: [["Total", `${totalEmissions} kg`]],
      startY: doc.lastAutoTable.finalY + 15,
    });
  
    // Afforestation Data section (if available)
    if (afforestationData) {
      doc.text("Afforestation Offsets", 14, doc.lastAutoTable.finalY + 10);
      doc.autoTable({
        body: [
          ["Land Required (hectares)", afforestationData.landRequired],
          ["Trees Required", afforestationData.treesRequired],
        ],
        startY: doc.lastAutoTable.finalY + 15,
      });
    }

    doc.setFontSize(10);
    doc.text("Authorized by EnviroMine", 14, doc.internal.pageSize.height - 20); 
  
  
    // Save the PDF
    doc.save("emissions_report.pdf");
  };  

const Download = ({ download, setDownload, formData, individualEmissions, totalEmissions, afforestationData }) => {
  const [downloaded, setDownloaded] = useState(false); 

  useEffect(() => {
    if (download && !downloaded) {
      generatePDF(formData, individualEmissions, totalEmissions, afforestationData);
      
      setDownloaded(true);
      
      setDownload(false);
    }
  }, [download, formData, individualEmissions, totalEmissions, afforestationData, setDownload, downloaded]);

  return null; 
};

export default Download;
