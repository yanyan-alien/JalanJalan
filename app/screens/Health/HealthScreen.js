import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HealthScreen({ navigation }) {
  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 36,
            fontWeight: "bold",
            marginTop: "10%",
            marginRight: "30%",
          }}
        >
          Nearest Clinics:
        </Text>
      </View>

      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, marginTop: "10%" }}>
          1. (Name of hospital)
        </Text>
      </View>

      <View style={styles.feature_box}>
        <TouchableOpacity
          style={{
            backgroundColor: "#3FDCFF",
            justifyContent: "center",
            width: 350,
            borderRadius: 24,
          }}
          onPress={() => navigation.navigate("HealthList")}
        >
          <Text style={{ textAlign: "center", fontSize: 30 }}>Directions</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, marginTop: "10%" }}>
          2. (Name of polyclinic)
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.feature_box}>
          <TouchableOpacity
            style={{
              backgroundColor: "#3FDCFF",
              justifyContent: "center",
              width: 350,
              borderRadius: 24,
            }}
            onPress={() => navigation.navigate("HealthList")}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>
              Directions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}></View>

      <View
        style={{
          flex: 1.1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.feature_box}>
          <TouchableOpacity
            style={{
              backgroundColor: "#6FBAFF",
              justifyContent: "center",
              width: 350,
              borderRadius: 24,
            }}
            onPress={() => navigation.navigate("Reminder")}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>REMINDERS</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.1 }}></View>
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
