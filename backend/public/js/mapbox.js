
mapboxgl.accessToken = 'pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w'
//Create imageMap
const map = new mapboxgl.Map({
    container: 'map',
    style: 'https://geoserveis.icgc.cat/contextmaps/icgc_orto_hibrida.json',
    center: [1.3800, 41.72], // starting position [lng, lat]
    zoom: 6.5,
    maxZoom: 25,
    minZoom: 1.65,
    projection: 'globe'
})


// Widget search coordinates adrres.
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    placeholder: 'toponym or Lat, long',
    mapboxgl: mapboxgl
})
document.querySelector('.geocoderContainer').appendChild(geocoder.onAdd(map))

const controlNavigation = new mapboxgl.NavigationControl()
document.querySelector('.NavigationControlContainer').appendChild(controlNavigation.onAdd(map))

// widget geolocate.
const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  });
  document.querySelector('.geolocateContainer').appendChild(geolocate.onAdd(map))

  // Show coordinates /////////////
document.querySelector('.coordinatesContainer').innerHTML = `Lat: 00.0000 Long: 0.0000 `
map.on('mousemove', (e) => {
  let lat = e.lngLat.lat.toFixed(4)
  let lng = e.lngLat.lng.toFixed(4)
  document.querySelector('.coordinatesContainer').innerHTML = `Latitude: ${lat} Longitude: ${lng}`
})
// Show zoom degree /////////////
document.querySelector('.zoomDegreeContainer').innerHTML = `Zoom: 7.70 Degree: 0   º  Scale:`
map.on('move', () => {
  let zoom = map.getZoom().toFixed(2)
  let degree = map.getPitch().toFixed(0)
  document.querySelector('.zoomDegreeContainer').innerHTML = `Zoom: ${zoom} Degree: ${degree}  º  Scale:`
})
// Copy coordinates /////////////
document.querySelector('.copyCoorContainer').innerHTML = `Double click copy Latitude Longitude`
map.on('dblclick', function (e) {
  let lat = e.lngLat.lat.toFixed(4)
  let lng = e.lngLat.lng.toFixed(4)
  document.querySelector('.copyCoorContainer').innerHTML = `Latitude: ${lat} Longitude: ${lng}`
})
// Camera heigth ///////////////
let scale = new mapboxgl.ScaleControl({
  width: 80,
  unit: 'metric'
})
document.querySelector('.cameraHeightContainer').appendChild(scale.onAdd(map))
 
//Change cursor mouse
map.getCanvas().style.cursor = "default"
map.on("mouseenter", "clusters", () => {
  map.getCanvas().style.cursor = "pointer"
})