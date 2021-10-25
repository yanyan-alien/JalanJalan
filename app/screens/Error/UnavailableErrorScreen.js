import React from "react";
import { 
  Text,
  View,
  TouchableOpacity,
  StyleSheet
 } from "react-native";

export default function UnavailableError({navigation}) {
     return (
        <View style={styles.container}>

          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, {marginBottom: "10%", fontWeight:"bold"}]}>ERROR:</Text>
            <Text style={styles.textStyle}>No location services or mobile data available</Text>
          </View>

          <View style={styles.feature_box}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Text style={{ textAlign: "center", fontSize: 30 }}>Return to Menu</Text>
            </TouchableOpacity>
        </View>

        <View style={{ flex: 0.12 }}></View>

      </View>
     );
 }

 const styles = StyleSheet.create({

    container: {
      flex:1,
      display:"flex",
      flexDirection:"column",
      paddingHorizontal:"10%",
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
      flex: 1,
      flexDirection: "row",
      alignContent: "flex-end",
    },
  })