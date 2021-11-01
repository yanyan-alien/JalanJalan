//Class that handles the UI and functionality of the add reminder overlay
//Includes a text box for users to enter the name and a weekly table
//Upon clicking add, new reminder will be saved to database

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import WeeklyTable from "./WeeklyTable";

export default class AddMedicineOverlay extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstRow}>
          <Text style={styles.header}>New Reminder:</Text>
        </View>
        <View style={styles.secondRow}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.props.onChangeName(text)}
            placeholder="Name of Medicine"
            autoCapitalize="words"
            maxLength={15}
          />
        </View>
        <View style={styles.thirdRow}>
          <View style={styles.weekBox}>
            <WeeklyTable
              reminder={this.props.newReminder}
              onToggle={this.props.onToggle}
            />
          </View>
        </View>
        <View style={styles.fourthRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.onAdd(true)}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.onAdd(false)}
          >
            <Text style={styles.buttonText}>Cancel</Text>
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
    justifyContent: "center",
  },
  firstRow: {
    marginTop: 10,
    flex: 1,
    justifyContent: "center",
  },
  secondRow: {
    flex: 1,
    justifyContent: "center",
    flexWrap: "nowrap",
  },
  thirdRow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fourthRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  header: {
    flex: 1,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    fontSize: 30,
    borderWidth: 1,
    borderRadius: 15,
    textAlign: "center",
  },
  weekBox: {
    flex: 0.3333,
    alignSelf: "center",
  },
  button: {
    height: 40,
    width: 113,
    backgroundColor: "#C4C4C4",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});
