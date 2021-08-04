import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import CategoryIcon from './CategoryIcon';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Vegetables',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Fruits',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Animal products',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d92',
    title: 'other',
  },
];

const Categories = () => {
  const renderItem = ({item}) => <CategoryIcon name={item.title} />;
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </SafeAreaView>
  );
};
export default Categories;
