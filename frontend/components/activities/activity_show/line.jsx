
import React from 'react';
import Chart from 'chart.js/auto';

class LineChart extends React.Component {
    chartRef = React.createRef();

    componentDidMount() {
        debugger
		const ctx = this.chartRef.current.getContext("2d");

		new Chart(ctx, {
			type: 'line',
            data: {
                datasets: [{
                    data: this.props.elevation,
                    borderColor: "#3e95cd",
					backgroundColor: "#7bb6dd",
                }]
            },
		});
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