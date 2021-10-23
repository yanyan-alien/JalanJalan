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
import ReminderHandler from "../screens/Reminder/ReminderHandler";
import RemindersMainScreen from "../screens/Reminder/RemindersMainScreen";
import AllRemindersScreen from "../screens/Reminder/AllRemindersScreen";
import {HealthError, EnableError, UnavailableError} from "../screens/Error";

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
        <Stack.Screen name="HealthError" component={HealthError} />
        <Stack.Screen name="HealthList" component={HealthListScreen} />
        <Stack.Screen name="HealthMap" component={HealthMapScreen} />
        <Stack.Screen name="ReminderHandler" component={ReminderHandler} />
        <Stack.Screen name="ReminderMain" component={RemindersMainScreen} />
        <Stack.Screen name="ReminderAll" component={AllRemindersScreen} />
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
      <Stack.Group>
        <Stack.Screen name="UnavailableError" component={UnavailableError} />
        <Stack.Screen name="EnableError" component={EnableError} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
