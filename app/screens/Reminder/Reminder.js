import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

import WeeklyTable from "./WeeklyTable";

export default class Reminder extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.medicationName}>{this.props.reminder.name}</Text>
        <View style={styles.buttonRow}>
          <View style={styles.weeklyContainer}>
            <WeeklyTable
              reminder={this.props.reminder}
              onToggle={this.props.onToggle}
            />
          </View>
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                "Delete Reminder",
                "Are you sure?",
                [
                  {
                    text: "Yes",
                    onPress: () => this.props.onDelete(this.props.reminder.id),
                  },
                  { text: "No" },
                ],
                (cancelable = true)
              )
            }
          >
            <Image source={require("../../assets/delete_button.png")} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  medicationName: {
    fontSize: 30,
    textAlign: "left",
  },
  buttonRow: {
    marginTop: 10,
    flexDirection: "row",
  },
  weeklyContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  singleDayActiveContainer: {
    height: 40,
    width: 40,
    backgroundColor: "#DEDADA",
    borderWidth: 1,
  },
  singleDayInactiveContainer: {
    height: 40,
    width: 40,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
  },
  deleteContainer: {
    flex: 1,
  },
});
