marker = new google.maps.Marker({
      // map: map,
      position: parseLatLng(mark.position),
      // map: map,
      name: `${mark.name}`,
      message: `${mark.message}`,
      address: `${mark.address}`
    })
    marker.setMap(map);
    console.log(parseLatLng(mark.position))
    console.log(marker)
    // debugger
    displayMarkerInfo(marker)