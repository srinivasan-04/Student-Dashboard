import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Pie = () => {
  const [state, ] = React.useState({
    series: [80, 60, 40], // Data values for Science, Chemistry, and English
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Science', 'Chemistry', 'English'], // Labels
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Pie;