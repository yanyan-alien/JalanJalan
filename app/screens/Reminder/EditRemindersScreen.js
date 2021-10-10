import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Overlay } from "react-native-elements";

import AddMedicineOverlay from "./AddMedicineOverlay";
import Reminders from "./Reminders";

export default class EditRemindersScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Overlay
          overlayStyle={styles.overlayContainer}
          isVisible={this.props.shown}
          onBackdropPress={() => this.props.onToggleOverlay()}
        >
          <AddMedicineOverlay
            newReminder={this.props.newReminder}
            onToggle={this.props.onToggle}
          />
        </Overlay>
        <Text style={styles.header}>Medication:</Text>
        <View style={styles.medicationListContainer}>
          <Reminders
            reminders={this.props.reminders}
            onToggle={this.props.onToggle}
            onDelete={this.props.onDelete}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.addMedicineButton}
            onPress={() => this.props.onToggleOverlay()}
          >
            <Text style={styles.buttonText}>+ Add medicine</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlayContainer: {
    alignItems: "center",
    height: 490,
    width: 315,
    alignSelf: "center",
    borderRadius: 23,
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
  addMedicineButton: {
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
  medicationListContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 30,
    marginLeft: 30,
    flex: 1,
  },
  medicationText: {
    fontSize: 30,
    textAlign: "left",
    lineHeight: 50,
  },
});
