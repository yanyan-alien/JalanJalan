import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RemindersMainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today:</Text>
      <View style={styles.reminderListContainer}>
        <Text style={styles.reminderText}>
          {"9am\n- Bumex\n12pm\n- Humulin\n"}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.remindersButton}
          onPress={() => console.log("All reminders has been pressed")}
        >
          <Text style={styles.buttonText}>All Reminders</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 20,
    marginTop: 30,
  },
  buttonContainer: {
    alignItems: "flex-end",
    flex: 0,
    marginBottom: 10,
  },
  remindersButton: {
    backgroundColor: "#6FBAFF",
    justifyContent: "center",
    width: 350,
    height: 73,
    borderRadius: 24,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
  },
  reminderListContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 30,
    marginLeft: 30,
    flex: 1,
  },
  reminderText: {
    fontSize: 30,
    textAlign: "left",
    lineHeight: 50,
  },
});
