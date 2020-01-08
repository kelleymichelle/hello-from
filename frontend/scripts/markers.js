// marker stands for marker created

function pushMarker() {
  let thisMarker = {
    // map: `${marker.map}`,
    position: `${marker.position}`,
    name: `${marker.name}`,
    message: `${marker.message}`,
    address: `${marker.address}`
  };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(thisMarker)
  };
  fetch(`${BACKENDURL}/markers`, configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // console.log(data)
      // console.log("Marker successfully saved")
    })
};

function loadMarkers() {
  fetch(`${BACKENDURL}/markers`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // console.log(data)
      showMarkers(data)
    })
}

// const parseLatLng = (position) => {
//   const splitPos = position.split(" ")
//   return new google.maps.LatLng(parseInt(splitPos[0]), parseInt(splitPos[1]))
// }

// const parseLatLng = (position) => new google.maps.LatLng(position)

function showMarkers(data) {
  data.forEach(mark => geocodeSavedMarkers(mark)) 
}

function geocodeSavedMarkers(data) {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': data.address}, function(results, status) {

    if (status === 'OK') {
      map.setCenter(results[0].geometry.location);
      marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        name: data.name,
        message: data.message,
        address: data.address
      });
      pushMarker(marker)
      displayMarkerInfo(marker);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}