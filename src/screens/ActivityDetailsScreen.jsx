import React, { useContext } from 'react';
import { View, Text, Linking } from 'react-native';
import { ActivityDetailsContext } from '../ActivityDetailsContext';

const ActivityDetailsScreen = () => {
  const [activityDetails] = useContext(ActivityDetailsContext);

  console.log('actiivityDetails', activityDetails.name);
  console.log('activityDetails.phoneNumber', activityDetails.phoneNumber);

  return (
    <View>
      <Text>Name:{activityDetails.name || 'N/A'}</Text>
      {activityDetails.properties.infoFi && (
        <Text>Info:{activityDetails.properties.infoFi}</Text>
      )}
      <Text>
        Address:
        {`${activityDetails.location.address},${activityDetails.postalCode}${activityDetails.postalOffice}` ||
          'N/A'}
      </Text>
      <Text>Phone:{activityDetails.phoneNumber || 'N/A'}</Text>
      <Text>Email:{activityDetails.email || 'N/A'}</Text>
      {activityDetails.www && (
        <Text
          style={{ color: 'blue' }}
          onPress={() => Linking.openURL(activityDetails.www)}
        >
          Home page url
        </Text>
      )}
    </View>
  );
};

export default ActivityDetailsScreen;
