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
	//debugger
	const data = {
		labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		datasets: [{
			data: elevationData,
			//backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)'
		  }]
	}
	console.log(data.datasets[0].data)
	return (
		<div>
			<Line
				data={data}
				options={{
				   plugins: {
				// 	title: {
				// 	  display: true,
				// 	  text: "Cryptocurrency prices"
				// 	},
					legend: {
					  display: false
					  //position: "bottom"
				   }
				  }
				}}
			/>
		</div>
	)
    // chartRef = React.createRef();

    // componentDidMount() {
    //     //debugger
	// 	const ctx = this.chartRef.current.getContext("2d");

	// 	//console.log(this.props.elevation);

	// 	const data = {
    //         datasets: [{
    //           backgroundColor: 'rgb(255, 99, 132)',
    //           borderColor: 'rgb(255, 99, 132)',
    //           data: this.props.elevation,
    //         }]
    //     };

	// 	const config = {
    //         type: 'line',
    //         data: data,
    //         options: {},
    //     };

	// 	new Chart(ctx, config);
	// }

	// render() {
	// 	return (
	// 		<div className='activity-chart-container'>
	// 			<canvas
	// 			id="myChart"
	// 			ref={this.chartRef}
	// 			/>
	// 		</div>
	// 		)
	// }
}

export default LineChart;