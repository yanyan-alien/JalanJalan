import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function TaxiScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SHA 1234 B</Text>
      <Text> Pick up point: Junction 8 L1 Drop off/Pick up Point</Text>
      <TouchableOpacity>
        <Text> Call Driver</Text>
      </TouchableOpacity>
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
