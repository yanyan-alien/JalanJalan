import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from "react-native-geolocation-service";
import hawker from "./hawker.json";
import supermarkets from "./supermarkets.json";
import *  as Permissions from 'expo-permissions';
import getDirections from 'react-native-google-maps-directions';

export default function Food_MapScreen({ navigation , route}) {

  //latitude: 1.3483, longitude:103.6831 (NTU)
  //latitude: 1.3417, longitude:103.7759 (Beauty world)
  //latitude: 1.3508, longitude:103.8723 (NEX)


   let choice = null;
   if (route.params != undefined)
   {
     choice = route.params.choice;
   }
 
   const [location, setLocation] = useState( null);
   const [errorMsg, setErrorMsg] = useState(null);
   const [postal, setPostal] = useState("loading");

 
   useEffect(() => {
     (async () => {

       let { status } = await Location.requestForegroundPermissionsAsync();

       if (status !== 'granted') {
         navigation.navigate("EnableError")
         setErrorMsg('Permission to access location was denied');
         return;
       }
       

       let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Lowest});

       setLocation({latitude: location.coords.latitude, longitude: location.coords.longitude});
     })();
   }, []);


  const LATITUDE_DELTA = 0.008000;
  const LONGITUDE_DELTA = 0.008000;
  const destination = {latitude: 1.357371, longitude: 103.765726};
  const GOOGLE_MAPS_APIKEY = 'AIzaSyDBfr3UpO1f6iZngyvl5drfJb1tJ3ywVzY';




  if (choice == 1 && location != null)
  {
    let difference2 = 1;
    for (let index = 0; index < hawker.features.length; index++) {
        let difference = Math.abs(location.latitude - hawker.features[index].geometry.coordinates[1]) + 
          Math.abs(location.longitude- hawker.features[index].geometry.coordinates[0])
        if (difference<0.05 && (difference)<difference2)
        {
            difference2 = difference;
            destination.latitude = hawker.features[index].geometry.coordinates[1];
            destination.longitude = hawker.features[index].geometry.coordinates[0];
        }
      
    }
  }
  else if (choice == 3 && location != null)
  {
    let difference2 = 1;
    for (let index = 0; index < supermarkets.features.length; index++) {
        let difference =  Math.abs(location.latitude - supermarkets.features[index].geometry.coordinates[1]) + 
          Math.abs(location.longitude- supermarkets.features[index].geometry.coordinates[0])
        if (difference>-0.01 && difference<0.01 && difference<difference2)
        {
            difference2 = difference;
            destination.latitude = supermarkets.features[index].geometry.coordinates[1];
            destination.longitude = supermarkets.features[index].geometry.coordinates[0];
        }
  }
  }


  fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + destination.latitude + ',' +destination.longitude + '&key=' + 'AIzaSyDBfr3UpO1f6iZngyvl5drfJb1tJ3ywVzY')
  .then((response) => response.json())
  .then((responseJson) => {
      let postal = responseJson.results[0].formatted_address;

      setPostal(postal);
    } )


  const handleGetDirections = () => { //For Google Maps
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




  return ( 
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.feature_box}>
        <TouchableOpacity
          style={{
            backgroundColor: "#B1F698",
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
      {location ?
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
          color = {"blue"}
           />
          <MapView.Marker 
          coordinate={destination}
          title = {"end"}
           />
        </MapView> : <Text> Loading </Text>}
        {location?
        <View>
          <Text style={{ textAlign: "center", fontSize: 30 }}>
            {postal}
          </Text> 
        </View>: <Text>Loading</Text>}
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
