import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Health_listScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.feature_box}>
        <TouchableOpacity
          style={{
            backgroundColor: "#3FDCFF",
            justifyContent: "center",
            width: 1000,
            borderRadius: 24,
          }}
          onPress={() => navigation.navigate("HealthMap")}
        >
          <Text style={{ textAlign: "center", fontSize: 30 }}>
            Tap for Map View
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, marginTop: "10%" }}>
          (Directions by Google Maps)
        </Text>
      </View>
    </View>
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
  feature_box: {
    flex: 1,
    flexDirection: "row",
    alignContent: "flex-end",
  },
  pictures: {
    height: "30%",
    width: "100%",
    alignSelf: "center",
    resizeMode: "contain",
  },
});
