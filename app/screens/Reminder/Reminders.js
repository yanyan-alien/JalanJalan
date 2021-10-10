import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Reminder from "./Reminder";

export default class Reminders extends Component {
  render() {
    const { onDelete, onToggle, reminders } = this.props;
    return (
      <ScrollView style={styles.container}>
        {reminders.map((reminder) => (
          <Reminder
            key={reminder.id}
            onDelete={onDelete}
            onToggle={onToggle}
            reminder={reminder}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "flex-start",
  },
});
