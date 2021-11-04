import React, { useState, createContext } from 'react';

export const CurrentLocationContext = createContext();

export const CurrentLocationProvider = (props) => {
  const [currentLocation, setCurrentLocation] = useState();
  return (
    <CurrentLocationContext.Provider
      value={[currentLocation, setCurrentLocation]}
    >
      {props.children}
    </CurrentLocationContext.Provider>
  );
};
