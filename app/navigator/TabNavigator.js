import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AddressScreen, ProfileScreen } from "../screens/Main";
import MainNavigator from "./MainNavigator";

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
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ADDRESS"
        component={AddressScreen}
        options={{
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          unmountOnBlur: true,
        }}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
      />
      <Tab.Screen
        name="PROFILE"
        component={ProfileScreen}
        options={{
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          unmountOnBlur: true,
        }}
        listeners={({ navigation }) => ({
          blur: () => navigation.setParams({ screen: undefined }),
        })}
      />
    </Tab.Navigator>
  );
}
