import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import EditRemindersScreen from "./EditRemindersScreen";

export default class ReminderHandler extends Component {
  state = {
    reminders: [
      { id: 0, name: "Bumex", value: [1, 0, 1, 0, 1, 0, 0] },
      { id: 1, name: "Humulin", value: [0, 1, 0, 1, 0, 1, 0] },
    ],
    newReminder: { name: "Untitled Meds", value: [0, 0, 0, 0, 0, 0, 0] },
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

  handleAdd = (add) => {
    const reminders = this.state.reminders;
    const newReminder = this.state.newReminder;
    const shown = this.state.shown;
    reminders.push({
      id: reminders[reminders.length - 1].id + 1,
      name: newReminder.name,
      value: newReminder.value,
    });
    if (add) {
      this.setState({ reminders });
    }
    this.setState({
      newReminder: { name: "Untitled Meds", value: [0, 0, 0, 0, 0, 0, 0] },
    });
    this.setState({ shown: false });
  };

  handleToggleOverlay = () => {
    const shown = this.state.shown;
    this.setState({ shown: shown === true ? false : true });
  };

  handleChangeName = (newName) => {
    const newReminder = this.state.newReminder;
    this.setState({ newReminder: { name: newName, value: newReminder.value } });
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
          onChangeName={this.handleChangeName}
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
