import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import commonStyles from "./commonStyles";
import { Picker } from "@react-native-picker/picker";

const bloodTypes = ["A", "B", "AB", "O"];

export default function HealthInfoScreen({ navigation, bloodType, onUpdate }) {
  // const [bloodType, setbloodType] = useState("A");

  return (
    <View style={styles.container}>
      <Text style={commonStyles.title}>Health Info</Text>
      <View>
        <Image
          style={styles.floatingIcon}
          source={require("../../assets/blood-type.png")}
        ></Image>
        <View style={[commonStyles.textInput, styles.selectInput]}>
          <Picker
            selectedValue={bloodType}
            onValueChange={(itemValue) => onUpdate("bloodType", itemValue)}
            style={styles.selectInput}
            mode="dropdown"
          >
            {bloodTypes.map((v, i) => (
              <Picker.Item key={i} label={v} value={v} />
            ))}
          </Picker>
        </View>
      </View>
      <View>
        <Text>Medical conditions</Text>
      </View>
      <View style={commonStyles.buttonRow}>
        <TouchableOpacity
          style={commonStyles.button}
          onPress={() => navigation.navigate("basic")}
        >
          <Text style={commonStyles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={commonStyles.button}
          onPress={() => navigation.navigate("contact")}
        >
          <Text style={commonStyles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingIcon: {
    position: "absolute",
    zIndex: 3,
    top: 8,
  },
  selectInput: {
    paddingLeft: 30,
    marginLeft: 20,
  },
});
