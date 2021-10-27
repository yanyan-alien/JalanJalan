import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import commonStyles from "./commonStyles";
import CustomInput from "./Components/CustomInput";
import CustomSelect from "./Components/CustomSelect";
import CustomDate from "./Components/CustomDate";
import { basicInfoValidator } from "./InputValidator";

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
  const [error, setErrors] = useState({
    // Error messages for each key
    name: "",
    postalCode: "",
    addressLine1: "",
    addressLine2: "",
    birthday: "",
    gender: "",
  });

  const next = () => {
    const { valid, errorMessages } = basicInfoValidator({
      name,
      postalCode,
      addressLine1,
      addressLine2,
      gender,
      birthday,
    });

    setErrors(errorMessages);
    if (valid) navigation.navigate("health");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={commonStyles.title}>Basic Info</Text>
      <CustomInput
        errorMessage={error.name}
        placeholder="Name"
        value={name}
        onChange={(name) => onUpdate("name", name)}
        autoCapitalize="words"
      />
      <View style={styles.doubleInputContainer}>
        <CustomSelect
          errorMessage={error.gender}
          value={gender}
          onChange={(val) => onUpdate("gender", val)}
          placeholder="Gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Others", value: "others" },
          ]}
        />
        <CustomDate
          errorMessage={error.birthday}
          placeholder="Birthday"
          onChange={(currentDate) => onUpdate("birthday", currentDate)}
          value={birthday}
        />
      </View>
      <CustomInput
        errorMessage={error.postalCode}
        placeholder="Postal Code"
        onChange={(value) => onUpdate("postalCode", value)}
        keyboardType="numeric"
        value={postalCode}
      />
      <CustomInput
        errorMessage={error.addressLine1}
        placeholder="Block/Street Name"
        onChange={(value) => onUpdate("addressLine1", value)}
        value={addressLine1}
      />
      <CustomInput
        errorMessage={error.addressLine2}
        placeholder="Level/Unit Number"
        onChange={(value) => onUpdate("addressLine2", value)}
        value={addressLine2}
      />
      <View style={commonStyles.buttonRow}>
        <TouchableOpacity style={commonStyles.button} onPress={next}>
          <Text style={commonStyles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: "flex-end",
    flex: 1,
  },
});
