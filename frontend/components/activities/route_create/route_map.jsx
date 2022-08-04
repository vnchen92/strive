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
        points: [],
        posted_on: new Date(),
        author_id: props.currentUser.id,
    })
    const [coords, setCoords] = useState([])
    const [allMarkers, setMarkers] = useState([])
    const [dis, setDistance] = useState(0)
    const [polyline, setPolyline] = useState("")
    const map = useRef()
    const directionsRenderer = useRef()

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
            setMarkers(mark => [...mark, marker])
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

            directionsRenderer.current = new google.maps.DirectionsRenderer();
            const directionsService = new google.maps.DirectionsService();
            directionsService.route(request, function(response, status) {
                if (status === 'OK') {
                    const distanceArray = response.routes[0].legs;
                    const poly = response.routes[0].overview_polyline
                    let totalDistance = 0;
                    distanceArray.forEach(dis => {
                        let stringNum = dis.distance.text.split(" ")[0];
                        totalDistance += parseFloat(stringNum);
                    })
                    setDistance(totalDistance);
                    setPolyline(poly)
                    directionsRenderer.current.setDirections(response);
                }
            }); 
            directionsRenderer.current.setMap(map.current);

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

    const convertPoints = (arrayOfLatLngObjects) => {
        let allPoints = {
            "each_coord": []
        }
        const coordinates = [];
        for (let i = 0; i < arrayOfLatLngObjects.length; i++) {
            let point = arrayOfLatLngObjects[i];
            let lat = point.lat();
            let lng = point.lng();
            coordinates.push([lat.toString(), lng.toString()])
        }
        allPoints.each_coord = coordinates;
        return allPoints;
    }

    const handleSubmit = e => {
        e.preventDefault();
        let newTime = `${checkForSingles(activityState.hours)}:${checkForSingles(activityState.minutes)}:${checkForSingles(activityState.seconds)}`;
        let convertedPoints = convertPoints(coords)
        props.createActivity({...activityState, time: newTime, distance: dis, static_map_url: polyline, points: convertedPoints})
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

    const handleCancel = e => {
        e.preventDefault();
        props.history.push('/dashboard/my_activities')
    }

    const clearMarkers = e => {
        e.preventDefault();
        for (let i = 0; i < allMarkers.length; i++) {
            allMarkers[i].setMap(nullls)
        }
        directionsRenderer.current.setMap(null)
        setCoords([])
        setDistance(0)
        setPolyline("")
    }

    return (
        <div className="route-ent-container">
            <div className="route-inner-container">
                <h1 className="route-title">Create a Customized Route</h1>
                <div className="route-left-right-container">
                    <div className="route-form-container">
                        <div className="route-errors">
                            {renderErrors()}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="route-dis-pace-container">
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
                                            step="any"
                                            min="0"
                                            value={activityState.pace}
                                            onChange={update('pace')} 
                                        />
                                        <abbr title="mi/hr">mi/hr</abbr>
                                    </div>
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
                            <div className='route-btn-container'>
                                <button className='create-submit-btn' type='submit'>Submit</button>
                                <button className='create-cancel-btn' onClick={handleCancel}>Cancel</button>
                                <button className='create-cancel-btn' onClick={clearMarkers}>Restart</button>
                            </div>
                        </form>
                    </div>
                    <div className="route-instruction-map-container">
                        <div className="route-instruction-container">
                            <p>Plan the perfect run or ride with features that help you find new roads or trails, flat or hilly options, nearby segments, and the most popular ways to get around.</p>
                            <p>Click anywhere on the map as your starting point. Watch the distance add up as you create your path.</p>
                            <p>Add as many markers as you would like.</p>
                            <p>Click 'Restart' if you would like to start over.</p>
                        </div>
                        <div id='usermap'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RouteMap;