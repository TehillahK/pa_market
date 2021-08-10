import { StatusBar } from 'expo-status-bar';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FarmsScreen from "./screens/farmsScreen";
import SearchScreen from "./screens/searchScreen";
import SearchStack from "./routes/SearchStack";
import FarmStack from "./routes/FarmStack";
import FarmScreen from "./screens/farmScreen";
const Stack = createNativeStackNavigator();
function HomeScreen() {
    return (
        <View>

        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}

function OrdersScreen() {
    return(
        <View>
            <Text>Orders</Text>
        </View>
    )
}
const Tab = createBottomTabNavigator();

 const App = () => {
   return (
       <NavigationContainer>
           <Tab.Navigator
               screenOptions={{
                   headerShown: false
               }}
           >
               <Tab.Screen
                   name="Home"
                   component={FarmStack}
                   options={{
                       tabBarLabel: 'Home',
                       tabBarIcon: ({ color, size }) => (
                           <MaterialCommunityIcons name="home" color={color} size={size} />
                       ),
                   }}
               />
               <Tab.Screen
                   name="Search"
                   component={SearchStack}
                   options={{
                       tabBarLabel: 'Search',
                       tabBarIcon: ({ color, size }) => (
                           <MaterialCommunityIcons name="magnify" color={color} size={size} />
                       ),
                   }}
               />
               <Tab.Screen
                   name="Orders"
                   component={OrdersScreen}
                   options={{
                       tabBarLabel: 'Orders',
                       tabBarIcon: ({ color, size }) => (
                           <MaterialCommunityIcons name="receipt" color={color} size={size} />
                       ),
                   }}
               />
               <Tab.Screen name="Settings"
                           component={SettingsScreen}
                           options={{
                               tabBarLabel: 'Settings',
                               tabBarIcon: ({ color, size }) => (
                                   <MaterialCommunityIcons name="cog" color={color} size={size} />
                               ),
                           }}
               />
           </Tab.Navigator>
       </NavigationContainer>
   );
 };

 export default App;
