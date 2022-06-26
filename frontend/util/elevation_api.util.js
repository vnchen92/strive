export const fetchPathElevation = (staticMapUrl, apiKey) => {
    return $.ajax({
        method: 'GET',
        url: `https://maps.googleapis.com/maps/api/elevation/json?path=enc:${staticMapUrp}&samples=50&key=${apiKey}`
    })
}