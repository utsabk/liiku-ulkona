import React, { useState, createContext } from 'react';

export const ActivitiesContext = createContext();

export const ActivitiesProvider = (props) => {
  const [activities, setActivities] = useState();
  return (
    <ActivitiesContext.Provider value={[activities, setActivities]}>
      {props.children}
    </ActivitiesContext.Provider>
  );
};
