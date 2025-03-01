import React from 'react';
import ReactApexChart from 'react-apexcharts';  // Ensure you have installed 'react-apexcharts' and 'apexcharts'

const Report = () => {
    const [state, ] = React.useState({
          
        series: [{
            name: 'series1',
            data: [25, 38, 45, 60, 55, 80, 95] // Gradual increase with some variation
          },
          {
            name: 'series2',
            data: [40, 55, 50, 70, 65, 120, 140] // Slightly higher range with occasional jumps
          },
           ],
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
          // width={500}
        />
      </div>
    </div>
  );
}

export default Report;
