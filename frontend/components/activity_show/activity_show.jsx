import React from 'react';
import Map from './map';
import Elevation from './elevation';

const ActivityShow = ({activity}) => {
    debugger
    return (
        <div>
            <Map activity={activity}/>
            {/* <Elevation polyline={activity.staticMapUrl}/> */}
        </div>
    )
}

export default ActivityShow;