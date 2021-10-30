import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import commonStyles from "./commonStyles";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

const labels = {
  name: "Name",
  gender: "Gender",
  birthday: "Birthday",
  postalCode: "Postal Code",
  addressLine1: "Block/Street No.",
  addressLine2: "Level/Unit No.",
  bloodType: "Blood Type",
  nokName: "Emergency Contact",
  nokNumber: "Contact No.",
  medications: "Current Medications",
  conditions: "Medical Conditions",
};

// Stores user info from setup into local storage for persistance
// The format used is [key]: value 
const storeUserData = async (form) => {
  const formEntries = Object.entries({
    ...form,
    birthday: form.birthday ? form.birthday.toISOString() : "",
    medications: JSON.stringify(form.medications),
    conditions: JSON.stringify(form.conditions),
    setupDone: 'true'
  });

  try {
    await AsyncStorage.multiSet(formEntries);
    ToastAndroid.show("Saved!", ToastAndroid.SHORT);
  } catch (e) {
    //TODO: Handle saving error
    console.log(e);
  }
};
export default function ReviewScreen({ navigation, form }) {
  // Saves user data and routes user to home page of application
  // Reset ensures that user is not able to use back button to navigation back to setup 
  const next = () => {
    storeUserData(form);
    navigation.reset({
      index: 0,
      routes: [{ name: "TabNavigation" }],
    });
  };

  return (
    <View style={[commonStyles.wrapper, styles.container]}>
      <Text style={commonStyles.title}>Review</Text>
      <ScrollView style={styles.contentWrapper}>
        {Object.entries(labels).map(([key, label], i) => (
          <View key={i} style={styles.itemContainer}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>
              {key == "birthday"
                ? form[key]
                  ? moment(form[key]).format("DD MMM YYYY")
                  : ""
                : key == "medications" || key == "conditions"
                ? form[key].join("\n")
                : form[key]}
            </Text>
          </View>
        ))}
        <View style={commonStyles.buttonRow}>
          <TouchableOpacity
            style={commonStyles.button}
            onPress={() => navigation.navigate("contact")}
          >
            <Text style={commonStyles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={commonStyles.button} onPress={next}>
            <Text style={commonStyles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    color: "#5e5e5e",
    flex: 1,
  },
  value: {
    fontSize: 20,
    flex: 1,
    paddingLeft: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
    marginBottom: 20,
  },
  contentWrapper: {
    flex: 1,
    height: 1000,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
