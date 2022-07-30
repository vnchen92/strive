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
        static_map_url: "",
        posted_on: new Date(),
        author_id: props.currentUser.id,
    })
    const [coords, setCoords] = useState([])
    const [dis, setDistance] = useState(0)
    const [polyline, setPolyline] = useState("")
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
                    const poly = response.routes[0].overview_polyline
                    debugger
                    let totalDistance = 0;
                    distanceArray.forEach(dis => {
                        let stringNum = dis.distance.text.split(" ")[0];
                        totalDistance += parseFloat(stringNum);
                    })
                    setDistance(totalDistance);
                    setPolyline(poly)
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

    const checkForSingles = (num) => {
        if (num < 10) {
            let currentNum = "0" + num;
            return currentNum;
        }
        return num;
    }

    const handleSubmit = e => {
        e.preventDefault();
        let newTime = `${checkForSingles(activityState.hours)}:${checkForSingles(activityState.minutes)}:${checkForSingles(activityState.seconds)}`;
        //setActivityState({...activityState, time: newTime})
        //setActivityState({...activityState, distance: distance})
        debugger
        props.createActivity({...activityState, time: newTime, distance: dis, static_map_url: polyline})
            .then(() => props.history.push('/dashboard/my_activities'))
    }

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
                        <form onSubmit={handleSubmit}>
                            <div className='create-label-container'>
                                <label className='create-label'>Distance</label>
                                <div className='create-num-container'>
                                    <input 
                                        className='create-num-input'
                                        type="number"
                                        disabled='disabled'
                                        value={dis}
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
                            <div className='create-btn-container'>
                                <button className='create-submit-btn' type='submit'>Submit</button>
                                <button className='create-cancel-btn'>Cancel</button>
                            </div>
                        </form>
                    </div>
                    <div id='usermap'></div>
                </div>
            </div>
        </div>
    )
}

export default RouteMap;