import React from "react";
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [10, 40, 20, 60, 30, 100, 90]; // Theory data
const pData = [15, 70, 50, 40, 55, 65, 75]; // Practice data
const xLabels = [
  '10 Oct',
  '12 Oct',
  '14 Oct',
  '16 Oct',
  '18 Oct',
  '20 Oct',
  '22 Oct',
];

const Line = () => {
  return (
    <section >
      
      <LineChart
        width={600}
        height={300}
        series={[
          { data: pData, label: 'Practice (Hours)', yAxisId: 'leftAxisId', color: 'blue' },
          { data: uData, label: 'Theory (Hours)', yAxisId: 'leftAxisId', color: 'orange' },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels, label: 'Dates' }]}
        yAxis={[{ id: 'leftAxisId', label: 'Hours' }]}
      />
    </section>
  );
};

export default Line;
