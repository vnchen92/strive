import { Chart } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { fetchPathElevation } from '../../../util/elevation_api.util';
import LineChart from './chart';

const Elevation = props => {
    const [elevationData, setElevation] = useState([])
    const [chartDiv, setChartDiv] = useState(<></>)

    let elevationPoints = [];
    props.pathPoints.forEach(point => {
        elevationPoints.push(new google.maps.LatLng(point[0] * 1, point[1] * 1))
    })

    useEffect(() => {
        new google.maps.ElevationService()
            .getElevationAlongPath({
                path: elevationPoints,
                samples: 10
            }, (results, status) => {
                if (status === 'OK') {
                    let allPoints = []
                    results.forEach(obj => {
                        allPoints.push(obj.elevation)
                    })
                    setElevation([...allPoints])
                } else {
                    //console.log(status);
                }
            })
    }, [])
    

    useEffect(() => {
        if (elevationData.length > 0) {
            setChartDiv(<LineChart elevationData={elevationData} />)
        }
    }, [elevationData])

    return (
        <div>
            {chartDiv}
        </div>
    )
}

export default Elevation;
