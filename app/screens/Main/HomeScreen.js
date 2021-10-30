import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal} from "react-native";
import * as SMS from 'expo-sms';
import * as Location from 'expo-location';
import {NetInfo, useNetInfo, state} from "@react-native-community/netinfo";

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState(false);
  let NetInfoSubscription = null;
  const handleConnectionChange = (state) => {
    setConnectionStatus(state.isConnected);
  };
  const [location, setLocation] = useState({latitude: 0, longitude: 0});
  const [errorMsg, setErrorMsg] = useState(null);
  const [postal, setPostal] = useState(111111);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        navigation.navigate("UnavailableError");
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Lowest});
      setLocation({latitude: location.coords.latitude, longitude: location.coords.longitude});
    
    })();
  }, []);

  fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + location.latitude + ',' +location.longitude + '&key=' + 'AIzaSyDBfr3UpO1f6iZngyvl5drfJb1tJ3ywVzY')
            .then((response) => response.json())
            .then((responseJson) => {
                let postal = responseJson.results[0].address_components[5].long_name;
                setPostal(postal);
              } )
  console.log(postal);

   function handleTaxi() {
    setTimeout(() => {
      navigation.navigate("Taxi");
      }, 5000);
    }
  async function handleSend() {
    const result = await SMS.sendSMSAsync('71222', 'BOOK ' + postal +' Pick Up/Drop off Point')
  }

  return (
    <View style={styles.centeredView}>   
      <View style={styles.container}>
        <View style={styles.feature_box}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#F8FFA5",
              justifyContent: "center",
              }}
            onPress={() => setModalVisible(true)}
            >
            <Text style={styles.textStyle}>TAXI</Text>
            <Image
              style={styles.pictures}
              source={require("../../assets/local_taxi.png")}
            ></Image>
          </TouchableOpacity>
          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={styles.modalPic}
              source={require("../../assets/local_taxi.png")}
            ></Image>
            <Text style={styles.modalText}>Need Taxi?</Text>
            <View style={styles.parent}>
              <TouchableOpacity
              style={[styles.buttonGreen]}
              onPress={() => setModalVisible(!modalVisible) ||handleTaxi() || handleSend() }
              >
              <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={[styles.buttonRed]}
              onPress={() => setModalVisible(!modalVisible)}
              >
              <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>  
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#A5EFFF",
            justifyContent: "center",
          }}
          onPress={() =>  {
            // setConnectionStatus(NetInfo.isConnected);
            console.log(connectionStatus)
            if(connectionStatus) navigation.navigate("HealthError")
            else navigation.navigate("Health")}
          }
        >
          <Text style={styles.textStyle}>HEALTH</Text>
          <Image
            style={styles.pictures}
            source={require("../../assets/health.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.feature_box}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#B1F698",
            justifyContent: "center",
          }}
          onPress={() => {
            if(connectionStatus) navigation.navigate("EnableError")
            else navigation.navigate("Food")
          }}
        >
          <Text style={styles.textStyle}>FOOD</Text>
          <Image
            style={styles.pictures}
            source={require("../../assets/restaurant.png")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "#FF9292",
            justifyContent: "center",
          }}
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
  rectangles: {
    flex: 1,
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22
  },
  modalView: {
    width: 250,
    height: 200,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonGreen: {
    borderRadius: 20,
    backgroundColor: "green",
    padding: 10,
    elevation: 2,
    marginRight:5,
  },
  buttonRed: {
    borderRadius: 20,
    backgroundColor: "red",
    padding: 10,
    elevation: 2,
    marginLeft:5,
  },
  parent: {
    flexDirection: "row",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 30,
  },
  modalPic: {
    height: 50,
    width: 50,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 25,
  },
  modalButtonText: {
    fontSize:15,
    color: "white"
  },
});
