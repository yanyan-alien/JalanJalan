// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import AddressScreen from "./MainScreens/AddressScreen.js";
import ProfileScreen from "./MainScreens/ProfileScreen.js";
import HomeScreen from './MainScreens/MenuScreen.js';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
					screenOptions={({ route }) => ({
						// tabbarIcon is a function thus fixed value for color and size?
						tabBarIcon: ({color}) => {
							let iconName;
              if (route.name === "MENU") iconName = "menu";
              if (route.name === "PROFILE") iconName = "account";
              if (route.name === "ADDRESS") iconName = "home";
              
              return <MaterialCommunityIcons name={iconName} size={35} color={color} />
            }
          })
        }
      >
        <Tab.Screen 
          name="MENU" 
          component={HomeScreen} 
          options={{headerTitleAlign: "center", tabBarShowLabel: false}}
        />
        <Tab.Screen name="ADDRESS" component={AddressScreen} 
          options={{headerTitleAlign: "center", tabBarShowLabel: false}}
        />
        <Tab.Screen name="PROFILE" component={ProfileScreen} 
          options={{headerTitleAlign: "center", tabBarShowLabel: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}