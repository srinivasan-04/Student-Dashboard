import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';  // Ensure you have installed 'react-apexcharts' and 'apexcharts'

const Attendance = () => {
    const [state, setState] = React.useState({
          
        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, ],
        options: {
          chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: false // Removes the toolbar
              }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            categories: ['classA', 'classB', 'classC', 'classD', 'classE', 'classF']
          },
        //   yaxis: {
        //     labels: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6'] // Corresponding to each week
        //   },
          tooltip: {
            enabled: true,
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
          height={300}
        />
      </div>
    </div>
  );
}

export default Attendance;
