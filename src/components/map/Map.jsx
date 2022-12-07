import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[19.1268186, 72.8484307]} zoom={15} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[19.1268186, 72.8484307]}>
        <Popup>Noufil lives here, come over for a cup of coffee :)</Popup>
      </Marker>
      <div className="map-content">
        <h3 className="switch__color">Noufil Sheikh</h3>
        <span>A.k.A Glitxherrr</span>
        <br />
        <span>Location :  Nikunj School, Andheri (East),<br />
          Natwar Nagar, Mumbai: 400069</span>
        <br />
        <span>Email: almarexwebdev@gmail.com</span>
      </div>
    </MapContainer>
  )
}

export default Map
