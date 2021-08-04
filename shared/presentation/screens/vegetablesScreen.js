import React from 'react';
import {View} from "react-native";
import { Searchbar } from 'react-native-paper';
import FarmsList from "../components/farmsList";

const VegetablesScreen = () => {
  return(
      <View>
            <FarmsList />
      </View>
  )
}

export default VegetablesScreen;
