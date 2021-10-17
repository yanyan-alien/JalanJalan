import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import commonStyles from "./commonStyles";

export default function ContactInfoScreen({
  navigation,
  nokName,
  nokNumber,
  onUpdate,
}) {
  return (
    <View style={styles.container}>
      <Text style={commonStyles.title}>Emergency Contact</Text>
      <TextInput
        placeholder="Name of next-of-kin"
        style={commonStyles.textInput}
        value={nokName}
        onChangeText={(value) => onUpdate("nokName", value)}
      />
      <TextInput
        placeholder="Phone Number"
        style={commonStyles.textInput}
        keyboardType="number-pad"
        value={nokNumber}
        onChangeText={(value) => onUpdate("nokNumber", value)}
      />
      <View style={commonStyles.buttonRow}>
        <TouchableOpacity
          style={commonStyles.button}
          onPress={() => navigation.navigate("health")}
        >
          <Text style={commonStyles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={commonStyles.button}
          onPress={() => navigation.navigate("review")}
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
});
