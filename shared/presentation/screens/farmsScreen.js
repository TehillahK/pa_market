import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import {Chip} from 'react-native-paper';
import CategoryIcon from '../components/CategoryIcon';
import FarmsList from '../components/farmsList';
import Categories from '../components/Categories';



function Address(props) {
  return (
    <View>
      <Pressable onPress={props.navigation}>
        <Text style={styles.address}>Deliver to :{props.userAddress}</Text>
      </Pressable>
    </View>
  );
}
Address.defaultProps = {
  userAddress: '32 Potato street Ave',
};
const FarmsScreen = ({navigation}) => {
    const GoToAddress=()=>{
        navigation.navigate('Address')
    }
    const GoToVegetables=()=>{
        navigation.navigate('Vegetables')
    }
  return (
    <View style={styles.container}>

      <Address navigation={GoToAddress} />
      <Categories navVeg={GoToVegetables}/>
      <FarmsList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  address: {
    marginLeft: 80,
  },
  options:{
    flex: 1,
    flexDirection: 'row',
  },
});
export default FarmsScreen;
