import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const StudyOverviewChart = () => {
  const [chartOptions,] = useState({
    series: [
      {
        name: "Design",
        data: [3, 2, 3, 6, 2, 4, 8, 2, 3, 2, 3, 2], // Example Data
      },
      {
        name: "Development",
        data: [1, 4, 2, 4, 6, 3, 6, 1, 4, 3, 2, 3], // Example Data
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
        zoom: {
          enabled: false,
        },toolbar: {
            show: false // Removes the toolbar
          }
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#3B82F6", "#10B981"], // Blue for Design, Green for Development
    
      xaxis: {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
      },
      yaxis: {
        labels: {
          formatter: (val) => `$${val}Hr`, // Display Hours
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
    },
  });

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>Study Overview</h3>
        <select style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ddd" }}>
          <option>Yearly</option>
          <option>Monthly</option>
          <option>Weekly</option>
        </select>
      </div>
      <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="line" height={350} />
    </div>
  );
};

export default StudyOverviewChart;
