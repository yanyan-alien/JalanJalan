import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import commonStyles from "../commonStyles";
import { MaterialIcons } from "@expo/vector-icons";

export default function CustomSelect({
  errorMessage,
  value,
  onChange,
  options = [], // default empty
  placeholder = "",
  ...additionalProps
}) {
  const invalid = errorMessage.length > 0;

  return (
    <View>
      {invalid && (
        <View style={commonStyles.errorContainer}>
          <MaterialIcons name="error-outline" size={24} color="#B00020" />
          <Text style={commonStyles.errorMessage}>{errorMessage}</Text>
        </View>
      )}
      <View
        style={[
          commonStyles.textInput,
          styles.select,
          invalid && commonStyles.textInput__error,
        ]}
      >
        <Picker
          selectedValue={value}
          onValueChange={onChange}
          mode="dropdown"
          {...additionalProps}
        >
          <Picker.Item
            label={placeholder}
            style={styles.selectLabel__placeholder}
          />
          {options.map((o, i) => (
            <Picker.Item
              key={i}
              label={o.label}
              value={o.value}
              style={styles.selectLabel}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectLabel: {
    fontSize: 20,
  },
  select: {
    width: 150,
    paddingLeft: 10,
    paddingRight: 0,
  },
  selectLabel__placeholder: {
    color: "#999999",
    fontSize: 20,
  },
});
