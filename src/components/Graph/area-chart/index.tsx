import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js';

// Register necessary components
Chart.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'New users',
      data: [100, 150, 200, 800, 950, 430, 160, 940, 220, 880, 910, 100],
      fill: true,
      borderColor: 'rgba(255, 159, 64, 1)',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderDash: [5, 5],
      pointBackgroundColor: 'rgba(255, 159, 64, 1)',
      tension: 0.4,
    },
    {
      label: 'Old users',
      data: [100, 110, 220, 330, 440, 660, 740, 200, 810, 100, 750, 200],
      fill: true,
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderDash: [5, 5],
      pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      // position: 'top' as const
      position:'top' as const
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          let label = context.dataset.label || '';

          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += context.parsed.y;
          }
          return label;
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Months',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Value',
      },
    },
  },
};

const DualAreaChart: React.FC = () => {
  return (
    <>
  <h1>89% Orders Sucessfull</h1>
  <p>Overview of the last 2 month sales</p>
  <Line data={data} options={options} />
  </>
  );
};

export default DualAreaChart;
