import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import {Chip} from 'react-native-paper';
import CategoryIcon from '../components/CategoryIcon';
import FarmsList from '../components/farmsList';
import Categories from '../components/Categories';

function Options(props) {
  return (
    <View >
      <Pressable>
        <Text>Delivery</Text>
      </Pressable>
      <Pressable>
        <Text>Delivery</Text>
      </Pressable>
    </View>
  );
}

function Address(props) {
  return (
    <View>
      <Pressable>
        <Text style={styles.address}>Deliver to :{props.userAddress}</Text>
      </Pressable>
    </View>
  );
}
Address.defaultProps = {
  userAddress: '32 Potato street Ave',
};
const FarmsScreen = () => {
  return (
    <View style={styles.container}>

      <Address />
      <Categories />
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
