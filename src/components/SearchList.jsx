import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivityTypeContext } from '../ActivityTypeContext';
import { ActivitiesContext } from '../ActivitiesContext';
import customFetch from '../services/fetch';
import IconTextListItem from './IconTextListItem';

const SearchList = () => {
  const [activityType] = useContext(ActivityTypeContext);
  const [, setActivities] = useContext(ActivitiesContext);

  const [selectedActivityType, setSelectedActivityType] = useState(null);

  const navigation = useNavigation();

  const fetchActivityWithCode = async (typeCode) => {
    try {
      if (typeCode) {
        const results = await customFetch(
          `http://10.0.0.60:8000/activity/code/?code=${typeCode}`
        );
        if (results.length > 0) {
          setActivities(results);
          navigation.navigate('Home'); // Navigate to home page
        } else {
          alert('No such activities in this region');
        }
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchActivityWithCode(selectedActivityType);
  }, [selectedActivityType]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      item={item}
      onPress={() => setSelectedActivityType(item.typeCode)}
    >
      <IconTextListItem icon={'search'} title={item.name} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {activityType && (
        <FlatList
          data={activityType}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchList;
