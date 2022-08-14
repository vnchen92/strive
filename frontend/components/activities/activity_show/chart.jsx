import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	} from 'chart.js';
	
	ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
	);
import { Line } from "react-chartjs-2";

const LineChart = ({elevationData}) => {
	const data = {
		labels: ["", "", "", "", "", "", "", "", "", ""],
		datasets: [{
			data: elevationData,
			//backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)'
		  }]
	}

	const options = {
		scales: {
			y: {
				beginAtZero: true
			}
		},
		plugins: {
			title: {
			  display: true,
			  text: "Elevation"
			},
			legend: {
			  display: false
			  //position: "bottom"
		   	}
		}
	}
	
	return (
		<div>
			<Line
				data={data}
				options={options}
			/>
		</div>
	)
}

export default LineChart;