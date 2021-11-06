import React, { useState, createContext } from 'react';

export const ActivityTypeContext = createContext();

export const ActivityTypeProvider = (props) => {
  const [activityType, setActivityType] = useState();
  return (
    <ActivityTypeContext.Provider
      value={[activityType, setActivityType]}
    >
      {props.children}
    </ActivityTypeContext.Provider>
  );
};
