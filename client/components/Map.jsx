import React from 'react';
import ReactDOM from 'react-dom';
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps';

class Map extends React.Component {
  render () {
    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 29.9559601, lng: -90.1205441 }}
      >
      </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);

// const Map = withGoogleMap(props => {
//   return (
//     <GoogleMap
//       ref={props.onMapLoad}
//       defaultZoom={14}
//       defaultCenter={{ lat: 29.9559601, lng: -90.1205441 }}
//     >
//     </GoogleMap>
//   )
// })


// export default class Map extends React.Component {
//   constructor() {
//     super();
//     this.loadJS = this.loadJS.bind(this);
//   }
//
//   componentDidMount() {
//     window.initMap = this.initMap;
//     loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyA0ANsEfBZ3VzlZWzUrdpa24aGMbheBICA&libraries=places&callback=initMap');
//     // // this.loadMap();
//
//     new google.maps.Map(this.refs.map, {
//       center: {
//         lat: 29.9559601,
//         lng: -90.1205441
//       },
//       zoom: 14
//     });
//   }
//
//   // componentDidUpdate(prevProps, prevState) {
//   //   if (prevProps.google !== this.props.google) {
//   //     this.loadMap();
//   //   }
//   // }
//
//   // initMap() {
//   //   map = new google.maps.Map(this.refs.map.getDOMNode('map'), mapConfig);
//   // }
//
//   loadJS(src) {
//
//     // const api = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA0ANsEfBZ3VzlZWzUrdpa24aGMbheBICA&libraries=places&callback=initMap';
//     const ref = window.document.getElementsByTagName("script")[0];
//     const script = window.document.createElement("script");
//     script.src = src;
//     script.async = true;
//
//     let zoom = 14;
//     let lat = 37.774929;
//     let lng = -122.419416;
//     const center = new maps.LatLng(lat, lng);
//     const mapConfig = Object.assign({}, {
//       center: center,
//       zoom: zoom
//     });
//     ref.parentNode.insertBefore(script, ref);
//   }
//
//   // loadMap() {
//   //   // if google api is available
//   //   if (this.props && this.props.google) {
//   //     const {google} = this.props;
//   //     const maps = google.maps;
//   //
//   //     const mapRef = this.refs.map;
//   //     const node = ReactDOM.findDOMNode(mapRef);
//   //     // reference to the actual DOM element, not the virtual
//   //     // DOM
//   //
//   //     let zoom = 14;
//   //     let lat = 37.774929;
//   //     let lng = -122.419416;
//   //     const center = new maps.LatLng(lat, lng);
//   //     const mapConfig = Object.assign({}, {
//   //       center: center,
//   //       zoom: zoom
//   //     });
//   //     this.map = new maps.Map(node, mapConfig);
//   //     // instantiate a new map instance at the DOM element mapRef
//   //     // and center and zoom of mapConfig
//   //   }
//   // }
//
//   render() {
//     const style = {
//       width: '100vw',
//       height: '100vh'
//     };
//
//     return (
//       <div ref='map' style={style}>
//         Loading map...
//       </div>
//     );
//   }
// }
