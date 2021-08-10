import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FarmsScreen from "../screens/farmsScreen";
import FarmScreen from "../screens/farmScreen";
import VegetablesScreen from "../screens/vegetablesScreen";
import AddressScreen from "../screens/addressScreen";
import FarmsList from "../components/farmsList";
import FarmStack from "./FarmStack";
const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={FarmStack} />
            <Stack.Screen name="Address" component={AddressScreen} />
            <Stack.Screen name="Vegetables" component={VegetablesScreen} />


        </Stack.Navigator>
    );
}
export default HomeStack;
