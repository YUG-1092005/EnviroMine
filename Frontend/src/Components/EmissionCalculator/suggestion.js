export const predefinedSuggestions = [
    {
      id: 1,
      text: "Switch to electric excavation tools to reduce emissions by up to 40%.",
      condition: (data) => data.selectedTool === "Dragline excavator" && data.coalAmount > 100
    },
    {
      id: 2,
      text: "Reduce coal amount used by 10% to decrease emissions.",
      condition: (data) => data.coalAmount > 500
    },
    {
      id: 3,
      text: "Limit excavation hours to reduce emissions from excavation tools.",
      condition: (data) => data.hoursImplemented > 8
    },
    {
      id: 4,
      text: "Use electric tools for at least 50% of the operation time to lower emissions.",
      condition: (data) => data.electricTool && data.time > 4
    },
    {
      id: 5,
      text: "Implement energy-efficient electric drills to minimize CO2 emissions.",
      condition: (data) => data.electricTool === "Electric Drill" && data.energy > 10
    },
    // New additional suggestions:
    {
      id: 6,
      text: "Plant trees around the mining site to offset carbon emissions.",
      condition: (data) => data.finalEmission > 200
    },
    {
      id: 7,
      text: "Optimize fuel usage in transport to cut down emissions by 20%.",
      condition: (data) => data.fuelOfTransport > 50
    },
    {
      id: 8,
      text: "Use renewable energy sources such as solar panels to power electric tools.",
      condition: (data) => data.energy > 15
    },
    {
      id: 9,
      text: "Regular maintenance of electric tools to ensure efficiency and lower emissions.",
      condition: (data) => data.electricTool !== ""
    },
    {
      id: 10,
      text: "Use energy-saving modes on electric equipment when idle.",
      condition: (data) => data.electricTool && data.time > 2
    },
    {
      id: 11,
      text: "Invest in fuel-efficient vehicles for transportation to reduce emissions.",
      condition: (data) => data.fuelOfTransport > 30
    },
    {
      id: 12,
      text: "Encourage carpooling for employees to reduce transport-related emissions.",
      condition: (data) => data.employees > 10
    },
    {
      id: 13,
      text: "Use biodiesel in transport vehicles to cut emissions by up to 30%.",
      condition: (data) => data.fuelOfTransport > 20
    },
    {
      id: 14,
      text: "Switch off equipment when not in use to conserve energy.",
      condition: (data) => data.electricTool && data.hoursImplemented > 4
    },
    {
      id: 15,
      text: "Monitor and track emissions regularly to identify key areas for improvement.",
      condition: (data) => data.finalEmission > 0
    },
    {
      id: 16,
      text: "Install energy-efficient lighting at the mining site to save on electricity.",
      condition: (data) => data.energy > 5
    },
    {
      id: 17,
      text: "Implement a waste management system to reduce landfill emissions.",
      condition: (data) => data.finalEmission > 100
    },
    {
      id: 18,
      text: "Utilize compressed natural gas (CNG) as an alternative fuel in transportation.",
      condition: (data) => data.fuelOfTransport > 25
    },
    {
      id: 19,
      text: "Engage employees in sustainability practices to collectively lower carbon footprint.",
      condition: (data) => data.employees > 5
    },
    {
      id: 20,
      text: "Use high-efficiency electric compressors to reduce energy consumption.",
      condition: (data) => data.electricTool === "Electric Compressor" && data.energy > 8
    }
];

