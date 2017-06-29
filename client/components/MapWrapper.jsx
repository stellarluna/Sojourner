import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map.jsx';
// import Map from 'google-maps-react';

class MapWrapper extends React.Component {

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }

    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
        <div>
          <Map />
        </div>
      );
  }
}

// export default GoogleApiComponent({
//   apiKey: 'AIzaSyA0ANsEfBZ3VzlZWzUrdpa24aGMbheBICA'
// })(MapWrapper);
