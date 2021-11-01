import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";


export default function HomeScreen({ navigation }) {
  return (
         
      <View style={styles.container}>

        {/* feature box to contain top row rectangles */}
        <View style={styles.feature_box}>

          {/* Taxi rectangle */}
          <TouchableOpacity
            style={[styles.rectangles, {backgroundColor: "#F8FFA5"}]}
            // navigating to TaxiScreen 
            onPress={() => navigation.navigate("Taxi")}
            >
            <Text style={styles.textStyle}>TAXI</Text>
            <Image
              style={styles.pictures}
              source={require("../../assets/local_taxi.png")}
            ></Image>
          </TouchableOpacity>
        
        {/* Health rectangle */}
        <TouchableOpacity
          style={[styles.rectangles, {backgroundColor: "#A5EFFF"}]}
          // navigating to HealthScreen
          onPress={() =>  {navigation.navigate("Health")}}
        >
          <Text style={styles.textStyle}>HEALTH</Text>
          <Image
            style={styles.pictures}
            source={require("../../assets/health.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      {/* feature box for second row on the screen, containing Food and Emergency*/}
      <View style={styles.feature_box}>

        {/* Food rectangle */}
        <TouchableOpacity
          style={[styles.rectangles, {backgroundColor: "#B1F698"}]}
          // navigating to FoodScreen
          onPress={() => {navigation.navigate("Food")}}
        >
          <Text style={styles.textStyle}>FOOD</Text>
          <Image
            style={styles.pictures}
            source={require("../../assets/restaurant.png")}
          ></Image>
        </TouchableOpacity>

        {/* Emergency rectangle */}
        <TouchableOpacity
          style={[styles.rectangles, {backgroundColor: "#FF9292"}]}
          // navigating to EmergencyScreen
          onPress={() => navigation.navigate("Emergency")}
        >
          <Text style={styles.textStyle}>EMERGENCY</Text>
          <Image
            style={styles.pictures}
            source={require("../../assets/emergency.png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 2,
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
  textStyle: {
    textAlign: "center",
    fontSize: 25,
  },
  rectangles: {
    flex: 1,
    justifyContent: "center",
  }
});
