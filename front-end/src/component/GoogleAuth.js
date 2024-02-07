// App.js

import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import MapComponent from './MapContainer';

function App() {
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropLocation, setDropLocation] = useState(null);

  const responseGoogle = (response) => {
    console.log(response);
  };

  const handlePickupLocationSelect = (location) => {
    setPickupLocation(location);
  };

  const handleDropLocationSelect = (location) => {
    setDropLocation(location);
  };

  return (
    <div>
      <GoogleLogin
        clientId="76510948563-2to778hccq0tccifpacgvk79kdqoall7.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <MapComponent onSelectLocation={handlePickupLocationSelect} />
      <MapComponent onSelectLocation={handleDropLocationSelect} />
      <div>
        <h2>Pickup Location:</h2>
        {pickupLocation && (
          <p>Latitude: {pickupLocation.lat}, Longitude: {pickupLocation.lng}</p>
        )}
        <h2>Drop Location:</h2>
        {dropLocation && (
          <p>Latitude: {dropLocation.lat}, Longitude: {dropLocation.lng}</p>
        )}
      </div>
    </div>
  );
}

export default App;
