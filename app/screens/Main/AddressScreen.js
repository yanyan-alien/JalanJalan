import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import { BasicInfoScreen } from "../Setup";
import AsyncStorage from "@react-native-async-storage/async-storage";

const name = "Tan Ah Kow";
const address = ["123 Chua Chu Kang Road", "#04-05", "S678910"];
const nextOfKinInfo = ["Tan Ah Beng", "+65 9123 45678"];

export default function AddressScreen({navigation}) {
  return (
    <View style={{ flex: 1, padding: "5%" , backgroundColor:"white"}}>

      <TouchableOpacity
         onPress={() => navigation.navigate("BasicInfoScreen")} //to fix
         style={{flexDirection:"row", justifyContent:"flex-end"}}
      >
        <Image
          source={require("../../assets/edit_button.png")}
          style={styles.editIcon}
        />
      </TouchableOpacity>

      <Text style={{ fontSize: 36, fontWeight: "bold" }}>{name}</Text>
      <View style={{ paddingVertical: "10%" }}>
        <Text style={{ fontSize: 36 }}>{address[0]}</Text>
        <Text style={{ fontSize: 36 }}>{address[1]}</Text>
        <Text style={{ fontSize: 36 }}>{address[2]}</Text>
      </View>
      <Text style={{ fontSize: 30 }}>
        If I require assistance, call: {"\n"}
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
  editIcon: {
    height: 40,
    width: 40,
  },
});
