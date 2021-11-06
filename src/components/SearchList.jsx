import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { ActivityTypeContext } from '../ActivityTypeContext';
import customFetch from '../services/fetch';
import Item from './ListItem';

const SearchList = () => {
  const [activityType] = useContext(ActivityTypeContext);

  const [selectedActivityType, setSelectedActivityType] = useState(null);

  const fetchActivityWithCode = async (typeCode) => {
    try {
      if (typeCode) {
        const results = await customFetch(
          `http://10.0.0.60:8000/activity/code/?code=${typeCode}`
        );
        console.log('results', results);
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchActivityWithCode(selectedActivityType);
  }, [selectedActivityType]);

  const renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={() => setSelectedActivityType(item.typeCode)}
      title={item.name}
    />
  );

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {activityType && (
          <FlatList
            data={activityType}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        )}
      </SafeAreaView>

      {selectedActivityType &&
        alert(`Slected sport is ${selectedActivityType}`)}
    </>
  );
};

export default SearchList;
