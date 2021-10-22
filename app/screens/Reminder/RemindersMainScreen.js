import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("remindersDB.db");
const d = new Date();

class RemindersMainScreen extends Component {
  state = {
    tempResult: "No Reminders for Today",
  };
  componentDidMount = () => {
    this.databaseRead();
  };

  databaseRead = () => {
    let day = d.getDay();
    let week = [
      "SELECT name FROM reminders WHERE sun = 1",
      "SELECT name FROM reminders WHERE mon = 1",
      "SELECT name FROM reminders WHERE tue = 1",
      "SELECT name FROM reminders WHERE wed = 1",
      "SELECT name FROM reminders WHERE thu = 1",
      "SELECT name FROM reminders WHERE fri = 1",
      "SELECT name FROM reminders WHERE sat = 1",
    ];
    db.transaction((tx) =>
      tx.executeSql(
        week[day],
        null,
        (trans, result) => {
          if (result.rows.length != 0) {
            this.saveDbToToday(result);
          }
        },
        (trans, result) => {
          console.log("database read failure (today)");
        }
      )
    );
  };

  saveDbToToday = (result) => {
    let tempReminders = "";
    if (result != []) {
      for (let i = 0; i < result.rows.length; i++) {
        tempReminders += "- ";
        tempReminders += result.rows.item(i).name;
        tempReminders += "\n";
      }
      console.log(tempReminders);
      this.setState({ tempResult: tempReminders });
    }
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Today:</Text>
        <View style={styles.reminderListContainer}>
          <Text style={styles.reminderText}>{this.state.tempResult}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.remindersButton}
            onPress={() => navigation.navigate("ReminderAll")}
          >
            <Text style={styles.buttonText}>All Reminders</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();
  return <RemindersMainScreen {...props} navigation={navigation} />;
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
