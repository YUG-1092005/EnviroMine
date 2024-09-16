import React from 'react';

const predefinedSuggestions = [
    // Example predefined suggestions
    "Plant more trees in the mining area to offset emissions.",
    "Switch to renewable energy sources such as solar or wind for mining operations.",
    "Improve the fuel efficiency of transport vehicles.",
    "Use electric vehicles for transportation within the mining site.",
    "Reduce coal usage by adopting clean coal technologies.",
    "Implement a recycling program for mining by-products.",
    "Use automated drones to optimize excavation efficiency.",
    "Upgrade ventilation systems to reduce energy consumption.",
    "Install energy-efficient lighting systems.",
    "Use high-efficiency electric tools.",
    "Train employees on energy-saving practices.",
    "Monitor and track emissions regularly to identify areas for improvement.",
    "Adopt carbon capture technologies for coal emissions.",
    "Use biodiesel or other alternative fuels in transportation vehicles.",
    "Reduce idle time for machinery to save fuel.",
    "Upgrade older machines to energy-efficient models.",
    "Optimize material transportation routes to reduce fuel consumption.",
    "Install solar panels on-site to reduce reliance on fossil fuels.",
    "Switch to hybrid or electric-powered heavy machinery.",
    "Implement predictive maintenance for machinery to reduce breakdowns and energy wastage.",
    "Encourage carpooling or shuttle services for employees.",
    "Use cloud-based tools for real-time monitoring of emissions.",
    "Adopt automated data tracking and reporting for emissions.",
    "Engage with local communities to support reforestation efforts.",
    "Incorporate water recycling systems in mining processes.",
    "Minimize water usage during coal washing and cleaning processes.",
    "Upgrade conveyor systems to reduce energy usage.",
    "Regularly service and maintain equipment to ensure optimal performance.",
    "Promote digitalization and automation in mining operations.",
    "Use smart grids to manage energy distribution on-site.",
    "Adopt blockchain for tracking and verifying emission data.",
    "Collaborate with external organizations for carbon offset projects.",
    "Promote awareness and training programs on sustainability.",
    "Install EV charging stations to support electric transport vehicles.",
    "Incorporate bioremediation techniques for land rehabilitation.",
    "Create employee incentives for green practices.",
    "Introduce automated machinery to optimize resource use.",
    "Implement green logistics and eco-friendly supply chain management.",
    "Minimize non-essential machinery usage during non-peak hours.",
    "Create a smart waste management system for the mining site.",
    "Use AI to predict energy usage and optimize consumption.",
    "Conduct regular audits to assess energy efficiency.",
    "Focus on waste-to-energy conversion processes where applicable."
];

const Suggestions = ({ formData }) => {
    // Logic to filter and generate suggestions based on formData
    const generateSuggestions = () => {
        let selectedSuggestions = [];

        // Custom filtering logic based on the form data
        if (formData.machineType.includes('electric')) {
            selectedSuggestions.push(predefinedSuggestions[4], predefinedSuggestions[8], predefinedSuggestions[18]);
        }
        if (formData.transportFuel.includes('diesel')) {
            selectedSuggestions.push(predefinedSuggestions[2], predefinedSuggestions[12], predefinedSuggestions[19]);
        }
        if (formData.amountOfCoal > 1000) {
            selectedSuggestions.push(predefinedSuggestions[5], predefinedSuggestions[15], predefinedSuggestions[27]);
        }
        if (formData.electricitySource === 'renewable') {
            selectedSuggestions.push(predefinedSuggestions[1], predefinedSuggestions[17], predefinedSuggestions[28]);
        }
        if (formData.ventilationType.includes('high-efficiency')) {
            selectedSuggestions.push(predefinedSuggestions[7], predefinedSuggestions[9], predefinedSuggestions[22]);
        }

        // Fill up remaining suggestions if fewer than 10 are selected
        while (selectedSuggestions.length < 10) {
            const randomSuggestion = predefinedSuggestions[Math.floor(Math.random() * predefinedSuggestions.length)];
            if (!selectedSuggestions.includes(randomSuggestion)) {
                selectedSuggestions.push(randomSuggestion);
            }
        }

        return selectedSuggestions.slice(0, 10);
    };

    const suggestions = generateSuggestions();

    return (
        <div>
            <h3>Suggested Ways to Reduce Emissions:</h3>
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default Suggestions;
