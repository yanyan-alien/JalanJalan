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


export default function Health_MapScreen({ navigation, route }){

  //const {choice} = route.params;
  let choice = null;
  if (route.params != undefined)
  {
    choice = route.params.choice;
  }
  console.log(choice);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const origin = {latitude: 1.3483, longitude:103.6831};

  useEffect(() => {
    (async () => {
      //console.log("Hello!");
      let { status } = await Location.requestForegroundPermissionsAsync();
      //console.log(status);
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      
      //let location = await Location.getCurrentPositionAsync({});
      //Location.getCurrentPositionAsync({}).catch(err => console.log(err));
      let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Lowest});
      console.log(location);
      //origin.latitude = location.coords.latitude;
      //origin.longitude = location.coords.longitude;
      //console.log(origin);  //Cant store this values
      //setLocation(location);
    })();
  }, []);
  
  //console.log(origin);

  //latitude: 1.3483, longitude:103.6831 (NTU)
  //latitude: 1.3417, longitude:103.7759 (Beauty world)
  //latitude: 1.3508, longitude:103.8723 (NEX)

  //const origin = {latitude: location.coor.latitude, longitude:location.coor.longitude};
  const LATITUDE_DELTA = 0.008000;
  const LONGITUDE_DELTA = 0.008000;
  const destination = {latitude: 1.3012, longitude: 103.8571};

  if (choice == 1)
  {
    let difference2 = 1;
    for (let index = 0; index < clinics.features.length; index++) {
        let difference = (origin.latitude - clinics.features[index].geometry.coordinates[1]) + 
              (origin.longitude- clinics.features[index].geometry.coordinates[0])
        if (difference>-0.005 && difference<0.005 && difference<difference2)
        {
            difference2 = difference;
            destination.latitude = clinics.features[index].geometry.coordinates[1];
            destination.longitude = clinics.features[index].geometry.coordinates[0];
        }
      
    }
  }
  else
  {
    let difference2 = 1;
    for (let index = 0; index < hospital.hospitals.length; index++) {
        let difference = (origin.latitude - hospital.hospitals[index].coor[1]) + 
              (origin.longitude- hospital.hospitals[index].coor[0])
        if (difference>-0.05 && difference<0.05 && difference<difference2)
        {
            difference2 = difference;
            destination.latitude = hospital.hospitals[index].coor[1];
            destination.longitude = hospital.hospitals[index].coor[0];
        }
      
    }
  }
  


  const handleGetDirections = () => {
    const data = {
       source: {
        latitude:  origin.latitude,
        longitude: origin.longitude
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



  /*const [latitude, setLatitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);


  React.useEffect(() => {
    Geolocation.setRNConfiguration(config);
    Geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude= position.coords.longitude;
  
        setLongitude(longitude);
        setLatitude(latitude);
      },
    (error) => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
   );
  })*/
  
  
  

  const GOOGLE_MAPS_APIKEY = 'AIzaSyA0kXRrclRwf4YehX347dpDUqZH3H1BovU';

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.feature_box}>
        <TouchableOpacity
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
        <MapView
        style={{ 
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height - 180}}
          initialRegion ={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }}
        >
          <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          mode= {"WALKING"}
          strokeWidth={4}
          strokeColor = {"red"}
          />
          <MapView.Marker 
          coordinate={origin}
          title ={"Start"}
           />
          <MapView.Marker 
          coordinate={destination}
          title = {"end"}
           />
        </MapView>
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
