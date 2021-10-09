import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import RemindersMainScreen from "./screens/RemindersMainScreen";
import AllRemindersScreen from "./screens/AllRemindersScreen";
import EditRemindersScreen from "./screens/EditRemindersScreen";
import ReminderHandler from "./screens/ReminderHandler";

export default function App() {
  return (
    <View style={styles.container}>
      <ReminderHandler />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
