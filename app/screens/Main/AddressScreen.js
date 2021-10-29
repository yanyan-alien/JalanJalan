import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { BasicInfoScreen } from "../Setup";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddressScreen({navigation}) {
   const [nokData, setNokData] = useState({  nokName: '', nokNumber: '' });
   const [addressData, setAddressData] = useState({addressLine1:"", addressLine2:"", postalCode:""})
   const [nameData, setNameData] = useState({name:""})

  useEffect(() => {
    async function fetchFromStorage() {
      let stateArr = await AsyncStorage.multiGet(["nokName", "nokNumber", "addressLine1", "addressLine2", "postalCode", "name"]);
      stateArr = stateArr.map(([key, value]) => [
        key,
        value == null ? "" : value,
      ]); // Default to empty string
      setNokData(Object.fromEntries(stateArr));
      setAddressData(Object.fromEntries(stateArr));
      setNameData(Object.fromEntries(stateArr));
    }
    fetchFromStorage();
  }, []);
  return (
    <View style={{ flex: 1, padding: "5%" , backgroundColor:"white"}}>

      <TouchableOpacity
         onPress={() => navigation.navigate('SETUP', { screen: 'basic' }) } //to fix
         style={{flexDirection:"row", justifyContent:"flex-end"}}
      >
        <Image
          source={require("../../assets/edit_button.png")}
          style={styles.editIcon}
        />
      </TouchableOpacity>

      <Text style={{ fontSize: 36, fontWeight: "bold", textTransform:"capitalize", }}>{nameData.name}</Text>
      <View style={{ paddingVertical: "10%" }}>
        <Text style={{ fontSize: 36,  textTransform:"capitalize"}}>{addressData.addressLine1}</Text>
        <Text style={{ fontSize: 36,  textTransform:"capitalize"}}>{addressData.addressLine2}</Text>
        <Text style={{ fontSize: 36 }}>{addressData.postalCode}</Text>
      </View>
      <Text style={{ fontSize: 30 }}>
        If I require assistance, call: {"\n"}
        Next-of-kin:{" "}
        <Text style={{ fontWeight: "bold" , textTransform:"capitalize"}}>{nokData.nokName}</Text>
        {"\n"}
        Contact: <Text style={{ fontWeight: "bold" }}>{nokData.nokNumber}</Text>
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
