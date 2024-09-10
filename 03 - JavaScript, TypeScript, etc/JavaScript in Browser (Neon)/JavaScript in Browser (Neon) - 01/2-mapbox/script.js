//// "2:45" more information

navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
  // console.log(`${position.coords.latitude},${position.coords.longitude}`);
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYW1pcmFiYmFzaSIsImEiOiJjbDBrd2lrbmUwMXI5M2duM3FscmRndW5tIn0.04lqMRoeEwEvZmgufXe6QA";
  const map = new mapboxgl.Map({
    container: "map", //// container ID
    style: "mapbox://styles/mapbox/streets-v11", //// style URL
    center: [position.coords.latitude, position.coords.longitude], //// starting position [lng, lat]
    zoom: 13, //// starting zoom
  });
}
