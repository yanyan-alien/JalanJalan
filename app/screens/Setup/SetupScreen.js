import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import ProgressBar from "./ProgressBar";
import SetupNavigator from "./SetupNavigator";

const setupRoutes = ["language", "basic", "health", "emergency", "review"];

export default function SetupScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.globeContainer}>
        <Feather name="globe" size={25} color="#001A72" />
      </View>
      <ProgressBar steps={setupRoutes.length} currentStep={currentStep + 1} />
      <SetupNavigator onNavigate={setCurrentStep} />
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
  },
});
