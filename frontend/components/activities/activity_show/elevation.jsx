import { Chart } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { fetchPathElevation } from '../../../util/elevation_api.util';
import LineChart from './chart';

const Elevation = props => {
    const [elevationData, setElevation] = useState([])
    const [allElevation, setAllElevation] = useState([])

    let elevationPoints = [];
    props.pathPoints.forEach(point => {
        elevationPoints.push(new google.maps.LatLng(point[0] * 1, point[1] * 1))
    })

    new google.maps.ElevationService()
        .getElevationAlongPath({
            path: elevationPoints,
            samples: 10
        }, (results, status) => {
            if (status === 'OK') {
                setElevation([...results])
            } else {
                //console.log(status);
            }
        })
    
    useEffect(() => {
        if (elevationData.length !== 0) {
            for (let i = 0; i < elevationData.length; i++) {
                setAllElevation(data => [...data, elevationData[i].elevation])
            }
        }
    }, [])

    if (allElevation) {
        return (
            <div>
                <LineChart elevationData={allElevation} />
            </div>
        )
    } else {
        <></>
    }
}

// class Elevation extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             elevations: []
//         }
//     }

//     componentDidMount() {
//         //debugger
//         let elevationPoints = [];
//         this.props.pathPoints.forEach(point => {
//             elevationPoints.push(new google.maps.LatLng(point[0] * 1, point[1] * 1))
//         })

//         new google.maps.ElevationService()
//             .getElevationAlongPath({
//                 path: elevationPoints,
//                 samples: 10
//             }, (results, status) => {
//                 if (status === 'OK') {
//                     debugger
//                     this.setState({ elevations: results })
//                 } else {
//                     //console.log(status);
//                 }
//             })
//     }

//     render() {
//         let elevationData = [];
//         for (let i = 0; i < this.state.elevations.length; i++) {
//             elevationData.push(this.state.elevations[i].elevation)
//         }
        
//         debugger
//         // const data = {
//         //     datasets: [{
//         //       backgroundColor: 'rgb(255, 99, 132)',
//         //       borderColor: 'rgb(255, 99, 132)',
//         //       data: elevationData,
//         //     }]
//         // };
        
//         // const config = {
//         //     type: 'line',
//         //     data: data,
//         //     options: {},
//         // };

//         // let component;
//         // if (this.state.elevations.length === 0) {
//         //     component = <></>
//         // } else {
//         //     component = <LineChart elevation={this.state.elevations} />
//         // }

//         // this.context = this.chartRef.current.getContext('2d');
//         // const ctx = document.getElementById("myChart");

//         // const myChart = new Chart(document.getElementById('myChart'),config);

//         return (
//             // <div className='activity-chart-container'>
//             //     <canvas id="myChart" ref={this.chartRef}></canvas>
//             // </div>
//             // <div>
//             //     {component}
//             // </div>
//             <div>

//             </div>
//         )
//     }
// }

export default Elevation;
