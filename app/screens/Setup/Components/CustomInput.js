import React from "react";
import commonStyles from "../commonStyles";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CustomInput({
  errorMessage = "",
  placeholder,
  value,
  onChange,
  styleProps = {},
  trailingIcon = false,
  trailingIconAction = null,
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
      <View>
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
        {trailingIcon && (
          <MaterialIcons
            name="remove-circle-outline"
            size={24}
            color="black"
            style={styles.deleteIcon}
            onPress={trailingIconAction}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  deleteIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
});
