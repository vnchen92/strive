import React from 'react';
import { fetchPathElevation } from '../../util/elevation_api.util';

class Elevation extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        // let response = await fetchPathElevation(this.props.polyline)
        //     .then(function(res) {
        //         return res})
        //     .catch(function(err){
        //         console.log(err)
        //     })

        let response = fetchPathElevation(this.props.polyline)
            .then(
                result => {
                debugger
                return console.log({result});
            },
            error => {
                debugger
                 return console.log('error');
            })
            
        debugger
        let filteredData = []
        response.results.forEach(res => {
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