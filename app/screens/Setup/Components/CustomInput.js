import React from "react";
import commonStyles from "../commonStyles";
import { View, Text, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CustomInput({
  errorMessage = "",
  placeholder,
  value,
  onChange,
  styleProps = {},
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
      <TextInput
        placeholder={placeholder}
        style={[
          commonStyles.textInput,
          invalid && commonStyles.textInput__error,
          styleProps,
        ]}
        value={value}
        onChangeText={onChange}
        {...additionalProps}
      />
    </View>
  );
}
