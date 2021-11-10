import React, { useState, useEffect } from 'react';
import { TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import IconTextListItem from './IconTextListItem';
import { getActivitiesList } from '../store/actions/activity';

const SearchList = () => {
  const dispatch = useDispatch();

  const { activityTypes } = useSelector((state) => ({
    activityTypes: state.activity.activityTypesList,
  }));

  const [selectedActivityType, setSelectedActivityType] = useState(null);

  const navigation = useNavigation();

  const fetchActivityWithCode = (typeCode) => {
    if (typeCode) {
      dispatch(getActivitiesList(typeCode));
      navigation.navigate('Home'); // Navigate to home page
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
    <SafeAreaView>
      {activityTypes && (
        <FlatList
          data={activityTypes}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchList;
