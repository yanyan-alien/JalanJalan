import React, { useState, useEffect } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./app/navigator/TabNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SetupScreen } from "./app/screens/Setup";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [setupDone, setSetupDone] = useState(false);

  useEffect(() => {
    async function fetchFromStorage() {
      let stateArr = await AsyncStorage.getItem("setupDone");
      setSetupDone(stateArr ? stateArr[1] : false);
    }
    fetchFromStorage();
  }, []);

  const navigationRef = useNavigationContainerRef();

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={setupDone ? "TabNavigation" : "SETUP"}
        >
          <Stack.Screen name="SETUP" component={SetupScreen} />
          <Stack.Screen name="TabNavigation" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
