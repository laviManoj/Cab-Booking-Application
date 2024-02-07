import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import MapComponent from './GoogleMap';
import './GoogleLogin.css';

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

  const calculateDistance = () => {
    if (!pickupLocation || !dropLocation) {
      alert('Please select both pickup and drop locations.');
      return;
    }

    const R = 6371; // Radius of the earth in kilometers
    const dLat = deg2rad(dropLocation.lat - pickupLocation.lat);
    const dLon = deg2rad(dropLocation.lng - pickupLocation.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(pickupLocation.lat)) * Math.cos(deg2rad(dropLocation.lat)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    alert(`The distance between pickup and drop locations is approximately ${distance.toFixed(2)} kilometers.`);
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
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
      <div>
        <h2>Pickup Location:</h2>
        {pickupLocation && (
          <p>Latitude: {pickupLocation.lat}, Longitude: {pickupLocation.lng}</p>
        )}
        <MapComponent onSelectLocation={handleDropLocationSelect} />
        <h2>Drop Location:</h2>
        {dropLocation && (
          <p>Latitude: {dropLocation.lat}, Longitude: {dropLocation.lng}</p>
        )}
        {/* Button for calculating distance */}
        <button onClick={calculateDistance}>Calculate Distance</button>
      </div>
    </div>
  );
}

export default App;
