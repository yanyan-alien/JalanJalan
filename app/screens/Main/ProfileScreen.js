import React from "react";
import { StyleSheet, Text, View } from "react-native";

const name = "Tan Ah Kow";
const nextOfKinInfo = ["Tan Ah Beng", "+65 9123 45678"];
const conditions = ["High Blood Pressure", "Diabetes"];
const medication = ["Humulin", "Bumex"];
const bloodType = "B+";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, padding: "10%" }}>
      <Text style={{ fontSize: 36, fontWeight: "bold" }}>
        {name}
        {"\n"}
      </Text>
      <Text style={{ fontSize: 24 }}>
        Age: 72{"\n"}
        Blood Type: {bloodType}
        {"\n"}
      </Text>
      <Text style={{ fontSize: 24 }}>
        Medical conditions:{"\n"}
        {"\u2022"} {conditions[0]}
        {"\n"}
        {"\u2022"} {conditions[1]}
        {"\n"}
      </Text>
      <Text style={{ fontSize: 24 }}>
        Current Medication:{"\n"}
        {"\u2022"} {medication[0]}
        {"\n"}
        {"\u2022"} {medication[1]}
        {"\n"}
      </Text>
      <Text style={{ fontSize: 24 }}>
        Next-of-kin:{" "}
        <Text style={{ fontWeight: "bold" }}>{nextOfKinInfo[0]}</Text>
        {"\n"}
        Contact: <Text style={{ fontWeight: "bold" }}>{nextOfKinInfo[1]}</Text>
        {"\n"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    flex: 2,
    // paddingTop: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
