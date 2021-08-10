import React from 'react';
import {StyleSheet, View, Pressable, Text, FlatList, SafeAreaView, TouchableHighlight} from 'react-native';
import {Chip} from 'react-native-paper';
import CategoryIcon from '../components/CategoryIcon';
import FarmsList from '../components/farmsList';
import Categories from '../components/Categories';
import FarmCard from "../components/farmCard";


let GoToFarm;
let GoToComments;
function setHomePageNavs(profileNav){
    GoToFarm=profileNav;

}

function clickHandler(nav) {
    console.log("press add");

}

function Address(props) {
  return (
    <View>
      <Pressable onPress={clickHandler()}>
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
    };
    const GoToVegetables=()=>{
        navigation.navigate('Vegetables')
    };
    const FarmsNav=()=>{
        navigation.navigate('Farm')
    }
    setHomePageNavs(FarmsNav)



  return (
    <View style={styles.container}>

        <Address navigation={GoToAddress} />
        <Categories navVeg={GoToVegetables}/>
        <FarmsList nav={GoToFarm}/>
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
