import React from 'react';
import ReactDOM from 'react-dom';


export class Basemap extends React.Component{

  constructor(){
    super();
    this.state = {
      test: 'string to be rendered for test purposes in this.state constructor'
      // interests: ['cemetary']

    }
    // this.initMap = this.initMap.bind(this),
    this.map;
    this.infowindow;
  }

  // initMap(){
  //   var carrolton = {lat: 29.9559601, lng: -90.1205441};

  //   map = new google.maps.Map(document.getElementById('map'), {
  //   center: carrolton,
  //   zoom: 15
  //   });

  //   infowindow = new google.maps.InfoWindow();//creates the map
  //   //below adds services/in our case interests on map.
  //   var service = new google.maps.places.PlacesService(map);
  //   service.nearbySearch({
  //     location: carrolton,
  //     radius: 1500,
  //     keyword: this.props.interests[0],//this will be user/database defineed
  //   }, this.callback);
  //   var service2 = new google.maps.places.PlacesService(map);
  //   service2.nearbySearch({
  //     location: carrolton,
  //     radius: 1500,
  //     keyword: this.props.interests[1],//interests  of the user
  //   }, this.callback);
  //   var service3 = new google.maps.places.PlacesService(map);
  //   service3.nearbySearch({
  //     location: carrolton,
  //     radius: 1500,
  //     keyword: this.props.interests[2],//interests  of the user
  //   }, this.callback);
  // }

  // callback(results, status){
  //   if (status === google.maps.places.PlacesServiceStatus.OK) {
  //     for (var i = 0; i < results.length; i++) {
  //       createMarker(results[i]);
  //     }
  //   }
  // }

  // createMarker(place){
  //   var placeLoc = place.geometry.location;
  //   var marker = new google.maps.Marker({
  //     map: map,
  //     position: place.geometry.location
  //   });

  //   google.maps.event.addListener(marker, 'click', function() {
  //     infowindow.setContent(place.name);
  //     infowindow.open(map, this);
  //   });
  // }

  render(){
    return (
      <div>
        <div></div>
        <h1>HELLO WORLD, FROM MAP</h1>
      </div>
      );
  }
}

