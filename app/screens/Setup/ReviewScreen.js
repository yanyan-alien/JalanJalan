import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
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
};

const storeUserData = async (formEntries) => {
  try {
    await AsyncStorage.multiSet(formEntries);
  } catch (e) {
    //TODO: Handle saving error
    console.log(e);
  }
};
export default function ReviewScreen({ navigation, form }) {
  const formEntries = Object.entries({
    ...form,
    birthday: form.birthday.toISOString(),
  });

  return (
    <View style={styles.container}>
      <Text style={commonStyles.title}>Review</Text>
      <ScrollView style={styles.contentWrapper}>
        {Object.entries(labels).map(([key, label], i) => (
          <View key={i} style={styles.itemContainer}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>
              {key == "birthday"
                ? moment(form[key]).format("DD MMM YYYY")
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
          <TouchableOpacity
            style={commonStyles.button}
            onPress={() => storeUserData(formEntries)}
          >
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
    fontSize: 24,
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
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
