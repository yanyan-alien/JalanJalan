import React from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image } from "react-native";

const name = "Tan Ah Kow";
const nextOfKinInfo = ["Tan Ah Beng", "+65 9123 45678"];
const conditions = ["High Blood Pressure", "Diabetes"];
const medication = ["Humulin", "Bumex"];
const bloodType = "B+";

export default function ProfileScreen({navigation}) {
  return (
    <ScrollView style={{ flex: 1, padding: "5%" , backgroundColor:"white"}}>

      <TouchableOpacity
         onPress={() => navigation.navigate("BasicInfoScreen")} //to fix
         style={{flexDirection:"row", justifyContent:"flex-end"}}
      >
        <Image
          source={require("../../assets/edit_button.png")}
          style={styles.editIcon}
        />
      </TouchableOpacity>

      <Text style={{ fontSize: 36, fontWeight: "bold" }}>
        {name}
        {"\n"}
      </Text>
      <Text style={styles.normalText}>
        Age: 72{"\n"}
        Blood Type: {bloodType}
        {"\n"}
      </Text>
      <Text style={styles.normalText}>
        Medical conditions:{"\n"}
        {"\u2022"} {conditions[0]}
        {"\n"}
        {"\u2022"} {conditions[1]}
        {"\n"}
      </Text>
      <Text style={styles.normalText}>
        Current Medication:{"\n"}
        {"\u2022"} {medication[0]}
        {"\n"}
        {"\u2022"} {medication[1]}
        {"\n"}
      </Text>
      <Text style={styles.normalText}>
        Next-of-kin:{" "}
        <Text style={{ fontWeight: "bold" }}>{nextOfKinInfo[0]}</Text>
        {"\n"}
        Contact: <Text style={{ fontWeight: "bold" }}>{nextOfKinInfo[1]}</Text>
        {"\n"}
      </Text>
    </ScrollView>
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
  normalText: {
    fontSize:30,
  }
});
