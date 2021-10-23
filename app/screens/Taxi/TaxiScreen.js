import React from "react";
import { Text, View } from "react-native";

export default function TaxiScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{fontSize:30, textAlign:"center"}}>
        SMS has been sent{"\n"}Taxi will arrive shortly
      </Text>
    </View>
  );
}
