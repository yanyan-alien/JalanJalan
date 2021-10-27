import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollVie,
  ScrollView,
} from "react-native";
import commonStyles from "./commonStyles";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";
import CustomInput from "./Components/CustomInput";

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function HealthInfoScreen({
  navigation,
  bloodType,
  medications,
  conditions,
  onUpdate,
}) {
  const errorMessage = "Not Selected";
  const [invalid, setInvalid] = useState(false);

  // For adding into state with immutability
  const modifyArr = (arr, i, value) => {
    const newArr = arr.slice(); // shallow copy
    newArr[i] = value;
    return newArr;
  };

  // For adding input elements
  const addNewCondition = () => {
    if (conditions[conditions.length - 1] == "") return;
    onUpdate("conditions", conditions.concat(""));
  };
  const addNewMedications = () => {
    if (medications[medications.length - 1] == "") return;
    onUpdate("medications", medications.concat(""));
  };

  const next = () => {
    const newInvalid = bloodType.length == 0;
    setInvalid(newInvalid);
    if (!newInvalid) navigation.navigate("contact");
  };

  return (
    <View style={styles.container}>
      <Text style={commonStyles.title}>Health Info</Text>
      <ScrollView>
        <View>
          {invalid && (
            <View style={[commonStyles.errorContainer, styles.errorContainer]}>
              <MaterialIcons name="error-outline" size={24} color="#B00020" />
              <Text style={commonStyles.errorMessage}>{errorMessage}</Text>
            </View>
          )}
          <View>
            <Image
              style={styles.floatingIcon}
              source={require("../../assets/blood-type.png")}
            ></Image>
            <View
              style={[
                commonStyles.textInput,
                styles.selectInput,
                invalid && commonStyles.textInput__error,
              ]}
            >
              <Picker
                selectedValue={bloodType}
                onValueChange={(itemValue) => onUpdate("bloodType", itemValue)}
                style={styles.selectInput}
                mode="dropdown"
              >
                <Picker.Item
                  label="Blood Type"
                  style={styles.selectLabel__placeholder}
                />
                {bloodTypes.map((v, i) => (
                  <Picker.Item
                    key={i}
                    label={v}
                    value={v}
                    style={styles.selectInput__label}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.medicationsContainer}>
          <Text style={styles.subtitle}>Medical Conditions</Text>
          <View>
            {conditions.map((c, i, arr) => (
              <CustomInput
                key={i}
                errorMessage=""
                value={c}
                placeholder="Condition"
                styleProps={styles.medicationsInput}
                onChange={(val) =>
                  onUpdate("conditions", modifyArr(arr, i, val))
                }
              />
            ))}
          </View>
          <TouchableOpacity onPress={addNewCondition}>
            <View style={styles.addButton}>
              <MaterialIcons
                name="add-circle-outline"
                size={24}
                color="black"
              />
              <Text style={{ marginLeft: 20 }}>Add Conditions</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.medicationsContainer}>
          <Text style={styles.subtitle}>Current Medications</Text>
          <View>
            {medications.map((m, i, arr) => (
              <CustomInput
                key={i}
                errorMessage=""
                value={m}
                placeholder="Condition"
                styleProps={styles.medicationsInput}
                onChange={(val) =>
                  onUpdate("medications", modifyArr(arr, i, val))
                }
              />
            ))}
          </View>
          <TouchableOpacity onPress={addNewMedications}>
            <View style={styles.addButton}>
              <MaterialIcons
                name="add-circle-outline"
                size={24}
                color="black"
              />
              <Text style={{ marginLeft: 20 }}>Add Medications</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={commonStyles.buttonRow}>
          <TouchableOpacity
            style={commonStyles.button}
            onPress={() => navigation.navigate("basic")}
          >
            <Text style={commonStyles.buttonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={commonStyles.button} onPress={next}>
            <Text style={commonStyles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginRight: 20,
  },
  selectInput__label: {
    fontSize: 24,
  },
  errorContainer: {
    paddingBottom: 5,
    paddingLeft: 40,
  },
  subtitle: {
    fontSize: 20,
    paddingBottom: 10,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  medicationsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 25,
  },
  medicationsInput: {
    fontSize: 20,
    padding: 13,
    paddingLeft: 20,
  },
  selectLabel__placeholder: {
    color: "#999999",
    fontSize: 20,
  },
});
