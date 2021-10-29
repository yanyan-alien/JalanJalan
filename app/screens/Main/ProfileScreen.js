import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image, FlatList, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function ProfileScreen({navigation}) {
  const [nokData, setNokData] = useState({  nokName: '', nokNumber: '' });
  const [nameData, setNameData] = useState({name:""});
  const [bloodData, setbloodData] = useState({bloodType:""})
  const [medicatonData, setMedicationData] = useState([])
  const [conditionData, setConditionData] = useState([])
  const [birthdayData, setBirthdayData] = useState("");

  useEffect(() => {
    async function fetchFromStorage() {
      let stateArr = await AsyncStorage.multiGet(["nokName", "nokNumber", "name", "bloodType"]);
      stateArr = stateArr.map(([key, value]) => [
        key,
        value == null ? "" : value,
      ]); // Default to empty string
      setNokData(Object.fromEntries(stateArr));
      setNameData(Object.fromEntries(stateArr));
      setbloodData(Object.fromEntries(stateArr));
      let med = await AsyncStorage.getItem("medications");
      let con = await AsyncStorage.getItem("conditions");
      let bir = await AsyncStorage.getItem("birthday");
      let con_test = con.slice(1, -1).replace(/"/g,'').split(",");
      let med_test = med.slice(1, -1).replace(/"/g,'').split(",");
      // console.log(med_test);
      // console.log(con_test);
      let bir_test = Number(bir.slice(0,4));
      console.log(bir_test);
      setBirthdayData(bir_test)
      setMedicationData(med_test);
      setConditionData(con_test);
    }
    fetchFromStorage();
  }, []);

  return (
    <ScrollView style={{ flex: 1, padding: "5%" , backgroundColor:"white"}}>

      <TouchableOpacity
         onPress={() => navigation.navigate('SETUP', { screen: 'basic' })} //to fix
         style={{flexDirection:"row", justifyContent:"flex-end"}}
      >
        <Image
          source={require("../../assets/edit_button.png")}
          style={styles.editIcon}
        />
      </TouchableOpacity>

      <Text style={{ fontSize: 36, fontWeight: "bold", textTransform:"capitalize" }}>
        {nameData.name}
        {"\n"}
      </Text>
      <Text style={styles.normalText}>
        Age: {2021-birthdayData}{"\n"}
        Blood Type: {bloodData.bloodType}{"\n"}
      </Text>
      <Text style={styles.normalText}>
        Medical conditions:
      </Text>
      <View>
          <FlatList 
            style={{ marginBottom:"5%"}}
            data={conditionData}
            renderItem={({item}) => <Text style={[styles.normalText, {textTransform:"capitalize"}]}>{"\u2022"} {item}</Text>}
          />
      </View>
      
        <Text style={styles.normalText}>Current Medication:</Text>
        <View>
          <FlatList 
            style={{ marginBottom:"5%"}}
            data={medicatonData}
            renderItem={({item}) => <Text style={[styles.normalText, {textTransform:"capitalize"}]}>{"\u2022"} {item}</Text>}
          />
        </View>

      <Text style={styles.normalText}>
        Next-of-kin:{" "}
        <Text style={{ fontWeight: "bold", textTransform:"capitalize" }}>{nokData.nokName}</Text>
        {"\n"}
        Contact: <Text style={{ fontWeight: "bold" }}>{nokData.nokNumber}</Text>
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
