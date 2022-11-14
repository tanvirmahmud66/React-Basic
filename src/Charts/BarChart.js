import React, { useState } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { userData } from './Data'
import {Chart as ChartJS} from 'chart.js/auto';

export default function BarChart() {
    const [data, setData] = useState({
        labels: userData.map((each)=>each.year),
        datasets: [
            {
                label: "User Gained",
                data: userData.map((each)=>each.gain),
                backgroundColor: "green"
            },
            {
                label: "User Dropped",
                data: userData.map((each)=>each.drop),
                backgroundColor: "red"
            }
        ]
    });
  return (
    <div style={{width:"500px", display:"flex"}}>
        <Bar data={data}/>
        <Line data={data}/>
        <Pie data={data}/>
    </div>
  )
}
