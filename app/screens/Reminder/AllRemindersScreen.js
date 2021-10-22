import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Overlay } from "react-native-elements";

export default function AllRemindersScreen({ navigation }) {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <Overlay
        overlayStyle={styles.overlayMainContainer}
        isVisible={visible}
        onBackdropPress={toggleOverlay}
      >
        <View style={styles.overlayContainer}>
          <View style={styles.firstRow}>
            <Text style={styles.header}>Monday:</Text>
          </View>
          <ScrollView style={styles.secondRow}>
            <Text style={styles.reminderText}>
              Hello this is a super long text to test the scroll function i just
              added, hope it works wonders
            </Text>
          </ScrollView>
          <View style={styles.thirdRow}>
            <TouchableOpacity style={styles.button} onPress={toggleOverlay}>
              <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
      <View style={styles.pageContainer}>
        <View style={styles.daysContainer}>
          <TouchableOpacity onPress={toggleOverlay}>
            <Text style={styles.dayText}>Monday</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleOverlay}>
            <Text style={styles.dayText}>Tuesday</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleOverlay}>
            <Text style={styles.dayText}>Wednesday</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleOverlay}>
            <Text style={styles.dayText}>Thursday</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleOverlay}>
            <Text style={styles.dayText}>Friday</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleOverlay}>
            <Text style={styles.dayText}>Saturday</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleOverlay}>
            <Text style={styles.dayText}>Sunday</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.editContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ReminderHandler")}
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
