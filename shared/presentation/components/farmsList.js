import React from 'react';
import {FlatList, Pressable, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FarmCard from './farmCard';

import FarmScreen from "../screens/farmScreen";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Farm 1',
      deliveryPrice:'k15',
    deliveryTimes: '20-30',
    photoUrl: 'https://picsum.photos/700',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Farm 2',
    deliveryTimes: '20-30',
    photoUrl: 'https://picsum.photos/700',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    deliveryTimes: '20-30',
    photoUrl: 'https://picsum.photos/700',
  },
];

const FarmsList = (props) => {

    const Move = () => {

        props.nav()
        let screenName='Farm'


    }

  const renderItem = ({item}) => (

        <FarmCard
        name={item.name}
        deliveryTimes={item.deliveryTimes}
        photoUrl={item.photoUrl}
        nav={props.nav}
        id={item.id}
       />

  );
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default FarmsList;
