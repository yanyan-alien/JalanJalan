import React, { useState } from "react";
import commonStyles from "../commonStyles";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

export default function CustomDate({
  errorMessage,
  placeholder,
  value,
  onChange,
  ...additionalProps
}) {
  const [date, setDate] = useState(value || new Date());
  const [show, setShow] = useState(false);
  const [dateChanged, setDateChanged] = useState(Boolean(value)); // Checking for null

  const invalid = errorMessage.length > 0;

  const onDateChange = (e, selectedDate) => {
    if (e.type === "dismissed") {
      setShow(false);
    } else {
      const currentDate = selectedDate || date;
      setShow(false);
      setDate(currentDate);
      setDateChanged(true); // only needs to be set once
      onChange(currentDate);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {invalid && (
        <View style={commonStyles.errorContainer}>
          <MaterialIcons name="error-outline" size={24} color="#B00020" />
          <Text style={commonStyles.errorMessage}>{errorMessage}</Text>
        </View>
      )}
      <Text
        style={[
          commonStyles.textInput,
          styles.dateSelect,
          dateChanged && styles.date,
          invalid && commonStyles.textInput__error,
        ]}
        onPress={() => setShow(true)}
        {...additionalProps}
      >
        {dateChanged ? moment(date).format("DD MMM YYYY") : placeholder}
      </Text>
      {show && (
        <DateTimePicker value={date} mode="date" onChange={onDateChange} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dateSelect: {
    // flex: 1,
    marginLeft: 10,
    color: "#999999",
  },
  date: {
    color: "#000",
  },
});
