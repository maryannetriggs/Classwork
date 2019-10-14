import React from 'react'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import axios from 'axios'


class Map extends React.Component {
  constructor() {
    super()

    this.state = { bikepoints: [] }
  }

  componentDidMount() {
    axios.get('https://api.tfl.gov.uk/bikepoint')
      .then(res => this.setState({ bikepoints: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <MapGL
        mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
        height={'100vh'}
        width={'100vw'}
        mapStyle="mapbox://styles/mapbox/light-v9"
        zoom={13}
        latitude={51.515}
        longitude={-0.078}
      >
        {this.state.bikepoints.map(point => (
          <Marker
            key={point.id}
            latitude={point.lat}
            longitude={point.lon}
          >
            <div>❌</div>
          </Marker>
        ))}
      </MapGL>
    )
  }
}

export default Map