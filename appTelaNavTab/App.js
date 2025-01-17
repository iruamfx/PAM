import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";

import Principal from "./src/screens/Principal";
import Tela1 from "./src/screens/Tela1";
import Tela2 from "./src/screens/Tela2";
import Tela3 from "./src/screens/Tela3";

const Tab = createBottomTabNavigator();

function Tabs(){
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Tela1') {
          iconName = focused ? 'home-outline' : 'bed-outline';
        } else if (route.name === 'Tela2') {
          iconName = focused ? 'person-outline' : 'body-outline';
        }else if (route.name === 'Tela3') {
          iconName = focused ? 'people-outline' : 'happy-outline';
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
      <Tab.Screen name= "Tela1" component={Tela1}></Tab.Screen>
      <Tab.Screen name= "Tela2" component={Tela2}></Tab.Screen>
      <Tab.Screen name= "Tela3" component={Tela3}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Principal'>
        <Stack.Screen 
            name="Tela1" 
            component={Tabs}
            options={{
              title:'Tela 1',
              headerStyle:{
              backgroundColor: '#3f64c7',
              },
              headerTintColor: '#FFF' , 
              headerShown: true         
            }}
            >
        </Stack.Screen>
        <Stack.Screen name="Tela2" component={Tela2}></Stack.Screen>
        <Stack.Screen name="Tela3" component={Tela3}></Stack.Screen>
        <Stack.Screen name="Principal" component={Principal} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}