import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import * as SQLite from "expo-sqlite";

import ReminderNavigator from "./ReminderNavigator";

const db = SQLite.openDatabase("test16.db");
const d = new Date();

export default class ReminderHandler extends Component {
  state = {
    reminders: [],
    newReminder: { name: "Untitled Meds", value: [0, 0, 0, 0, 0, 0, 0] },
    shown: false,
    tempResult: "No Reminders for Today",
    viewDay: 0,
    allResult: [
      "No Reminders",
      "No Reminders",
      "No Reminders",
      "No Reminders",
      "No Reminders",
      "No Reminders",
      "No Reminders",
    ],
  };

  //CREATE: Set up database and create dummy data (NOTE: code will have error with empty reminders in state)
  componentDidMount = () => {
    db.transaction((tx) =>
      tx.executeSql(
        'SELECT * FROM sqlite_master WHERE type="table" AND name="reminders"',
        null,
        (trans, result) => {
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
                        this.databaseLoad();
                      },
                      (trans, result) => {
                        console.log("insertion failure");
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
            this.databaseLoad();
          }
        },
        (trans, result) => {
          console.log("database doesn't exist");
        }
      )
    );
  };

  //READ for Database (MAIN PAGE)
  handleLoadMain = () => {
    this.databaseLoad();
  };

  databaseLoad = () => {
    let day = d.getDay();
    let week = [
      "SELECT name FROM reminders WHERE sun = 1",
      "SELECT name FROM reminders WHERE mon = 1",
      "SELECT name FROM reminders WHERE tue = 1",
      "SELECT name FROM reminders WHERE wed = 1",
      "SELECT name FROM reminders WHERE thu = 1",
      "SELECT name FROM reminders WHERE fri = 1",
      "SELECT name FROM reminders WHERE sat = 1",
    ];
    db.transaction((tx) =>
      tx.executeSql(
        week[day],
        null,
        (trans, result) => {
          if (result.rows.length != 0) {
            this.saveDbToToday(result);
          }
          console.log("database read success (today)");
        },
        (trans, result) => {
          console.log("database read failure (today)");
        }
      )
    );
  };

  saveDbToToday = (result) => {
    let tempReminders = "";
    if (result != []) {
      for (let i = 0; i < result.rows.length; i++) {
        tempReminders += "- ";
        tempReminders += result.rows.item(i).name;
        tempReminders += "\n";
      }
      this.setState({ tempResult: tempReminders });
    }
  };

  //READ for Database (ALL PAGE)
  databaseView = () => {
    let week = [
      "SELECT name FROM reminders WHERE sun = 1",
      "SELECT name FROM reminders WHERE mon = 1",
      "SELECT name FROM reminders WHERE tue = 1",
      "SELECT name FROM reminders WHERE wed = 1",
      "SELECT name FROM reminders WHERE thu = 1",
      "SELECT name FROM reminders WHERE fri = 1",
      "SELECT name FROM reminders WHERE sat = 1",
    ];
    let tempArray = [];
    for (let i = 0; i < week.length; i++) {
      db.transaction((tx) =>
        tx.executeSql(
          week[i],
          null,
          (trans, result) => {
            if (result.rows.length != 0) {
              let tempReminders = "";
              if (result != []) {
                for (let j = 0; j < result.rows.length; j++) {
                  tempReminders += "- ";
                  tempReminders += result.rows.item(j).name;
                  tempReminders += "\n";
                  tempArray.push(tempReminders);
                }
              } else {
                tempArray.push("No Reminders");
              }
            }
            console.log("database read success (all)");
          },
          (trans, result) => {
            console.log("database read failure (all)");
          }
        )
      );
    }
    this.setState({ allResult: tempArray });
  };

  saveDbToThisDay = (result) => {
    let tempReminders = "";
    if (result != []) {
      for (let i = 0; i < result.rows.length; i++) {
        tempReminders += "- ";
        tempReminders += result.rows.item(i).name;
        tempReminders += "\n";
        this.setState({ allResult: tempReminders });
      }
    } else {
      this.setState({ allResult: "No Reminders" });
    }
  };

  //READ for Database (EDIT PAGE)
  handleLoadEdit = () => {
    this.databaseRead();
  };

  databaseRead = () => {
    this.setState({ reminders: [] });
    db.transaction((tx) =>
      tx.executeSql(
        "SELECT rowid, name, mon, tue, wed, thu, fri, sat, sun FROM reminders",
        null,
        (trans, result) => {
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
  //UPDATE for database (EDIT PAGE)
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
            this.databaseLoad();
          },
          (trans, result) => {
            console.log("data not stored");
          }
        )
      );
    }
  };
  //DELETE for database (EDIT PAGE)
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

  //Non-database functions
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
    if (add) {
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
            this.databaseLoad();
            this.databaseRead();
            console.log("insertion success");
          },
          (trans, result) => {
            console.log("insertion failure");
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

  handleChangeDay = (newDay) => {
    this.databaseView(newDay);
  };

  render() {
    return (
      <View style={styles.container}>
        <ReminderNavigator
          reminders={this.state.reminders}
          newReminder={this.state.newReminder}
          shown={this.state.shown}
          navigation={this.props.navigation}
          tempResult={this.state.tempResult}
          viewDay={this.state.viewDay}
          allResult={this.state.allResult}
          onToggle={this.handleToggle}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onToggleOverlay={this.handleToggleOverlay}
          onChangeName={this.handleChangeName}
          onSave={this.databaseUpdate}
          onLoadMain={this.handleLoadMain}
          onLoadEdit={this.handleLoadEdit}
          onChangeDay={this.handleChangeDay}
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
