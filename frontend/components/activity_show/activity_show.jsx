import React from 'react';

class ActivityShow extends React.Component {
    
    componentDidMount() {
        const directionsRenderer = new google.maps.DirectionsRenderer();
        const mapCenter = {
            center: {lat: 40.783254, lng: -73.974529},
            zoom: 13,    
        }
        const map = new google.maps.Map(document.getElementById('map'), mapCenter);
        directionsRenderer.setMap(map);


        const startPoint = new google.maps.LatLng(40.612184, -73.993990);
        const midPoint = new google.maps.LatLng(40.604206, -73.997509);
        const endPoint = new google.maps.LatLng(40.597221, -73.986136);
        const directionsService = new google.maps.DirectionsService();
        const request = {
            origin: startPoint,
            destination: endPoint,
            travelMode: 'WALKING',
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            waypoints: [{
                location: midPoint,
                stopover: false
            }],
            optimizeWaypoints: false
        }

        directionsService.route(request, function(response, status) {
            if (status === 'OK') {
                directionsRenderer.setDirections(response);
                console.log(response);
            }
        });
    }

    render(){
        return (
            <div id='map'></div>
        )
    }
}

export default ActivityShow;