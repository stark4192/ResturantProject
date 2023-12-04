import React, { useState } from 'react';
import { FaMapLocationDot} from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa'
import GoogleMapComponent from './GoogleMapComponent';

  const buttonStyle = {
    position: 'absolute',
    top: '150px',
    left: '20px',
    zIndex: '1',
    backgroundColor: '#2196F3',
    padding: '8px',
    cursor: 'pointer',
  };

  
const MapIcon = () => {
  const [showMap, setShowMap] = useState(false);

  const handleClick = () => {
    setShowMap(true); // Set a state to show the GoogleMapComponent when the icon is clicked
  };

  const handleClose = () => {
    setShowMap(false); // Close the map when the close button is clicked
  };

  return (
    <div style={{display:'flex', justifyContent:'flex-end'}}>
      {/* Show the map component if showMap is true */}
      {showMap ? (
        <>
          <GoogleMapComponent></GoogleMapComponent>
          <button onClick={handleClose} style={buttonStyle}>
            <FaTimes />
          </button>
        </>
      ) : (
        // Show the icon if showMap is false, handle the click event
        <FaMapLocationDot onClick={handleClick} style={{ cursor: 'pointer', fontSize:'40px', marginRight:'20px' }} />
      )}
    </div>
  );
};

export default MapIcon;
