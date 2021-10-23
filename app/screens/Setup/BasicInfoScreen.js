import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import commonStyles from "./commonStyles";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

export default function BasicInfoScreen({
  navigation,
  name,
  gender,
  birthday,
  postalCode,
  addressLine1,
  addressLine2,
  onUpdate,
}) {
  const [date, setDate] = useState(birthday ? birthday : new Date());
  const [show, setShow] = useState(false);
  const [dateChanged, setDateChanged] = useState(birthday); // Checking for null

  const onDateChange = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDateChanged(true); // only needs to be set once
    onUpdate("birthday", currentDate);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={commonStyles.title}>Basic Info</Text>
      <TextInput
        placeholder="Name"
        style={commonStyles.textInput}
        onChangeText={(name) => onUpdate("name", name)}
        value={name}
      />
      <View style={styles.doubleInputContainer}>
        <TextInput
          placeholder="Gender"
          style={commonStyles.textInput}
          onChangeText={(value) => onUpdate("gender", value)}
          value={gender}
        />
        <Text
          style={[
            commonStyles.textInput,
            styles.dateSelect,
            dateChanged && styles.date,
          ]}
          onPress={() => setShow(true)}
        >
          {dateChanged ? moment(date).format("DD MMM YYYY") : "Birthday"}
        </Text>
      </View>
      <TextInput
        placeholder="Postal Code"
        style={commonStyles.textInput}
        onChangeText={(value) => onUpdate("postalCode", value)}
        keyboardType="numeric"
        value={postalCode}
      />
      <TextInput
        placeholder="Block/Street Name"
        style={commonStyles.textInput}
        onChangeText={(value) => onUpdate("addressLine1", value)}
        value={addressLine1}
      />
      <TextInput
        placeholder="Level/Unit Number"
        style={commonStyles.textInput}
        onChangeText={(value) => onUpdate("addressLine2", value)}
        value={addressLine2}
      />
      <View style={commonStyles.buttonRow}>
        <TouchableOpacity
          style={commonStyles.button}
          onPress={() => navigation.navigate("health")}
        >
          <Text style={commonStyles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker value={date} mode="date" onChange={onDateChange} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    height: 900,
  },
  doubleInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  dateSelect: {
    flex: 1,
    marginLeft: 10,
    color: "#8b8b8b", // TODO: fix color if necessary
  },
  date: {
    color: "#000",
  },
});
