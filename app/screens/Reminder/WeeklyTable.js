import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class Reminder extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.onToggle(this.props.reminder, 0)}
        >
          <View
            style={[
              this.props.reminder.value[0] === 0
                ? styles.singleDayInactiveContainer
                : styles.singleDayActiveContainer,
            ]}
          >
            <Text style={styles.dayText}>M</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.onToggle(this.props.reminder, 1)}
        >
          <View
            style={[
              this.props.reminder.value[1] === 0
                ? styles.singleDayInactiveContainer
                : styles.singleDayActiveContainer,
            ]}
          >
            <Text style={styles.dayText}>T</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.onToggle(this.props.reminder, 2)}
        >
          <View
            style={[
              this.props.reminder.value[2] === 0
                ? styles.singleDayInactiveContainer
                : styles.singleDayActiveContainer,
            ]}
          >
            <Text style={styles.dayText}>W</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.onToggle(this.props.reminder, 3)}
        >
          <View
            style={[
              this.props.reminder.value[3] === 0
                ? styles.singleDayInactiveContainer
                : styles.singleDayActiveContainer,
            ]}
          >
            <Text style={styles.dayText}>T</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.onToggle(this.props.reminder, 4)}
        >
          <View
            style={[
              this.props.reminder.value[4] === 0
                ? styles.singleDayInactiveContainer
                : styles.singleDayActiveContainer,
            ]}
          >
            <Text style={styles.dayText}>F</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.onToggle(this.props.reminder, 5)}
        >
          <View
            style={[
              this.props.reminder.value[5] === 0
                ? styles.singleDayInactiveContainer
                : styles.singleDayActiveContainer,
            ]}
          >
            <Text style={styles.dayText}>S</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.onToggle(this.props.reminder, 6)}
        >
          <View
            style={[
              this.props.reminder.value[6] === 0
                ? styles.singleDayInactiveContainer
                : styles.singleDayActiveContainer,
            ]}
          >
            <Text style={styles.dayText}>S</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  singleDayActiveContainer: {
    flex: 1,
    height: 40,
    width: 40,
    backgroundColor: "#DEDADA",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  singleDayInactiveContainer: {
    flex: 1,
    height: 40,
    width: 40,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dayText: {
    fontSize: 30,
    alignSelf: "center",
  },
});
