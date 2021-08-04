import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FarmsScreen from "../screens/farmsScreen";
import SearchScreen from "../screens/searchScreen";
const Stack = createNativeStackNavigator();

function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchScreen} />

        </Stack.Navigator>
    );
}
export default SearchStack;
