import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import commonStyles from "./commonStyles";
import CustomInput from "./Components/CustomInput";
import { contactInfoValidator } from "./InputValidator";

export default function ContactInfoScreen({
  navigation,
  nokName,
  nokNumber,
  onUpdate,
}) {
  const [error, setError] = useState({ name: "", number: "" });

  const next = () => {
    const { valid, errorMessages } = contactInfoValidator({
      name: nokName,
      number: nokNumber,
    });
    setError(errorMessages);
    if (valid) navigation.navigate("review");
  };

  return (
    <View style={styles.container}>
      <Text style={commonStyles.title}>Emergency Contact</Text>
      <CustomInput
        placeholder="Name of next-of-kin"
        value={nokName}
        onChange={(value) => onUpdate("nokName", value)}
        errorMessage={error.name}
        styleProps={{ marginTop: 10 }}
      />
      <CustomInput
        placeholder="Phone Number"
        value={nokNumber}
        onChange={(value) => onUpdate("nokNumber", value)}
        keyboardType="number-pad"
        errorMessage={error.number}
        styleProps={{ marginTop: 10 }}
      />
      <View style={commonStyles.buttonRow}>
        <TouchableOpacity
          style={commonStyles.button}
          onPress={() => navigation.navigate("health")}
        >
          <Text style={commonStyles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={commonStyles.button} onPress={next}>
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
