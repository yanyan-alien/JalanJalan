import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity, Image, FlatList, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

function listing({i}) {
  if(conditionData.length==0)
  return(
    <FlatList 
            style={{ marginBottom:"5%"}}
            data={i}
            renderItem={({item}) => <Text style={[styles.normalText, {textTransform:"capitalize"}]}>{"\u2022"} {item}</Text>}
          />
  )
}

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
      // to get medication and conditions in array form, have to slice away [ and ] from the strings, replace all " and split it
      let con_test = con.slice(1, -1).replace(/"/g,'').split(",");
      let med_test = med.slice(1, -1).replace(/"/g,'').split(",");
      // to just get the year of birth slice the front 4 char and convert it to number format
      let bir_test = Number(bir.slice(0,4));
      setBirthdayData(bir_test)
      setMedicationData(med_test);
      setConditionData(con_test);
    }
    fetchFromStorage();
  }, []);
  let age = 2021 - birthdayData;
  return (
    // scrollview to allow user to scroll
    <ScrollView style={{ flex: 1, padding: "5%" , backgroundColor:"white"}}>

      {/* view for name and edit icon */}
      <View style={{flexDirection:"row", paddingBottom:"5%", justifyContent:"space-between"}}>
        <Text style={{ fontSize: 36, fontWeight: "bold", textTransform:"capitalize",}}>
          {nameData.name}
        </Text>

        {/* edit icon */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SETUP')}
        >
          <Image
            source={require("../../assets/edit_button.png")}
            style={[styles.editIcon, ]}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.normalText}>
        Age: {age}{"\n"}
        Blood Type: {bloodData.bloodType}{"\n"}
      </Text>
      <Text style={styles.normalText}>
        Medical conditions:
      </Text>
      {/* condition flatlist */}
      <View>
          <FlatList 
          style={{ marginBottom:"5%"}}
          data={conditionData}
          renderItem={({item}) => <Text style={[styles.normalText, {textTransform:"capitalize"}]}>{"\u2022"} {item}</Text>}
        />
      </View>
      
        <Text style={styles.normalText}>Current Medication:</Text>
        <View>
          {/* medication flatlist */}
          <FlatList 
            style={{ marginBottom:"5%"}}
            data={medicatonData}
            extraData={medicatonData.state}
            renderItem={({item}) => <Text style={[styles.normalText, {textTransform:"capitalize"}]}>{"\u2022"} {item}</Text>}
          />
        </View>

      {/* next of kin information */}
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
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  normalText: {
    fontSize:30,
  },
  editIcon: {
    height: 40,
    width: 40,
  },
});
