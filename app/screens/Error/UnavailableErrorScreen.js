import React from "react";
import { 
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet
 } from "react-native";

export default function UnavailableError() {
     return (
        <View style={{padding:30, alignItems:"center"}}>
        <Text>ERROR:</Text>
        <Text>No location services or mobile data available</Text>
        <TouchableOpacity 
             style={styles.button}
             onPress={() => navigation.navigate("HomeScreen")}
        >
        <Text>Return to Menu</Text>
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