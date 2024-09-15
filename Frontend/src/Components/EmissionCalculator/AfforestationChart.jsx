import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const AfforestationChart = ({ data , totalEmissions }) => {
  const chartData = {
    labels: ["Land Required (hectares)", "Number of Trees"],
    datasets: [
      {
        data: [data.landRequired.toFixed(2), data.treesRequired.toFixed(0)],
        backgroundColor: ["#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label;
            const value = context.parsed;
            return `${label}: ${value} ${
              label === "Land Required (hectares)" ? "hectares" : "trees"
            }`;
          },
        },
      },
    },
  };

    return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Afforestation Offsets
      </h2>
      <div style={{ width: "100%", height: "400px" }}>
        <Pie data={chartData} options={options} />
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p style={{fontSize:"18px"}}>
          To offset your total emissions of <strong>{totalEmissions}</strong>{" "}
          kg CO₂, you need to plant approximately{" "}
          <strong>{data.treesRequired.toFixed(0)}</strong> trees over{" "}
          <strong>{data.landRequired.toFixed(2)}</strong> hectares of land.
        </p>
      </div>
    </div>
  );
};

export default AfforestationChart;
