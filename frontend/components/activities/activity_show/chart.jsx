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
		labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		datasets: [{
			data: elevationData,
			//backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)'
		  }]
	}
	
	return (
		<div>
			<Line
				data={data}
				options={{
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
				}}
			/>
		</div>
	)
}

export default LineChart;