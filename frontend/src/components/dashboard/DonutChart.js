import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  const chartOptions = {
    series: [65.2, 25.0, 9.8], // Data percentages
    labels: ["Mentoring", "Organization", "Planning"], // Labels
    chart: {
      type: "donut",
    },
    colors: ["#3B82F6", "#10B981", "#EF4444"], // Blue, Green, Red
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(1)}%`, // Show percentage values
    },
    legend: {
      show: false, // Hide default legend, custom legend below
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div style={{ textAlign: "center" }}>
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="donut" height={300} />
      
      {/* Custom Legend */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        {chartOptions.labels.map((label, index) => (
          <div key={index} style={{ textAlign: "center", margin: "0 15px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: chartOptions.colors[index],
                  marginRight: "5px",
                }}
              ></div>
              <span style={{ fontSize: "14px", color: chartOptions.colors[index] }}>{label}</span>
            </div>
            <strong>{chartOptions.series[index]}%</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
