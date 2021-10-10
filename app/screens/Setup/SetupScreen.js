import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import ProgressBar from "./ProgressBar";

export default function SetupScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.globeContainer}>
        <Feather name="globe" size={25} color="#001A72" />
      </View>
      <ProgressBar steps={5} currentStep={0} />
      <View style={styles.languageContainer}>
        <Text style={styles.languageLabel}>English</Text>
        <Text style={styles.languageLabel}>中文</Text>
        <Text style={styles.languageLabel}>தமிழ்</Text>
        <Text style={[styles.languageLabel, styles.languageLabel__small]}>
          bahasa melayu
        </Text>
      </View>
      <View style={[styles.globeContainer, styles.globeContainer__center]}>
        <Feather name="globe" size={24} color="#001A72" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 10,
  },
  globeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  globeContainer__center: {
    justifyContent: "center",
  },
  languageContainer: {
    marginTop: 60,
  },
  languageLabel: {
    fontSize: 64,
    fontWeight: "700",
    paddingBottom: 5,
  },
  languageLabel__small: {
    fontSize: 48,
  }
});
