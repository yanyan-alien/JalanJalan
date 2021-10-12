import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function LanguageScreen({ navigation }) {
  return (
    <View>
      <View style={styles.languageContainer}>
        <Text
          style={styles.languageLabel}
          onPress={() => navigation.navigate("basic")}
        >
          English
        </Text>
        <Text style={styles.languageLabel}>中文</Text>
        <Text style={styles.languageLabel}>தமிழ்</Text>
        <Text style={[styles.languageLabel, styles.languageLabel__small]}>
          bahasa melayu
        </Text>
      </View>
      <View style={styles.globeContainer__center}>
        <Feather name="globe" size={24} color="#001A72" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  globeContainer__center: {
    flexDirection: "row",
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
