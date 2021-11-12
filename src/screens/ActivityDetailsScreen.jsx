import React from 'react';
import { ScrollView, Platform, Linking } from 'react-native';
import { useSelector } from 'react-redux';
import IconListItem from '../components/IconTextListItem';
import ListHeader from '../components/HeaderListItem';
import LinkListItem from '../components/IconLinkListItem';
import TitleSubtitleListItem from '../components/TitleSubtitleListItem';

const ActivityDetailsScreen = () => {
  const { activityDetails } = useSelector((state) => {
    return {
      activityDetails: state.activity.activityDetails,
    };
  });

  const { userLocation } = useSelector((state) => state.location);

  const handlePhonePress = (number) => {
    if (number) Linking.openURL(`tel:${number}`);
  };

  const handleMailPress = (email) => {
    if (email) {
      return Linking.openURL(`mailto:${email}`);
    }
  };

  const handleMapPinPress = (userLocation, destinationLocation) => {
    const origin = userLocation
      ? encodeURIComponent(`${userLocation.latitude},${userLocation.longitude}`)
      : '';

    const destination = destinationLocation
      ? encodeURIComponent(
          `${destinationLocation.lat},${destinationLocation.lon}`
        )
      : '';

    let url = Platform.select({
      ios: `http://maps.apple.com/?saddr==${origin}&daddr=${destination}`,
      android: `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`,
    });

    Linking.openURL(url);
  };

  const handleLinkPress = (link) => {
    if (link) {
      return Linking.openURL(link);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <ListHeader title="General" />
      <TitleSubtitleListItem
        subtitle={'Name'}
        title={activityDetails.name || 'N/A'}
      />
      {activityDetails.properties && (
        <TitleSubtitleListItem
          subtitle={'Description'}
          title={activityDetails.properties.infoFi || 'No description'}
        />
      )}

      <ListHeader title="Ownership" />
      <TitleSubtitleListItem
        subtitle={'Owner'}
        title={activityDetails.owner || 'N/A'}
      />
      <TitleSubtitleListItem
        subtitle={'Admin'}
        title={activityDetails.admin || 'N/A'}
      />

      <ListHeader title="Contact information" />
      <IconListItem
        icon={'assistant-direction'}
        title={
          `${activityDetails.location.address}, ${
            activityDetails.location.postalCode
              ? activityDetails.location.postalCode
              : ''
          } ${
            activityDetails.location.postalOffice
              ? activityDetails.location.postalOffice
              : ''
          }` || 'No location provided'
        }
        handleIconPress={() =>
          handleMapPinPress(
            userLocation,
            activityDetails.location.coordinates.wgs84
          )
        }
      />
      <IconListItem
        icon={'phone-enabled'}
        title={activityDetails.phoneNumber || 'No phone provided'}
        handleIconPress={() => handlePhonePress(activityDetails.phoneNumber)}
      />
      <IconListItem
        icon={'email'}
        title={activityDetails.email || 'No email provided'}
        handleIconPress={() => handleMailPress(activityDetails.email)}
      />
      <LinkListItem
        icon={'link'}
        title={activityDetails.www}
        handleIconPress={() => handleLinkPress(activityDetails.www)}
      />
    </ScrollView>
  );
};

export default ActivityDetailsScreen;
