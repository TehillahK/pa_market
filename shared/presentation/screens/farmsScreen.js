import React from 'react';
import {StyleSheet, View, Pressable, Text, FlatList, SafeAreaView, TouchableHighlight} from 'react-native';
import {Chip} from 'react-native-paper';
import CategoryIcon from '../components/CategoryIcon';
import FarmsList from '../components/farmsList';
import Categories from '../components/Categories';
import { getAllFarms } from '../../business/AccessFarms';
import FarmCard from "../components/farmCard";
import { FAB } from 'react-native-paper';

let GoToFarm;
let GoToComments;
const Farms = getAllFarms();
function setHomePageNavs(profileNav){
    GoToFarm=profileNav;

}

function clickHandler(nav) {
    console.log("press add");

}

function Address(props) {
  return (
    <View style={styles.delivery}>
      <Pressable onPress={clickHandler()}>
          <Chip>
                <Text style={styles.address}>Deliver to :{props.userAddress}</Text>

          </Chip>
      </Pressable>
    </View>
  );
}
Address.defaultProps = {
  userAddress: '32 Potato Ave',
};
const FarmsScreen = ({navigation}) => {
    const GoToAddress=()=>{
        navigation.navigate('Address')
    };
    const GoToVegetables=()=>{
        navigation.navigate('Vegetables')
    };
    const FarmsNav=(uID)=>{
        navigation.navigate('Farm',{id:`${uID}`})
    }
    setHomePageNavs(FarmsNav)



  return (
    <View style={styles.container}>

        <Address navigation={GoToAddress} />
        <Categories navVeg={GoToVegetables}/>
        <FarmsList nav={GoToFarm} farms={Farms}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  address: {
      fontWeight: 'bold',
      fontSize: 15,
  },
  options:{
    flex: 1,
    flexDirection: 'row',
  },
    delivery:{
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-around",


    }
});
export default FarmsScreen;
