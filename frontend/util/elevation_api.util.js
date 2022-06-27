export const fetchPathElevation = (staticMapUrl) => {
    debugger
    return $.ajax({
        method: 'GET',
        url: `https://maps.googleapis.com/maps/api/elevation/json?path=enc:${staticMapUrl}&samples=50&key=${window.MAPS_API_KEY}`
    })
}

// export async function fetchPathElevation (staticMapUrl) {
//     const url = `https://maps.googleapis.com/maps/api/elevation/json?path=enc:${staticMapUrl}&samples=50&key=${window.MAPS_API_KEY}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data.results;
// }