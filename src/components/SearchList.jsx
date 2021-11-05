import React, { useContext } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { ActivityTypeContext } from '../AcvityTypeContext';
import Item from './ListItem';

const SearchList = () => {
  const [activityType] = useContext(ActivityTypeContext);

  console.log('activitype', activityType);

  const renderItem = ({ item }) => <Item title={item} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {activityType && (
        <FlatList
          data={activityType}
          renderItem={renderItem}
          keyExtractor={(item, index) => 'key' + index}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchList;
