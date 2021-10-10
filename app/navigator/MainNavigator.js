import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/Main";
import {
  HealthListScreen,
  HealthScreen,
  HealthMapScreen,
} from "../screens/Health";
import { TaxiScreen } from "../screens/Taxi";
import {
  FoodScreen,
  FoodRecoScreen,
  FoodListScreen,
  FoodMapScreen,
} from "../screens/Food";
import { EmergencyScreen } from "../screens/Emergency";
import { ReminderHandler as ReminderScreen } from "../screens/Reminder";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Group>
        <Stack.Screen name="Health" component={HealthScreen} />
        <Stack.Screen name="HealthList" component={HealthListScreen} />
        <Stack.Screen name="HealthMap" component={HealthMapScreen} />
        <Stack.Screen name="Reminder" component={ReminderScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Taxi" component={TaxiScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Food" component={FoodScreen} />
        <Stack.Screen name="FoodReco" component={FoodRecoScreen} />
        <Stack.Screen name="FoodList" component={FoodListScreen} />
        <Stack.Screen name="FoodMap" component={FoodMapScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Emergency" component={EmergencyScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
