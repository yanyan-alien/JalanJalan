import React,
{ useCallback } from "react";
import { 
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
 } from "react-native";

 const OpenSettingsButton = () => {
  const handlePress = useCallback(async () => {
    // Open the custom settings if the app has one
    await Linking.openSettings();
  }, []);

  return (
    <View style={styles.feature_box}>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
      >
        <Text style={{ textAlign: "center", fontSize: 30 }}>Tap to change Settings</Text>
      </TouchableOpacity>
    </View>
  )

};

export default function EnableError() {
     return (
       //view container
      <View style={styles.container}>

        {/* text container */}
        <View style={styles.textContainer}>
          <Text style={[styles.textStyle, {marginBottom: "10%", fontWeight:"bold"}]}>ERROR:</Text>
          <Text style={styles.textStyle}>Please enable your location services and mobile data</Text>
        </View>
        {/* settings button */}
        <OpenSettingsButton/>
      <View style={{ flex: 0.1 }}></View>

  </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    display:"flex",
    flexDirection:"column",

    //to try out this
    // paddingHorizontal:"10%",
    alignItems:"center",
    backgroundColor: "white",
  },

  button: {
    backgroundColor: "#C4C4C4",
    justifyContent: "center",
    width: 350,
    borderRadius: 24,
  },

  textStyle: {
    fontSize:36,
    textAlign:"center",
  }, 

  textContainer: {
    justifyContent:"center",
    flex:7,
  },

  feature_box: {
    flex: 0.85,
    flexDirection: "row",
    // alignContent: "flex-end",
  },
})