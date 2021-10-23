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
          

          <View style={{flex:7, justifyContent:"center", alignContent:"center"}}>
            <Text style={[styles.textStyle, {fontWeight:"bold", marginBottom:"5%"}]}>
              Error:
            </Text>
            <Text style={styles.textStyle}>
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
        <View style={{ flex: 0.12 }}></View>
      </View>

        )};


        const styles = StyleSheet.create({
            container: {
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
            textStyle: {
              fontSize:36,
              textAlign:"center",
            }, 
          });
          