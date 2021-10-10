import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

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
            // onChangeText={onChangeNumber}
            //value={number}
            placeholder="Name of Medicine"
            autoCapitalize="words"
            maxLength={10}
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
        <View style={styles.fourthRow}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  firstRow: {
    marginTop: 10,
    flex: 1,
    justifyContent: "center",
  },
  secondRow: {
    flex: 1,
    justifyContent: "center",
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
    justifyContent: "center",
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
});
