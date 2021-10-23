import React, { Component, useState } from "react";
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
            onChangeName={this.props.onChangeName}
            onAdd={this.props.onAdd}
          />
        </Overlay>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Medication:</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigate(this.props.destination)}
          >
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
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
            <Text style={styles.medButtonText}>+ Add medicine</Text>
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
  headerContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  header: {
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
  medButtonText: {
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
  button: {
    height: 40,
    width: 113,
    backgroundColor: "#C4C4C4",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});
