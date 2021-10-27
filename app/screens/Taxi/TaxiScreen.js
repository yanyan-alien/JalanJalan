import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function TaxiScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{fontSize:30, textAlign:"center"}}>
        SMS has been sent{"\n"}Taxi will arrive shortly
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  licenseplate: {
    // flexDirection: 'column',
    flex: 2,
    // paddingTop: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  feature_box: {
    flex: 1,
    flexDirection: "row",
    alignContent: "flex-end",
  }})
