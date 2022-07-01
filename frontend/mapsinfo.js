https://maps.googleapis.com/maps/api/staticmap?size=500x250&path=color:0xf55142FF


//first run of the season
|40.785107,-73.976891|40.802957,-73.963849|40.800675,-73.958517  
https://maps.googleapis.com/maps/api/staticmap?size=500x250&path=color:0xf55142FF|enc:gz|wFjrobMHYw@g@o@c@}BwAyAaA{@o@eAq@mCcBaHsEwJqG{B}AaCyAQIgBqAeAo@}CsBaHsEuJqGuOeKqAy@i@[e@_@wA}@SKQSq@c@oAy@cAq@bAaDxBeHJ]L]\o@R_@\gAp@mBPu@ZaAx@kCQC&key=

//Let's GOOOOO
const startPoint = new google.maps.LatLng(40.731179,-73.9193351);
const midPoint = new google.maps.LatLng(40.735542,-73.918354);
const mid = new google.maps.LatLng(40.735916,-73.914556);
const mi = new google.maps.LatLng(40.742277,-73.913054);
const end = new google.maps.LatLng(40.741342, -73.909127);
const endPoint = new google.maps.LatLng(40.719728, -73.911273);
https://maps.googleapis.com/maps/api/staticmap?size=500x250&path=color:0xf55142FF|enc:airwFrjdbMDYUEi@OgCg@mBUW@_@EaCYcBS{De@k@ISCSC?k@EiA?q@AiASuDa@aHAOGREMNEMJa@G_AMyB[eDg@wLiBoK}A_@GOC?KBQDeA`@_H^oGt@sM~MlBfB`@rCn@lG~BlA^lFlB~B~@bBp@pAh@RPdA\xAh@b@NdB^jCd@lC\t@Bb@DD@?WBwDN?HU`@qAb@qAl@kA`B}C`@}@vBeF\}@Zb@x@lAzB~C`CjD^d@Pi@pBGrBKhCWfDa@dDKdEKjAC`BEXzA^tBd@fCN|@RpAVvA&key=


const startPoint = new google.maps.LatLng(40.665615, -73.976075);
        const midPoint = new google.maps.LatLng(40.664162, -73.965175);
        const endPoint = new google.maps.LatLng(40.663324, -73.962536);
https://maps.googleapis.com/maps/api/staticmap?size=500x250&path=color:0xf55142FF|enc:ioewF|mobMa@]Pk@IGwBcBGGmB{Aa@]HUKGKMEGa@[e@k@KYBk@T[@W@c@Fm@R}@CWMa@DqCT?L}Af@qCJ]Te@l@s@DGTCd@IJ_@Rq@JQr@_Ax@MJE^WI}@@_@R_@HQ?IFGAc@Jk@b@?NkABkAEUAIE?MGEIU{@GY?KLM^[r@c@|@U\IHGXWzAqATc@BS@}@Gk@RMDYAAYg@u@yBXQrAy@VOWQIQ]P&key=


//training for 10k
const startPoint = new google.maps.LatLng(40.638778, -74.036007);
const endPoint = new google.maps.LatLng(40.616064, -74.038067);
https://maps.googleapis.com/maps/api/staticmap?size=500x250&path=color:0xf55142FF|enc:ig`wF`d{bMCRF@JDx@Jf@D@RFPXX^TLAFJvAl@fBn@p@RPHn@Pd@F^X`@PVH`@@d@G\?XIb@YJQNORM\MTENAn@Nn@T^XVTVTLFLJVNj@Tp@\f@b@|AdBXN|@h@b@b@`AnAh@z@RV\Xb@Vd@N\Ht@L~@JfBHhAXfAHv@@vBC`D`@hBJb@BhAAhBQ|AMHGJBjBJd@EXKZGz@g@hAe@pAYZCHA~@DnDr@`AJp@C~@OhBs@~DuApFuC|BoAFGBWdBgAACAG&key=

//need carbs
const startPoint = new google.maps.LatLng(40.612184, -73.993990);
const midPoint = new google.maps.LatLng(40.604206, -73.997509);
const endPoint = new google.maps.LatLng(40.597221, -73.986136);
https://maps.googleapis.com/maps/api/staticmap?size=500x250&path=color:0xf55142FF|enc:u`{vFx}rbMrGiMrBxBnBrBzA~ANVzA~ATNnBrB~EdF~EjFbEjEHHd@cAp@kArAkCzA_Db@y@d@_ARWrAsCt@{Av@_B|FuKjD}G|A{C^b@Xg@^u@\q@tAmC|A{CvAoCCDd@}@&key=






old way
https://maps.googleapis.com/maps/api/staticmap?size=500x250&path=color:0xf55142|40.785107,-73.976891|40.802957,-73.963849|40.800675,-73.958517&key=MAPS_API_KEY






Directions request object:

https://maps.googleapis.com/

const startPoint = new google.maps.LatLng(40.785107, -73.976891);
const midPoint = new google.maps.LatLng(40.802957, -73.963849);
const endPoint = new google.maps.LatLng(40.800675, -73.958517);

function calculateRoute() {
    const request = {
        origin: LatLng,
        destination: LatLng,
        travelMode: 'WALKING',
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        waypoints[]: {
            location: LatLng,
            stopover: false
        },
        optimizeWaypoints: false
    }
    directionsService.route(request, function(response, status) {
        if (status === 'OK') {
            directionsRenderer.setDirections(response);
        }
    });
}







//creates map and route for you on google maps:

const directionsRenderer = new google.maps.DirectionsRenderer();
const mapCenter = {
    center: {lat: 40.783254, lng: -73.974529},
    zoom: 13,    
}
const map = new google.maps.Map(document.getElementById('map'), mapCenter);
directionsRenderer.setMap(map);


const startPoint = new google.maps.LatLng(40.731179,-73.9193351);
const midPoint = new google.maps.LatLng(40.742277,-73.913054);
const endPoint = new google.maps.LatLng(40.735916,-73.914556);
const directionsService = new google.maps.DirectionsService();
const request = {
    origin: startPoint,
    destination: endPoint,
    travelMode: 'WALKING',
    unitSystem: google.maps.UnitSystem.IMPERIAL,
    waypoints: [{
        location: midPoint,
        stopover: false
    }],
    optimizeWaypoints: false
}

directionsService.route(request, function(response, status) {
    if (status === 'OK') {
        directionsRenderer.setDirections(response);
        // console.log(response);
    }
});