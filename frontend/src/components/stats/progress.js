import React from "react";
import ReactApexChart from "react-apexcharts";

const Progress = () => {
  const [state, ] = React.useState({
    series: [70], // 70% completed
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "60%", // Adjust thickness of the hollow center
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              color: "#888",
              fontSize: "17px",
            },
            value: {
              color: "#111",
              fontSize: "22px",
              fontWeight: "bold",
              formatter: (val) => `${val}%`, // Display percentage
            },
          },
          track: {
            background: "#e7e7e7", // Non-completed background color
            strokeWidth: "100%",
          },
          fill: {
            colors: ["#20E647"], // Color for the completed part
          },
        },
      },
      labels: ["Completed"], // Label
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radialBar"
          height={300}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Progress;
