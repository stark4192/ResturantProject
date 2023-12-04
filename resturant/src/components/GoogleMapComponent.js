import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Data from '../services/restaurantData.json'

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const latitude = Data.restaurant.location.latitude;
const longitude = Data.restaurant.location.longitude;

const center = {
  lat: latitude,
  lng: longitude,
};

const GoogleMapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDzNxPspwWphtZgFVVEgT5leP24VT_o_iM',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMapComponent
