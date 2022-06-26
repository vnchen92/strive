import React from 'react';
import { fetchPathElevation } from '../../util/elevation_api.util';

class Elevation extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        let response;
        fetchPathElevation().then(res => response = res);
        let filteredData = []
        response.result.forEach(res => {
            filteredData.push(res.elevation)
        })

        const data = {
            datasets: [{
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: filteredData
            }]
        };
        
          const config = {
            type: 'line',
            data: data,
            options: {}
          };

          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );
    }



    render() {
        return (
            <div>
                <canvas id="myChart"></canvas>
            </div>
        )
    }
}

export default Elevation;