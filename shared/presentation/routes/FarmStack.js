
import React from "react";
import FarmsScreen from "../screens/farmsScreen";
import AddressScreen from "../screens/addressScreen";
import VegetablesScreen from "../screens/vegetablesScreen";
import FarmScreen from "../screens/farmScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CropScreen from "../screens/cropScreen";
const Stack = createNativeStackNavigator();
function FarmStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={FarmsScreen} />
            <Stack.Screen name="Farm" component={FarmScreen} />
            <Stack.Screen name="Product" component={CropScreen} />
        </Stack.Navigator>
    );
}

export default FarmStack
