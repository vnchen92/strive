import React from 'react';
import { fetchPathElevation } from '../../../util/elevation_api.util';
import { Line } from 'react-chartjs-2';

class Elevation extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        let elevationPoints = [];
        this.props.pathPoints.forEach(point => {
            elevationPoints.push(new google.maps.LatLng(point[0] * 1, point[1] * 1))
        })


        let elevator = new google.maps.ElevationService()
            .getElevationAlongPath({
                path: elevationPoints,
                samples: 10
            }, function(results, status){
                if (status === 'OK') {
                    //debugger
                    return results;
                } else {
                    console.log(status);
                }
            })
        
        let elevationData = [];
        // Object.values(elevator).forEach(result => {
        //     debugger
        //     elevationData.push(result.elevation)
        // })

        for (let i = 0; i < elevator.length; i++) {
            debugger
            elevationData.push(elevator[i].elevation)
        }

        console.log(elevationData);

        //polyline.points
        // const elevator = new google.maps.ElevationService();

        // const elevationData = elevator.getElevationAlongPath({
        //         path: 'gz|wFjrobMHYw@g@o@c@}BwAyAaA{@o@eAq@mCcBaHsEwJqG{B}AaCyAQIgBqAeAo@}CsBaHsEuJqGuOeKqAy@i@[e@_@wA}@SKQSq@c@oAy@cAq@bAaDxBeHJ]L]\o@R_@\gAp@mBPu@ZaAx@kCQC',
        //         samples: 50
        // }).then(({data}) => {
        //         debugger
        //         return data;
        //     })
        //     .catch(err => console.log(err));

        // let elevationData = elevator.getElevationAlongPath({
        //         path: this.props.elevationPoints,
        //         samples: 10,
        //      }, function(elevations, status) {
        //             debugger
        //             console.log(elevations);
        //      })

        //      debugger
        // let response =fetchPathElevation()
        //     .then((response) => {
        //     debugger
        //     console.log(JSON.stringify(response.data));
        //   })
        //   .catch((error) => {
        //     debugger
        //     console.log(error);
        //   });

        // let response = fetchPathElevation(this.props.polyline)
        //     .then(
        //         result => {
        //         //debugger
        //         return console.log({result});
        //     },
        //     error => {
        //         //debugger
        //          return console.log('error');
        //     })
            
        // //debugger
        // let filteredData = []
        // response.results.forEach(res => {
        //     filteredData.push(res.elevation)
        // })

        const data = {
            datasets: [{
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [1, 2, 5],
            }]
        };
        
          const config = {
            type: 'line',
            data: data,
            options: {},
          };

          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );
    }



    render() {
        debugger
        return (
            <div>
                <canvas id="myChart"></canvas>
            </div>
        )
    }
}

// const Elevation = ({pathPoints}) => {
//     let elevationPoints = [];
//     pathPoints.forEach(point => {
//         elevationPoints.push(new google.maps.LatLng(point[0] * 1, point[1] * 1))
//     })


//     let elevator = new google.maps.ElevationService()
//         .getElevationAlongPath({
//             path: elevationPoints,
//             samples: 10
//         }, function(results, status){
//             if (status === 'OK') {
//                 debugger
//                 return results;
//             } else {
//                 console.log(status);
//             }
//         })

//     let elevationData = [];
//     // Object.values(elevator).forEach(result => {
//     //     debugger
//     //     elevationData.push(result.elevation)
//     // })

//     for (let i = 0; i < elevator.length; i++) {
//         debugger
//         elevationData.push(elevator[i].elevation)
//     }

//     console.log(elevationData);

    
//     const data = {
//         datasets: [{
//           backgroundColor: 'rgb(255, 99, 132)',
//           borderColor: 'rgb(255, 99, 132)',
//           data: elevationData
//         }]
//     };
    
//       const config = {
//         type: 'line',
//         data: data,
//         options: {}
//       };

//       const myChart = new Chart(
//         document.getElementById('myChart'),
//         config
//       );
//     return (
//         <div>
//             <canvas id="myChart"></canvas>
//         </div>
//     )
// }

export default Elevation;