import React from 'react';
import ReactDOM from 'react-dom';


class BaseMap extends React.Component{

  constructor(){
    super();
    this.state = {
      test: 'string to be rendered for test purposes in this.state constructor'

    }
    // this.initMap = this.initMap.bind(this),
    this.map,
    this.infowindow

  }

    // this.map,
    // this.infowindow

      window.initMap(){
      var carrolton = {lat: 29.9559601, lng: -90.1205441};

      map = new google.maps.Map(document.getElementById('map'), {
      center: carrolton,
      zoom: 15
      });

      infowindow = new google.maps.InfoWindow();//creates the map
      //below adds services/in our case interests on map.
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: carrolton,
        radius: 1500,
        keyword: 'restaurant'//this will be user/database defineed
      }, this.callback);
      var service2 = new google.maps.places.PlacesService(map);
      service2.nearbySearch({
        location: carrolton,
        radius: 1500,
        keyword: 'cemetary'//interests  of the user
      }, this.callback);
    }

    callback(results, status){
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    }

    createMarker(place){
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    }

  render(){
    return (
      <div>

      </div>
      );
  }
}
//trying to call {this.initMap()}
// ReactDOM.render(<App/>, document.getElementById('app'))

export default BaseMap;
// export default App;
