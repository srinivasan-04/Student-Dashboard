import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const yData = [200, 400, 600, 800, 1000]; // Data for the bar chart
const xLabels = ['2017', '2018', '2019', '2020', '2021']; // Year labels

export default function Bar() {
  return (
    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <BarChart
        width={500}
        height={300}
        series={[
          { data: yData, label: 'Monthly Statistics', id: 'statsId', color: '#4e79a7', barWidth: 0.5 },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band', label: 'Years' }]}
        yAxis={[{ label: 'Counts', tickSize: 6 }]}
      />
    </div>
  );
}
