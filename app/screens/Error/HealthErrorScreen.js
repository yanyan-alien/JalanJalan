import React from "react";
import { 
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet
 } from "react-native";

export default function HealthError() {
    return(
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
         Error
        </Text>
      </View>
      </View>

        )};


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
          