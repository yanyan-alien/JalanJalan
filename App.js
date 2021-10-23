import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/navigator/TabNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}