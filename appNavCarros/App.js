import React from "react";
import { StyleSheet, Text, View} from 'react-native';
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";

import Home from "./src/screens/Home";
import Comfort from "./src/screens/Comfort";
import Utility from "./src/screens/Utility";
import Sport from "./src/screens/Sport";

const Tab = createBottomTabNavigator();

function Tabs(){
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'Comfort') {
          iconName = 'car-outline';
        }else if (route.name === 'Utility') {
          iconName = 'bus-outline';
        }else if (route.name === 'Sport') {
          iconName = 'car-sport-outline';
        }
        
        //aqui define os ícones que irão aparecer nas Tabs
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#3f64c7',
      inactiveTintColor: 'gray',      
    }}    
    >
      <Tab.Screen name= "Home" component={Home} options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen name= "Comfort" component={Comfort} options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen name= "Utility" component={Utility} options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen name= "Sport" component={Sport} options={{headerShown: false}}></Tab.Screen>
    </Tab.Navigator>
  )
}


export default function App() {
  const Stack = createStackNavigator();
  return (  
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Tabs} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Comfort" component={Comfort} options={{title:'Tela 1', headerStyle: { backgroundColor: '#3f64c7'}, headerTintColor: '#FFF'}}></Stack.Screen>
        <Stack.Screen name="Utility" component={Utility} options={{}}></Stack.Screen>
        <Stack.Screen name="Sport" component={Sport} options={{}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}