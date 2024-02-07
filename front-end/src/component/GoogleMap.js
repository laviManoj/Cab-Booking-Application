// MapComponent.js

import React from 'react';
import GoogleMapReact from 'google-map-react';

const MapComponent = ({ onSelectLocation }) => {
  const handleMapClick = ({ lat, lng }) => {
    onSelectLocation({ lat, lng });
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC5id0Bn-ZBWTq5N0ebUySQBGNeC5PjxdI' }} // Replace with your Google Maps API key
        defaultCenter={{ lat: 0, lng: 0 }} 
        defaultZoom={8} 
        onClick={handleMapClick} 
      />
        
    </div>
  );
};

export default MapComponent;
