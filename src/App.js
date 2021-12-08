import './App.css';
import React from 'react';
import { Chart as ChartJS, ArcElement, Legend, Tooltip, } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Legend, Tooltip);

export const tasksChart = {
  labels: ['Завтрак', 'Обед', 'Перекусы', 'Ужин' ],
  datasets: [
    {
      label: '# of Tasks',
      data: [25, 25, 25, 15],
      backgroundColor: [
        'rgba(150, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(175, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(150, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(175, 192, 192, 1)',
      ],
      borderWidth: 3,
    },
  ],
};


export function App() {
  return (
    <div className="App">
      <h1 className="Title">Суточная калорийность рациона</h1>
      <Pie data={tasksChart} className="Сircle"/>
    </div>
  );
}

export default App;