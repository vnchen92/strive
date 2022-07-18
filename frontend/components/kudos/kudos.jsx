import React from 'react';

const Kudos = ({kudos, activityId}) => {
    let kudoCount = 0;
    if (kudos[activityId]) {
        kudoCount = Object.values(kudos[activityId]).length;
    }
    return (
        <div>
            {
            kudoCount !== 0 ? (
                `${kudoCount} kudos`
            ) : (
                <></>
            )
            }
        </div>
    )
}

export default Kudos;