import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LanguageScreen from "./LanguageScreen";
import BasicInfoScreen from "./BasicInfoScreen";
import HealthInfoScreen from "./HealthInfoScreen";
import ContactInfoScreen from "./ContactInfoScreen";

const Stack = createNativeStackNavigator();

export default function SetupNavigator(props) {
  return (
    <Stack.Navigator
      initialRouteName="language"
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      screenListeners={{
        state: (e) => props.onNavigate(e.data.state.index),
      }}
    >
      <Stack.Screen name="language" component={LanguageScreen} />
      <Stack.Screen name="basic" component={BasicInfoScreen} />
      <Stack.Screen name="health" component={HealthInfoScreen} />
      <Stack.Screen name="contact" component={ContactInfoScreen} />
      {/*<Stack.Screen name="review" component={}/> */}
    </Stack.Navigator>
  );
}
