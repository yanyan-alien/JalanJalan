import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function FoodScreen({ navigation }) {
  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={styles.feature_box}>
        <TouchableOpacity
          style={{
            backgroundColor: "#B1F698",
            justifyContent: "center",
            width: 350,
            borderRadius: 24,
            top: "20%",
          }}
          onPress={() => navigation.navigate("FoodMap", {choice : 1})}
        >
          <Text style={{ textAlign: "center", fontSize: 30 }}>
            Coffeeshop/Hawker Centre
          </Text>
        </TouchableOpacity>
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
              backgroundColor: "#B1F698",
              justifyContent: "center",
              width: 350,
              borderRadius: 24,
              top: "40%",
            }}
            onPress={() => navigation.navigate("FoodMap", {choice : 3})}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>
              Supermarket
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
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
