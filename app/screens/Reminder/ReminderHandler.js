import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("remindersDB.db");

import EditRemindersScreen from "./EditRemindersScreen";

export default class ReminderHandler extends Component {
  state = {
    reminders: [],
    newReminder: { name: "Untitled Meds", value: [0, 0, 0, 0, 0, 0, 0] },
    shown: false,
  };

  //CREATE: Set up database and create dummy data (NOTE: code will have error with empty reminders in state)
  componentDidMount = () => {
    db.transaction((tx) =>
      tx.executeSql(
        'SELECT * FROM sqlite_master WHERE type="table" AND name="reminders"',
        null,
        (trans, result) => {
          console.log(result);
          if (result.rows.length === 0) {
            console.log("table doesn't exist");
            db.transaction((tx) =>
              tx.executeSql(
                `CREATE TABLE IF NOT EXISTS
              reminders (
              name TEXT NOT NULL,
              mon INTEGER,
              tue INTEGER,
              wed INTEGER,
              thu INTEGER,
              fri INTEGER,
              sat INTEGER,
              sun INTEGER)`,
                null,
                (trans, result) => {
                  console.log("database created");
                  db.transaction((tx) =>
                    tx.executeSql(
                      "INSERT INTO reminders (name, mon, tue, wed, thu, fri, sat, sun) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
                      ["Bumex", 1, 0, 1, 0, 1, 0, 0],
                      (trans, result) => {
                        this.databaseRead();
                      },
                      (trans, result) => {
                        console.log("insertion failure");
                        console.log(result);
                      }
                    )
                  );
                },
                (trans, result) => {
                  console.log("database not created");
                }
              )
            );
          } else {
            console.log("table exists");
            this.databaseRead();
          }
        },
        (trans, result) => {
          console.log("database doesn't exist");
        }
      )
    );
  };
  //READ for Database
  databaseRead = () => {
    this.setState({ reminders: [] });
    db.transaction((tx) =>
      tx.executeSql(
        "SELECT rowid, name, mon, tue, wed, thu, fri, sat, sun FROM reminders",
        null,
        (trans, result) => {
          console.log(result);
          if (result.rows.length != 0) {
            this.saveDbToState(result);
          }
          console.log("database read success");
          console.log(this.state.reminders);
        },
        (trans, result) => {
          console.log("database read failure");
        }
      )
    );
  };
  saveDbToState = (result) => {
    const reminders = this.state.reminders;
    let tempReminders = [];
    if (result != []) {
      for (let i = 0; i < result.rows.length; i++) {
        console.log(result.rows.item(i));
        tempReminders.push({
          id: result.rows.item(i).rowid,
          name: result.rows.item(i).name,
          value: [
            result.rows.item(i).mon,
            result.rows.item(i).tue,
            result.rows.item(i).wed,
            result.rows.item(i).thu,
            result.rows.item(i).fri,
            result.rows.item(i).sat,
            result.rows.item(i).sun,
          ],
        });
      }
    }
    this.setState({ reminders: reminders.concat(tempReminders) });
  };
  //UPDATE for database
  databaseUpdate = () => {
    const reminders = this.state.reminders;
    for (let i = 0; i < reminders.length; i++) {
      db.transaction((tx) =>
        tx.executeSql(
          "UPDATE reminders SET mon=?, tue=?, wed=?, thu=?, fri=?, sat=?, sun=? WHERE rowid = ?",
          [
            reminders[i].value[0],
            reminders[i].value[1],
            reminders[i].value[2],
            reminders[i].value[3],
            reminders[i].value[4],
            reminders[i].value[5],
            reminders[i].value[6],
            reminders[i].id,
          ],
          (trans, result) => {
            console.log("data stored");
          },
          (trans, result) => {
            console.log("data not stored");
          }
        )
      );
    }
  };
  //DELETE for database
  databaseDelete = (id) => {
    db.transaction((tx) =>
      tx.executeSql(
        "DELETE FROM reminders WHERE rowid=?",
        [id],
        (trans, result) => {
          console.log("data deleted");
        },
        (trans, result) => {
          console.log("data not deleted");
        }
      )
    );
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
    this.databaseDelete(reminderId);
  };

  handleAdd = (add) => {
    const reminders = this.state.reminders;
    const newReminder = this.state.newReminder;
    const shown = this.state.shown;
    //const index = reminders == null ? 0 : reminders[reminders.length - 1].id + 1;
    //reminders.push({
    //  id: reminders[reminders.length - 1].id + 1,
    //  name: newReminder.name,
    //  value: newReminder.value,
    //});
    if (add) {
      //this.setState({ reminders });
      db.transaction((tx) =>
        tx.executeSql(
          "INSERT INTO reminders (name, mon, tue, wed, thu, fri, sat, sun) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
          [
            newReminder.name,
            newReminder.value[0],
            newReminder.value[1],
            newReminder.value[2],
            newReminder.value[3],
            newReminder.value[4],
            newReminder.value[5],
            newReminder.value[6],
          ],
          (trans, result) => {
            this.databaseRead();
          },
          (trans, result) => {
            console.log("insertion failure");
            console.log(result);
          }
        )
      );
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
          navigation={this.props.navigation}
          onToggle={this.handleToggle}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onToggleOverlay={this.handleToggleOverlay}
          onChangeName={this.handleChangeName}
          onSave={this.databaseUpdate}
          navigate={this.props.navigation.navigate}
          destination="ReminderMain"
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
