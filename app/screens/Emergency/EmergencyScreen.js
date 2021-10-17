import React from "react";
import { 
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet
 } from "react-native";

export default function EmergencyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Click on the button you want to call</Text>
      <View style={styles.parent}>
      <TouchableOpacity style={styles.policeButton}>
        <Image source={require("../../assets/police.png")}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ambulanceButton}>
        <Image source={require("../../assets/ambulance.png")}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.manButton}>
        <Image source={require("../../assets/man.png")}/>
      </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
parent: {
  top: 50,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: 'center',
  padding:20,
},
policeButton: {
  padding:20,
},
ambulanceButton: {
  padding:20,
},
manButton: {
  padding:20,

},
});
