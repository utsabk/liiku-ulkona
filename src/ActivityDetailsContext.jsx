import React, { useState, createContext } from 'react';

export const ActivityDetailsContext = createContext();

export const ActivityDetailsProvider = (props) => {
  const [activityDetails, setActivityDetails] = useState();
  return (
    <ActivityDetailsContext.Provider
      value={[activityDetails, setActivityDetails]}
    >
      {props.children}
    </ActivityDetailsContext.Provider>
  );
};
