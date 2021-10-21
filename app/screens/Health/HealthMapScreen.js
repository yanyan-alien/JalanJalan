import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from "react-native-geolocation-service";
import clinics from "./clinic-data.json";
import *  as Permissions from 'expo-permissions';



export default function Health_MapScreen({ navigation }){

  const [location, setLocation] = React.useState(null);
  React.useEffect(() => {
        (async () => {
            let permissionStatus = null;
            
            let {status} = await Permissions.askAsync(Permissions.LOCATION);
            permissionStatus = status;
             
            if (permissionStatus !== 'granted') {
                return;
            }
            let location = await Geolocation.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location);
        })();
    }, []);

  //latitude: 1.3483, longitude:103.6831 (NTU)
  //latitude: 1.3417, longitude:103.7759 (Beauty world)
  //latitude: 1.3508, longitude:103.8723 (NEX)

  const origin = {latitude: 1.3483, longitude:103.6831};
  const LATITUDE_DELTA = 0.008000;
  const LONGITUDE_DELTA = 0.008000;
  const destination = {latitude: 1.357371, longitude: 103.765726};

  let difference2 = 1;
  for (let index = 0; index < clinics.features.length; index++) {
      let difference = (origin.latitude - clinics.features[index].geometry.coordinates[1]) + 
            (origin.longitude- clinics.features[index].geometry.coordinates[0])
      if (difference>-0.0005 && difference<0.0005 && difference<difference2)
      {
          difference2 = difference;
          destination.latitude = clinics.features[index].geometry.coordinates[1];
          destination.longitude = clinics.features[index].geometry.coordinates[0];
      }
    
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
          onPress={() => navigation.navigate("HealthList")}
        >
          <Text style={{ textAlign: "center", fontSize: 30 }}>
            Tap for List View
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
