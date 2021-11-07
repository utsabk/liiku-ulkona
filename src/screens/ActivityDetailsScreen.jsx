import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { ActivityDetailsContext } from '../ActivityDetailsContext';
import ListItem from '../components/IconTextListItem';
import ListHeader from '../components/HeaderListItem';
import LinkListItem from '../components/IconLinkListItem';
import TitleSubtitleListItem from '../components/TitleSubtitleListItem';

const ActivityDetailsScreen = () => {
  const [activityDetails] = useContext(ActivityDetailsContext);
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <ListHeader title="General" />
      <TitleSubtitleListItem subtitle={'Name'} title={activityDetails.name || 'N/A'} />
      <TitleSubtitleListItem subtitle={'Description'} title={activityDetails.properties.infoFi || 'No description'} />

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
      <ListItem
        icon={'location-pin'}
        title={
          `${activityDetails.location.address
          }, ${
            activityDetails.location.postalCode ? activityDetails.location.postalCode : ''
          } ${
            activityDetails.location.postalOffice ? activityDetails.location.postalOffice : ''
          }` || 'No location provided'
        }
      />
      <ListItem
        icon={'phone-enabled'}
        title={activityDetails.phoneNumber || 'No phone provided'}
      />
      <ListItem
        icon={'email'}
        title={activityDetails.email || 'No email provided'}
      />
      <LinkListItem icon={'link'} title={activityDetails.www} />

    </ScrollView>
  );
};

export default ActivityDetailsScreen;
