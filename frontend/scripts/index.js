// function initMap() {
//   var myLatLng = {lat: 29.9511, lng: -90.0715}; //New Orleans latlng

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: myLatLng
//   })
// }
const BACKENDURL = 'http://localhost:3000'

// fetch(`${BACKENDURL}/test`)
//   .then(response => response.json())
//   .then(parsedResponse => console.log(parsedResponse))

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4.5,
    center: {lat: 37.0902, lng: -95.7129} //center of US
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
  loadMarkers();
}

let marker;

function geocodeAddress(geocoder, resultsMap) {
  const address = document.getElementById('address').value;
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  geocoder.geocode({'address': address}, function(results, status) {

    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
        name: name,
        message: message,
        address: address
      });
      pushMarker(marker)
      displayMarkerInfo(marker);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

let createContentString = (name, message) => {
    return `<div id="info-window">
      <h1>Message from ${name}:</h1> 
      <h3>${message}</h3>
    </div>`
}

function displayMarkerInfo(marker) {
  let infoWindow = new google.maps.InfoWindow({
    content: `${createContentString(marker.name, marker.message)}`
  })
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}
