import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FarmsScreen from "../screens/farmsScreen";
const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={FarmsScreen} />

        </Stack.Navigator>
    );
}
export default HomeStack;
