import React from 'react';

const Kudos = ({kudos, activityId}) => {
    let kudoCount = 0;
    if (kudos[activityId]) {
        kudoCount = Object.values(kudos[activityId]).length;
    }
    return (
        <div className='kudo-num'>
            {
            kudoCount !== 0 ? (
                kudoCount === 1 ? `${kudoCount} kudo` : `${kudoCount} kudos`
            ) : (
                <></>
            )
            }
        </div>
    )
}

export default Kudos;