import React from "react";
import { 
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet
 } from "react-native";

export default function EnableError() {
     return (
        <View style={{padding:30, alignItems:"center"}}>
        <Text>ERROR:</Text>
        <Text>Please enable your location services and mobile data</Text>
        <TouchableOpacity style={styles.button}>
        <Text>Tap to change settings</Text>
        </TouchableOpacity>
      </View>
     );
 }

 const styles = StyleSheet.create({
    button: {
      height: "30%",
      width: "80%",
      borderRadius: 10,
      backgroundColor: "#C4C4C4"
      
    }
  })