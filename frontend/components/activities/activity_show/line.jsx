
import React from 'react';
import Chart from 'chart.js/auto';

class LineChart extends React.Component {
    chartRef = React.createRef();

    componentDidMount() {
        //debugger
		const ctx = this.chartRef.current.getContext("2d");

		//console.log(this.props.elevation);

		const data = {
            datasets: [{
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: this.props.elevation,
            }]
        };

		const config = {
            type: 'line',
            data: data,
            options: {},
        };

		new Chart(ctx, config);
	}

	render() {
		return (
			<div className='activity-chart-container'>
				<canvas
				id="myChart"
				ref={this.chartRef}
				/>
			</div>
			)
	}
}

export default LineChart;