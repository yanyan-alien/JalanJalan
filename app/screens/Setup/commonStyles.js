import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    flex: 1
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    padding: 25,
  },
  textInput: {
    padding: 24,
    borderWidth: 1,
    borderRadius: 26,
    fontSize: 22,
    marginBottom: 22,
  },
  button: {
    width: 120,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#C4C4C4",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 20,
  },
  errorMessage: {
    color: "#B00020",
    paddingLeft: 4,
  },
  errorContainer: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 5,
    paddingLeft: 20,
    alignItems: "center",
  },
  textInput__error: {
    borderColor: "#B00020",
  },
});

export default styles;
