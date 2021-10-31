import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from "react-native-geolocation-service";
import clinics from "./clinic-data.json";
import hospital from "./hospital-data.json";
import *  as Permissions from 'expo-permissions';
import getDirections from 'react-native-google-maps-directions';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyDBfr3UpO1f6iZngyvl5drfJb1tJ3ywVzY');


export default function Health_MapScreen({ navigation, route }){


  let choice = null;
  if (route.params != undefined)                      // If choice is 1 == Clinic, If choice is 3 == Hospital
  {
    choice = route.params.choice;
  }
  const [location, setLocation] = useState(null);     // Stores current location
  const [errorMsg, setErrorMsg] = useState(null);
  const [postal, setPostal] = useState("loading");    // Stores destination description


  useEffect(() => {                                   // Used to check for location services and current location
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        navigation.navigate("HealthError");
        setErrorMsg('Permission to access location was denied');
        return;
      }
      
      let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Lowest});


      setLocation({latitude: location.coords.latitude, longitude: location.coords.longitude})

    })();
  }, []);

  
  //latitude: 1.3483, longitude:103.6831 (NTU)
  //latitude: 1.3417, longitude:103.7759 (Beauty world)
  //latitude: 1.3508, longitude:103.8723 (NEX)

  const LATITUDE_DELTA = 0.008000;
  const LONGITUDE_DELTA = 0.008000;
  const destination = {latitude: 1.3012, longitude: 103.8571};  

  if (choice == 1 && location != null)                          // Find nearest clinic if current location found
  {
    let difference2 = 1;
    for (let index = 0; index < clinics.features.length; index++) {
        let difference = Math.abs(location.latitude - clinics.features[index].geometry.coordinates[1]) + 
          Math.abs(location.longitude- clinics.features[index].geometry.coordinates[0])
        if (difference<0.5 && difference<difference2)
        {
            difference2 = difference;
            destination.latitude = clinics.features[index].geometry.coordinates[1];
            destination.longitude = clinics.features[index].geometry.coordinates[0];
        }
      
    }
  }
  else if ( choice == 3 && location != null)                    // Find nearest hospital if current location found
  {
    let difference2 = 1;
    for (let index = 0; index < hospital.hospitals.length; index++) {
        let difference = Math.abs(location.latitude - hospital.hospitals[index].coor[1]) + 
        Math.abs(location.longitude- hospital.hospitals[index].coor[0])
        if (difference<0.5 && difference<difference2)
        {
            difference2 = difference;
            destination.latitude = hospital.hospitals[index].coor[1];
            destination.longitude = hospital.hospitals[index].coor[0];
        }
      
    }
  }
  
  fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + destination.latitude + ',' +destination.longitude + '&key=' + 'AIzaSyDBfr3UpO1f6iZngyvl5drfJb1tJ3ywVzY')
  .then((response) => response.json())
  .then((responseJson) => {
      let postal = responseJson.results[0].formatted_address;

      setPostal(postal);                                         // Destination description
    } )


  const handleGetDirections = () => {                            // Google Maps handler
    const data = {
       source: {
        latitude:  location.latitude,
        longitude: location.longitude
      },
      destination: {
        latitude: destination.latitude,
        longitude: destination.longitude
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
    }
 
    getDirections(data)
  }
  
  
  

  //const GOOGLE_MAPS_APIKEY = process.env.REACT_APP_GOOGLE_MAPS_APIKEY;
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDBfr3UpO1f6iZngyvl5drfJb1tJ3ywVzY';

  return ( 
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.feature_box}>
        <TouchableOpacity         //Use to go to Google Maps
          style={{                                                           
            backgroundColor: "#3FDCFF",
            justifyContent: "center",
            width: 1000,
            borderRadius: 24,
          }}
          onPress={handleGetDirections}
        >
          <Text style={{ textAlign: "center", fontSize: 30 }}>
            Tap for Google Maps
          </Text>
        </TouchableOpacity>
      </View>
      {location ?       //If location found, display map
        <MapView
        style={{ 
          flex: 11,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height - 180}}
          initialRegion ={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }}
        >
          <MapViewDirections
          origin={location}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          mode= {"WALKING"}
          strokeWidth={4}
          strokeColor = {"red"}
          lineDashPattern={[0]}
          />
          <MapView.Marker 
          coordinate={location}
          title ={"Start"}
          pinColor = {"green"}
           />
          <MapView.Marker 
          coordinate={destination}
          title = {"end"}
           />
        </MapView> : <Text style = {{flex:9,  fontSize:70 ,textAlign: 'center', marginTop: 200,}}> Loading... </Text>}
        {location?
        <View>
          <Text style={{ textAlign: "center", fontSize: 30 }}>
            {postal}
          </Text> 
        </View>: <Text style={{flex:1}}>Loading</Text>}
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
});
