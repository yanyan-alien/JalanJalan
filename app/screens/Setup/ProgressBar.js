import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ProgressBar(props) {
  const steps = props.steps * 2;
  const currentStep = props.currentStep * 2 - 2;
  return (
    <View style={styles.progressContainer}>
      {[...Array(steps)].map((_, i) =>
        i % 2 ? (
          i < steps - 1 && (
            <View
              key={i}
              style={[
                styles.progressBetweenBar,
                i > currentStep && styles.progress__disabled,
              ]}
            />
          )
        ) : (
          <View
            style={[
              styles.progressItem,
              i > currentStep && styles.progress__disabled,
            ]}
            key={i}
          >
            <Text style={styles.progressItemText}>{i / 2 + 1}</Text>
          </View>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  progressItem: {
    backgroundColor: "#000",
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  progress__disabled: {
    backgroundColor: "#ddd",
  },
  progressItemText: {
    color: "#fff",
    fontSize: 18,
  },
  progressBetweenBar: {
    width: 20,
    height: 3,
    backgroundColor: "#000",
  },
});
