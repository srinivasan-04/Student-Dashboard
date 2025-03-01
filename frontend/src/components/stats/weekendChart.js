import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const WeekendChart = () => {
  const [state,] = useState({
    series: [
      {
        name: 'STOCK ABC',
        data: [31, 40, 28, 51, 42, 109, 100], // Example data
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false,
        },toolbar: {
            show: false // Removes the toolbar
          }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'This Week',
        align: 'left',
      },
      
      labels: [
        '2025-01-13',
        '2025-01-14',
        '2025-01-15',
        '2025-01-16',
        '2025-01-17',
        '2025-01-18',
        '2025-01-19',
      ], // Example dates (1 week)
      xaxis: {
        type: 'datetime',
        labels: {
          format: 'ddd', // Formats as short weekday (e.g., Mon, Tue)
        },
      },
      yaxis: {
        labels: {
          formatter: (value, index) => {
            const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            return weekdays[index % weekdays.length]; // Assign weekdays to Y-axis
          },
        },
      },
      legend: {
        horizontalAlign: 'left',
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={200}
        />
      </div>
    </div>
  );
};

export default WeekendChart;
