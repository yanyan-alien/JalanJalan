import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal} from "react-native";
import * as SMS from 'expo-sms';
import * as Location from 'expo-location';

export default function TaxiScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [location, setLocation] = useState({latitude: 0, longitude: 0});
  const [errorMsg, setErrorMsg] = useState(null);
  const [postal, setPostal] = useState(111111);

   function handleTaxi() {
    setTimeout(() => {
      navigation.navigate("Taxi");
      }, 8000);
    }
  async function handleSend() {
    const result = await SMS.sendSMSAsync('71222', 'BOOK ' + postal +' Pick Up/Drop off Point')
  }
  
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

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
              onPress={() => setModalVisible(!modalVisible) || navigation.navigate("HomeScreen")}
              >
              <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>  
    </View>
  );
}

const styles = StyleSheet.create({
  licenseplate: {
    // flexDirection: 'column',
    flex: 2,
    // paddingTop: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
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
    }
  },
  feature_box: {
    flex: 1,
    flexDirection: "row",
    alignContent: "flex-end",
  }});
