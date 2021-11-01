//Class has been discontinued due to redundant functionality

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Overlay } from "react-native-elements";

export default class AllRemindersScreen extends Component {
  state = {
    view: [false, false, false, false, false, false, false],
  };

  changeDay = (newDay) => {
    if (newDay === 0) {
      this.setState({
        view: [true, false, false, false, false, false, false],
      });
    } else if (newDay === 1) {
      this.setState({
        view: [false, true, false, false, false, false, false],
      });
    } else if (newDay === 2) {
      this.setState({
        view: [false, false, true, false, false, false, false],
      });
    } else if (newDay === 3) {
      this.setState({
        view: [false, false, false, true, false, false, false],
      });
    } else if (newDay === 4) {
      this.setState({
        view: [false, false, false, false, true, false, false],
      });
    } else if (newDay === 5) {
      this.setState({
        view: [false, false, false, false, false, true, false],
      });
    } else if (newDay === 6) {
      this.setState({
        view: [false, false, false, false, false, false, true],
      });
    } else if (newDay === 7) {
      this.setState({
        view: [false, false, false, false, false, false, false],
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Overlay
          overlayStyle={styles.overlayMainContainer}
          isVisible={this.state.view[0]}
          onBackdropPress={() => this.changeDay(7)}
        >
          <View style={styles.overlayContainer}>
            <View style={styles.firstRow}>
              <Text style={styles.header}>Monday:</Text>
            </View>
            <ScrollView style={styles.secondRow}>
              <Text style={styles.reminderText}>{this.props.allResult[1]}</Text>
            </ScrollView>
            <View style={styles.thirdRow}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.changeDay(7)}
              >
                <Text style={styles.buttonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>
        <Overlay
          overlayStyle={styles.overlayMainContainer}
          isVisible={this.state.view[1]}
          onBackdropPress={() => this.changeDay(7)}
        >
          <View style={styles.overlayContainer}>
            <View style={styles.firstRow}>
              <Text style={styles.header}>Monday:</Text>
            </View>
            <ScrollView style={styles.secondRow}>
              <Text style={styles.reminderText}>{this.props.allResult[2]}</Text>
            </ScrollView>
            <View style={styles.thirdRow}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.changeDay(7)}
              >
                <Text style={styles.buttonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>
        <Overlay
          overlayStyle={styles.overlayMainContainer}
          isVisible={this.state.view[2]}
          onBackdropPress={() => this.changeDay(7)}
        >
          <View style={styles.overlayContainer}>
            <View style={styles.firstRow}>
              <Text style={styles.header}>Monday:</Text>
            </View>
            <ScrollView style={styles.secondRow}>
              <Text style={styles.reminderText}>{this.props.allResult[3]}</Text>
            </ScrollView>
            <View style={styles.thirdRow}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.changeDay(7)}
              >
                <Text style={styles.buttonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>
        <Overlay
          overlayStyle={styles.overlayMainContainer}
          isVisible={this.state.view[3]}
          onBackdropPress={() => this.changeDay(7)}
        >
          <View style={styles.overlayContainer}>
            <View style={styles.firstRow}>
              <Text style={styles.header}>Monday:</Text>
            </View>
            <ScrollView style={styles.secondRow}>
              <Text style={styles.reminderText}>{this.props.allResult[4]}</Text>
            </ScrollView>
            <View style={styles.thirdRow}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.changeDay(7)}
              >
                <Text style={styles.buttonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>
        <Overlay
          overlayStyle={styles.overlayMainContainer}
          isVisible={this.state.view[4]}
          onBackdropPress={() => this.changeDay(7)}
        >
          <View style={styles.overlayContainer}>
            <View style={styles.firstRow}>
              <Text style={styles.header}>Monday:</Text>
            </View>
            <ScrollView style={styles.secondRow}>
              <Text style={styles.reminderText}>{this.props.allResult[5]}</Text>
            </ScrollView>
            <View style={styles.thirdRow}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.changeDay(7)}
              >
                <Text style={styles.buttonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>
        <Overlay
          overlayStyle={styles.overlayMainContainer}
          isVisible={this.state.view[5]}
          onBackdropPress={() => this.changeDay(7)}
        >
          <View style={styles.overlayContainer}>
            <View style={styles.firstRow}>
              <Text style={styles.header}>Monday:</Text>
            </View>
            <ScrollView style={styles.secondRow}>
              <Text style={styles.reminderText}>{this.props.allResult[6]}</Text>
            </ScrollView>
            <View style={styles.thirdRow}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.changeDay(7)}
              >
                <Text style={styles.buttonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>
        <Overlay
          overlayStyle={styles.overlayMainContainer}
          isVisible={this.state.view[6]}
          onBackdropPress={() => this.changeDay(7)}
        >
          <View style={styles.overlayContainer}>
            <View style={styles.firstRow}>
              <Text style={styles.header}>Monday:</Text>
            </View>
            <ScrollView style={styles.secondRow}>
              <Text style={styles.reminderText}>{this.props.allResult[0]}</Text>
            </ScrollView>
            <View style={styles.thirdRow}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.changeDay(7)}
              >
                <Text style={styles.buttonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Overlay>

        <View style={styles.pageContainer}>
          <View style={styles.daysContainer}>
            <TouchableOpacity
              onPress={() => {
                this.changeDay(0);
              }}
            >
              <Text style={styles.dayText}>Monday</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.changeDay(1);
              }}
            >
              <Text style={styles.dayText}>Tuesday</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.changeDay(2);
              }}
            >
              <Text style={styles.dayText}>Wednesday</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.changeDay(3);
              }}
            >
              <Text style={styles.dayText}>Thursday</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.changeDay(4);
              }}
            >
              <Text style={styles.dayText}>Friday</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.changeDay(5);
              }}
            >
              <Text style={styles.dayText}>Saturday</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.changeDay(6);
              }}
            >
              <Text style={styles.dayText}>Sunday</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.editContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ReminderEdit")}
            >
              <Image
                source={require("../../assets/edit_button.png")}
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
  },
  daysContainer: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginLeft: 20,
  },
  dayText: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "left",
  },
  editContainer: {
    flex: 1,
    alignItems: "center",
  },
  editIcon: {
    height: 40,
    width: 40,
  },
  overlayContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  overlayMainContainer: {
    alignItems: "center",
    height: 490,
    width: 315,
    alignSelf: "center",
    borderRadius: 23,
  },
  firstRow: {
    marginTop: 10,
    flex: 1,
    justifyContent: "center",
  },
  secondRow: {
    flex: 20,
    flexWrap: "nowrap",
  },
  thirdRow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 1,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    fontSize: 30,
    borderWidth: 1,
    borderRadius: 15,
    textAlign: "center",
  },
  button: {
    height: 40,
    width: 113,
    backgroundColor: "#C4C4C4",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  reminderText: {
    fontSize: 30,
    textAlign: "left",
    lineHeight: 50,
  },
});
