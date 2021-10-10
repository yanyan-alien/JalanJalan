import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function AllRemindersScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.pageContainer}>
        <View style={styles.daysContainer}>
          <TouchableOpacity
            onPress={() => console.log("Monday has been pressed")}
          >
            <Text style={styles.dayText}>Monday</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Tuesday has been pressed")}
          >
            <Text style={styles.dayText}>Tuesday</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Wednesday has been pressed")}
          >
            <Text style={styles.dayText}>Wednesday</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Thursday has been pressed")}
          >
            <Text style={styles.dayText}>Thursday</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Friday has been pressed")}
          >
            <Text style={styles.dayText}>Friday</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Saturday has been pressed")}
          >
            <Text style={styles.dayText}>Saturday</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Sunday has been pressed")}
          >
            <Text style={styles.dayText}>Sunday</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.editContainer}>
          <TouchableOpacity
            onPress={() => console.log("Edit button has been pressed")}
          >
            <Image
              source={require("../../assets/edit_button.png")}
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
  },
  daysContainer: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginLeft: 20,
  },
  dayText: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "left",
  },
  editContainer: {
    flex: 1,
    alignItems: "center",
  },
  editIcon: {
    height: 40,
    width: 40,
  },
});
