export const fetchPathElevation = () => {
    //debugger
    return $.ajax({
        method: 'GET',
        // url: `https://maps.googleapis.com/maps/api/elevation/json?path=enc:${staticMapUrl}&samples=50&key=${window.MAPS_API_KEY}`
        url: 'https://maps.googleapis.com/maps/api/elevation/json?path=enc:gz|wFjrobMHYw@g@o@c@}BwAyAaA{@o@eAq@mCcBaHsEwJqG{B}AaCyAQIgBqAeAo@}CsBaHsEuJqGuOeKqAy@i@[e@_@wA}@SKQSq@c@oAy@cAq@bAaDxBeHJ]L]\o@R_@\gAp@mBPu@ZaAx@kCQC@samples=10&key=AIzaSyDpbH2qlI6g7TPx7PAx3tCLKExXmrxJa-M'
    })
}

// export async function fetchPathElevation (staticMapUrl) {
//     const url = `https://maps.googleapis.com/maps/api/elevation/json?path=enc:${staticMapUrl}&samples=50&key=${window.MAPS_API_KEY}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.results;
// }