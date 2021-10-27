import React, { useReducer, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LanguageScreen from "./LanguageScreen";
import BasicInfoScreen from "./BasicInfoScreen";
import HealthInfoScreen from "./HealthInfoScreen";
import ContactInfoScreen from "./ContactInfoScreen";
import ReviewScreen from "./ReviewScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const initialState = {
  name: "",
  gender: "",
  birthday: null,
  postalCode: "",
  addressLine1: "", // Block/Street
  addressLine2: "", // Level/Unit
  bloodType: "",
  nokName: "",
  nokNumber: "",
  medications: [""],
  conditions: [""],
};

function reducer(state, action) {
  switch (action.type) {
    case "update":
      return { ...state, [action.key]: action.value };
    case "reset":
      return action.state;
    default:
      throw new Error();
  }
}

export default function SetupNavigator(props) {
  const [formState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchFromStorage() {
      let stateArr = await AsyncStorage.multiGet(Object.keys(formState));
      stateArr = stateArr.map(([key, value]) => {
        switch (key) {
          case "birthday":
            if (value) value = new Date(value);
            break;
          case "medications":
            if (!value) value = [""];
            else value = JSON.parse(value);
            break;
          case "conditions":
            if (!value) value = [""];
            else value = JSON.parse(value);
            break;
          default:
            if (!value) value = "";
        }
        return [key, value];
      }); // Default to empty string
      dispatch({ type: "reset", state: Object.fromEntries(stateArr) });
    }
    fetchFromStorage();
  }, []);

  const onUpdate = (key, value) => dispatch({ type: "update", key, value });

  return (
    <Stack.Navigator
      initialRouteName="language"
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      screenListeners={{
        state: (e) => props.onNavigate(e.data.state.index),
      }}
    >
      <Stack.Screen name="language" component={LanguageScreen} />
      <Stack.Screen name="basic">
        {(props) => (
          <BasicInfoScreen
            {...props}
            name={formState.name}
            gender={formState.gender}
            birthday={formState.birthday}
            postalCode={formState.postalCode}
            addressLine1={formState.addressLine1}
            addressLine2={formState.addressLine2}
            onUpdate={onUpdate}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="health">
        {(props) => (
          <HealthInfoScreen
            {...props}
            bloodType={formState.bloodType}
            medications={formState.medications}
            conditions={formState.conditions}
            onUpdate={onUpdate}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="contact">
        {(props) => (
          <ContactInfoScreen
            {...props}
            nokName={formState.nokName}
            nokNumber={formState.nokNumber}
            onUpdate={onUpdate}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="review">
        {(props) => <ReviewScreen {...props} form={formState} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
