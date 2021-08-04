import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FarmsScreen from "../screens/farmsScreen";
import FarmScreen from "../screens/farmScreen";
import VegetablesScreen from "../screens/vegetablesScreen";
import AddressScreen from "../screens/addressScreen";
const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={FarmsScreen} />
            <Stack.Screen name="Address" component={AddressScreen} />
            <Stack.Screen name="Vegetables" component={VegetablesScreen} />
            <Stack.Screen name="Farm" component={FarmScreen} />
        </Stack.Navigator>
    );
}
export default HomeStack;
