import React, { useReducer, useEffect, Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RemindersMainScreen from "./RemindersMainScreen";
import AllRemindersScreen from "./AllRemindersScreen";
import EditRemindersScreen from "./EditRemindersScreen";

const Stack = createNativeStackNavigator();

export default class ReminderNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="ReminderMain"
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="ReminderMain">
          {(props) => (
            <RemindersMainScreen
              tempResult={this.props.tempResult}
              onLoadMain={this.props.onLoadMain}
              navigation={this.props.navigation}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="ReminderAll">
          {(props) => (
            <AllRemindersScreen
              navigation={this.props.navigation}
              onChangeDay={this.props.onChangeDay}
              allResult={this.props.allResult}
              shown={this.props.shown}
              onToggleOverlay={this.props.onToggleOverlay}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="ReminderEdit">
          {(props) => (
            <EditRemindersScreen
              reminders={this.props.reminders}
              newReminder={this.props.newReminder}
              shown={this.props.shown}
              navigation={this.props.navigation}
              onToggle={this.props.onToggle}
              onDelete={this.props.onDelete}
              onAdd={this.props.onAdd}
              onToggleOverlay={this.props.onToggleOverlay}
              onChangeName={this.props.onChangeName}
              onSave={this.props.onSave}
              onRead={this.props.onRead}
              onLoadEdit={this.props.onLoadEdit}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}
