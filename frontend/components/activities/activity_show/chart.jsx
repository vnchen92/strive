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
	debugger
	return (
		<div>
			<Line
				data={
					{datasets: [{
						backgroundColor: 'rgb(255, 99, 132)',
						borderColor: 'rgb(255, 99, 132)',
						data: elevationData,
					  }]}
				}
				options={{
				//   plugins: {
				// 	title: {
				// 	  display: true,
				// 	  text: "Cryptocurrency prices"
				// 	},
				// 	legend: {
				// 	  display: true,
				// 	  position: "bottom"
				//    }
				  //}
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