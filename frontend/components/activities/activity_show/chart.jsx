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
	const labels = Array(100).fill("")

	const data = {
		labels: labels,
		datasets: [{
			data: elevationData,
			//backgroundColor: 'rgb(255, 99, 132)',
			borderColor: '#fc5200'
		  }]
	}

	const options = {
		scales: {
			y: {
				title: {
					display: true,
					text: "Meters"
				},
				beginAtZero: true,
			},
			x: {
				// title: {
				// 	display: true,
				// 	text: "Path from start to finish"
				// }
			}
		},
		plugins: {
			title: {
			  display: true,
			  text: "Elevation in meters"
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