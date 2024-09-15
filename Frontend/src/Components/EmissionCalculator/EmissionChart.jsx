import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EmissionsChart = ({ emissionsData, type }) => {
  const defaultIndividualData = [
    0, 
    0, 
    0, 
    0, 
  ];

  const data = {
    labels:
    type === "individual"
            ? [
                "excavation",
                "transport",
                "electricity",
                "ventilation",
                "fugitive",
                "perCapita",
              ]
            : ["Total Monthly Emissions"],
    datasets: [
      {
        label: "Emissions (kg CO₂)",
        data:
          type === "individual"
            ? emissionsData.individual || defaultIndividualData
            : [emissionsData.total || 0],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw || context.parsed?.y;
            return `${context.dataset.label}: ${value} kg CO₂`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxRotation: 45,
          minRotation: 0,
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback: (value) => `${value} kg CO₂`,
        },
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        maxWidth: "90%", 
        margin: "auto",
        padding: "20px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {type === "individual"
          ? "Individual Emissions Data"
          : "Total Monthly Emissions"}
      </h2>
      <div style={{ width: "100%", height: "400px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default EmissionsChart;
