import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import getDirections from 'react-native-google-maps-directions';

export default function Health_listScreen({ navigation }) {


  handleGetDirections = () => {
    const data = {
       source: {
        latitude:  1.3483,
        longitude: 103.6831
      },
      destination: {
        latitude: 1.29113483647707,
        longitude: 103.826764453903
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
    }
 
    getDirections(data)
  }


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
        <TouchableOpacity
          style={{
            backgroundColor: "#3FDCFF",
            justifyContent: "center",
            width: 1000,
            borderRadius: 24,
          }}
          onPress={this.handleGetDirections}
        >
          <Text style={{ textAlign: "center", fontSize: 30 }}>
            Tap for Google Maps
          </Text>
        </TouchableOpacity>
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
