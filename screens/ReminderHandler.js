import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import EditRemindersScreen from "./EditRemindersScreen";

export default class ReminderHandler extends Component {
  state = {
    reminders: [
      { id: 0, name: "Bumex", value: [1, 0, 1, 0, 1, 0, 0] },
      { id: 1, name: "Humulin", value: [0, 1, 0, 1, 0, 1, 0] },
      { id: 3, name: "Panadol", value: [1, 1, 1, 1, 1, 1, 1] },
      { id: 4, name: "Charcoal", value: [1, 1, 1, 1, 1, 1, 1] },
      { id: 5, name: "Antibiotics", value: [1, 1, 1, 1, 1, 1, 1] },
      { id: 6, name: "Weed", value: [1, 1, 1, 1, 1, 1, 1] },
      { id: 7, name: "Anarax", value: [1, 1, 1, 1, 1, 1, 1] },
      { id: 8, name: "NewMed1", value: [1, 1, 1, 1, 1, 1, 1] },
      { id: 9, name: "NewMed2", value: [1, 1, 1, 1, 1, 1, 1] },
    ],
    newReminder: { Name: "", value: [0, 0, 0, 0, 0, 0, 0] },
    shown: false,
  };

  handleToggle = (reminder, valueIndex) => {
    const reminders = [...this.state.reminders];
    const index = reminders.indexOf(reminder);
    reminders[index] = { ...reminder };
    reminders[index].value[valueIndex] =
      reminders[index].value[valueIndex] === 0 ? 1 : 0;
    this.setState({ reminders });
  };

  handleDelete = (reminderId) => {
    const reminders = this.state.reminders.filter((c) => c.id !== reminderId);
    this.setState({ reminders });
  };

  handleAdd = () => {
    const reminders = this.state.reminders;
    const newReminder = this.state.newReminder;
    reminders.push({
      id: reminders.length,
      name: newReminder.name,
      value: newReminder.value,
    });
    newReminder = { Name: " ", value: [0, 0, 0, 0, 0, 0, 0] };
    this.setState({ reminders });
    this.setState({ newReminder });
  };

  handleToggleOverlay = () => {
    const shown = this.state.shown;
    this.setState({ shown: shown === true ? false : true });
  };

  render() {
    return (
      <View style={styles.container}>
        <EditRemindersScreen
          reminders={this.state.reminders}
          newReminder={this.state.newReminder}
          shown={this.state.shown}
          onToggle={this.handleToggle}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onToggleOverlay={this.handleToggleOverlay}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
