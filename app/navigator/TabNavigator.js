import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AddressScreen, ProfileScreen } from "../screens/Main";
import MainNavigator from "./MainNavigator";
import { SetupScreen } from "../screens/Setup";
import { FoodScreen } from "../screens/Food";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "MENU") iconName = "menu";
          if (route.name === "PROFILE") iconName = "account";
          if (route.name === "ADDRESS") iconName = "home";
          if (route.name === "SETUP") iconName = "content-save"; // TODO: REMOVE
          return (
            <MaterialCommunityIcons name={iconName} size={35} color={color} />
          );
        },
      })}
    >
      <Tab.Screen
        name="MENU"
        component={MainNavigator}
        options={{
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          headerShown:false,
        }}
      />
      <Tab.Screen
        name="ADDRESS"
        component={AddressScreen}
        options={{
          headerTitleAlign: "center",
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={ProfileScreen}
        options={{
          headerTitleAlign: "center",
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen 
        name="SETUP"
        component={SetupScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      
    </Tab.Navigator>
  );
}
