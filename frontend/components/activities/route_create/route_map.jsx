import React, { useEffect, useState, useRef } from 'react';

const RouteMap = (props) => {
    const [activityState, setActivityState] = useState({
        title: "",
        body: "",
        distance: "",
        pace: "",
        hours: "",
        minutes: "",
        seconds: "",
        time: "",
        posted_on: new Date(),
        author_id: props.currentUser.id,
    })
    const [coords, setCoords] = useState([])
    const [distance, setDistance] = useState(0)
    const map = useRef()

    const mapCenter = {
        center: {lat: 40.783254, lng: -73.974529},
        zoom: 13,    
    }

    useEffect(() => {
        props.removeActivityErrors()
        map.current = new google.maps.Map(document.getElementById("usermap"), mapCenter);

        const addMarker = (location, map) => {
            let marker = new google.maps.Marker({
              position: location,
              map: map,
            });
        }

        google.maps.event.addListener(map.current, "click", (event) => {
            setCoords(coord => [...coord, event.latLng])
            addMarker(event.latLng, map.current);
        });

    }, [])

    useEffect(() => {
        const renderPath = () => {
            let mids = []
            for(let i = 1; i < coords.length - 1; i++) {
                let point = coords[i];
                let wayPoint = {};
                wayPoint['location'] = new google.maps.LatLng(point);
                mids.push(wayPoint);
                wayPoint = {}
            }

            const request = {
                origin: new google.maps.LatLng(coords[0]),
                destination: new google.maps.LatLng(coords[coords.length - 1]),
                travelMode: 'WALKING',
                unitSystem: google.maps.UnitSystem.IMPERIAL,
                waypoints: mids
            }

            const directionsRenderer = new google.maps.DirectionsRenderer();
            const directionsService = new google.maps.DirectionsService();
            directionsService.route(request, function(response, status) {
                if (status === 'OK') {
                    const distanceArray = response.routes[0].legs;
                    debugger
                    let totalDistance = 0;
                    distanceArray.forEach(dis => {
                        let stringNum = dis.distance.text.split(" ")[0];
                        totalDistance += parseFloat(stringNum);
                    })
                    setDistance(totalDistance);
                    directionsRenderer.setDirections(response);
                }
            }); 
            debugger
            directionsRenderer.setMap(map.current);

        }

        if (coords.length > 1) {
            renderPath();
        }
    }, [coords])

    const update = field => {
        return e => {
            e.preventDefault();
            setActivityState({ ...activityState, [field]: e.currentTarget.value })
        }
    }

    const renderErrors = () => {
        return (
            props.errors.map((error, idx) => {
                return <li key={idx}>{error}</li>
            })
        )
    }

    return (
        <div>
            <div>
                <h1>Create a Customized Route</h1>
                <div>
                    <div>
                        <div>
                            <p>Plan the perfect run or ride with features that help you find new roads or trails, flat or hilly options, nearby segments, and the most popular ways to get around.</p>
                        </div>
                        <div>
                            <p>Click anywhere on the map as your starting point.</p>
                            <p>Add as many markers as you would like.</p>
                            <p>Click 'Start Over' if you would like to restart.</p>
                        </div>
                        <div>
                            {renderErrors()}
                        </div>
                        <div className='create-label-container'>
                            <label className='create-label'>Distance</label>
                            <div className='create-num-container'>
                                <input 
                                    className='create-num-input'
                                    type="number"
                                    disabled='disabled'
                                    value={distance}
                                />
                                <abbr title="miles">miles</abbr>
                            </div>
                        </div>
                        <div className='create-label-container'>
                            <label className='create-label'>Pace Goal</label>
                            <div className='create-num-container'>
                                <input 
                                    className='create-num-input'
                                    type="number"
                                    min="0"
                                    value={activityState.pace}
                                    onChange={update('pace')} 
                                />
                                <abbr title="mi/hr">mi/hr</abbr>
                            </div>
                        </div>
                        <div className='create-label-container'>
                            <label className='create-label'>Time Goal</label>
                            <div className='create-ent-time-container'>
                                <div className='create-time-container'>
                                    <input 
                                        type="number"
                                        min="0"
                                        placeholder='00'
                                        value={activityState.hours}
                                        onChange={update('hours')}
                                    />
                                    <abbr title="hours">hr</abbr>
                                </div>
                                <div className='create-time-container'>
                                    <input 
                                        type="number"
                                        min="0"
                                        placeholder='00'
                                        value={activityState.minutes}
                                        onChange={update('minutes')}
                                    />
                                    <abbr title="minutes">min</abbr>
                                </div>
                                <div className='create-time-container-s'>
                                    <input 
                                        type="number"
                                        min="0" 
                                        placeholder='00'
                                        value={activityState.seconds}
                                        onChange={update('seconds')}
                                    />
                                    <abbr title="seconds">s</abbr>
                                </div>
                            </div>
                        </div>
                        <div className='create-text-container-top'>
                            <label className='create-label'>Title</label>
                            <input 
                                className='create-title-input'
                                type="text" 
                                value={activityState.title}
                                onChange={update('title')}
                            />
                        </div>
                        <div className='create-text-container'>
                            <label className='create-label'>Description</label>
                            <div>
                                <textarea
                                    className='create-description-input'
                                    type="text"
                                    value={activityState.body}
                                    onChange={update('body')} 
                                />
                            </div>
                        </div>
                    </div>
                    <div id='usermap'></div>
                </div>
            </div>
        </div>
    )
}

export default RouteMap;