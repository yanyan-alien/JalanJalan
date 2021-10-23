import React from "react";
import { 
  Text,
  View,
  TouchableOpacity,
  StyleSheet
 } from "react-native";

export default function HealthError({ navigation }) {
    return(
        <View style={[styles.container, { flexDirection: "column"}]}>
        <View style={{flex:6}}>

        <Text style={{ fontSize: 30, marginTop: "10%", textAlign:"center"}}>
            <Text style={{fontWeight:"bold"}}>Error:{"\n"}</Text>
            Location services not available
        </Text>
        </View>
        <View style={styles.feature_box}>
          <TouchableOpacity
            style={{
              backgroundColor: "#6FBAFF",
              justifyContent: "center",
              width: 350,
              borderRadius: 24,
            }}
            onPress={() => navigation.navigate("ReminderMain")}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>REMINDERS</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.1 }}></View>
      </View>

        )};


        const styles = StyleSheet.create({
            container: {
              // flexDirection: 'column',
              flex: 2,
              paddingHorizontal: 20,
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
          