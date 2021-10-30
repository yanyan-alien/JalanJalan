import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderBackButton } from "@react-navigation/elements";
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
import { HealthError, EnableError, UnavailableError } from "../screens/Error";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function MainNavigator({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerTitleAlign: "center", title: "MENU" }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Group
        screenOptions={{ title: "HEALTH", headerTitleAlign: "center" }}
      >
        <Stack.Screen name="Health" component={HealthScreen} />
        <Stack.Screen
          name="HealthError"
          component={HealthError}
          options={{
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => {
                  navigation.navigate("HomeScreen");
                }}
              />
            ),
          }}
        />
        <Stack.Screen name="HealthList" component={HealthListScreen} />
        <Stack.Screen name="HealthMap" component={HealthMapScreen} />
        <Stack.Screen name="ReminderHandler" component={ReminderHandler} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{ title: "TAXI", headerTitleAlign: "center" }}
      >
        <Stack.Screen name="Taxi" component={TaxiScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{ title: "FOOD", headerTitleAlign: "center" }}
      >
        <Stack.Screen name="Food" component={FoodScreen} />
        <Stack.Screen name="FoodReco" component={FoodRecoScreen} />
        <Stack.Screen name="FoodList" component={FoodListScreen} />
        <Stack.Screen name="FoodMap" component={FoodMapScreen} />
        <Stack.Screen
          name="EnableError"
          component={EnableError}
          options={{
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => {
                  navigation.navigate("HomeScreen");
                }}
              />
            ),
          }}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{ title: "EMERGENCY", headerTitleAlign: "center" }}
      >
        <Stack.Screen name="Emergency" component={EmergencyScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerShown: true,
          title: "ERROR",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="UnavailableError" component={UnavailableError} />
        {/* <Stack.Screen name="EnableError" component={EnableError} /> */}
      </Stack.Group>
    </Stack.Navigator>
  );
}
