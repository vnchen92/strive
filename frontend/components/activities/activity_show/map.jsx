import React from 'react';
import Elevation from './elevation';

class Map extends React.Component {

    componentDidMount() {
        let pathPoints = this.props.activity.points.each_coord;
        const mapCenter = {
            center: {lat: 40.783254, lng: -73.974529},
            zoom: 13,    
        }
        const map = new google.maps.Map(document.getElementById('map'), mapCenter);
        
        
        const first = pathPoints[0];
        const last = pathPoints[pathPoints.length-1];
        let mids = [];
        for (let i = 1; i < pathPoints.length - 1; i++) {
            let point = pathPoints[i];
            let wayPoint = {};
            wayPoint['location'] = new google.maps.LatLng(point[0] * 1, point[1] * 1);
            //wayPoint['stopover'] = false;
            mids.push(wayPoint);
            wayPoint = {};
        }

        const startPoint = new google.maps.LatLng(first[0] * 1, first[1] * 1);
        const endPoint = new google.maps.LatLng(last[0] * 1, last[1] * 1);

        const request = {
            origin: startPoint,
            destination: endPoint,
            travelMode: 'WALKING',
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            waypoints: mids,
            //optimizeWaypoints: false
        }

        const directionsRenderer = new google.maps.DirectionsRenderer();
        const directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status) {
            if (status === 'OK') {
                directionsRenderer.setDirections(response);
            }
        }); 

        directionsRenderer.setMap(map);
    }

    render(){
        return (
            <div className='activity-map-and-chart-container'>
                <div className='activity-map-container'>
                    <div id='map'></div>
                </div>
                {/* <Elevation pathPoints={this.props.activity.points} /> */}
            </div>
        )
    }
}

export default Map;