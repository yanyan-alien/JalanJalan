// import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import FoodScreen from "../Food/food.js"


function HomeScreen() {
    return (
      <View style={styles.container}>
        <View style={styles.feature_box}>
        <TouchableOpacity style={{ flex: 1, backgroundColor: '#F8FFA5' , justifyContent:"center"}} onPress ={() => navigation.navigate('Health')}> 
              <Text style={{textAlign:"center"}}>TAXI</Text>
              <Image style={styles.pictures} source={require('../assets/local_taxi.png')}></Image>
          </TouchableOpacity>
          
          <TouchableOpacity style={{ flex: 1, backgroundColor: '#A5EFFF' , justifyContent:"center"}} onPress ={() => navigation.navigate('Health')}>
              <Text style={{textAlign:"center"}}>HEALTH</Text>
              <Image style={styles.pictures} source={require('../assets/health.png')}></Image>
          </TouchableOpacity>
        </View>
          
        <View style={styles.feature_box}>
          <TouchableOpacity
             style={{ flex: 1, backgroundColor: '#B1F698' , justifyContent:"center"}}
             onPress ={() => navigation.navigate('Health')}>
              <Text style={{textAlign:"center"}}>FOOD</Text>  
              <Image style={styles.pictures} source={require('../assets/restaurant.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, backgroundColor: '#FF9292' , justifyContent:"center"}}
            onPress ={() => navigation.navigate('Health')} >
              <Text style={{textAlign:"center"}}>EMERGENCY</Text>  
              <Image style={styles.pictures} source={require('../assets/emergency.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

export default function Home(){
    return(
        <Stack.Navigator
        screenOptions ={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name= "Health" component={HealthScreen}/>
          <Stack.Screen name = "Taxi" component={TaxiScreen}/>
          <Stack.Screen name = "Food"  component={FoodScreen}/>
          <Stack.Screen name = "Emergency" component={EmergencyScreen}/>
          <Stack.Screen name = "HealthList" component={Health_listScreen}/>
          <Stack.Screen name = "HealthMap" component={Health_MapScreen}/>
          <Stack.Screen name = "Reminder" component ={ReminderScreen}/>
          <Stack.Screen name = "FoodReco" component={FoodRecoScreen}/>
          <Stack.Screen name = "FoodList" component={Food_listScreen}/>
          <Stack.Screen name = "FoodMap" component={Food_MapScreen}/>
        </Stack.Navigator>
    )

  const styles = StyleSheet.create({
    container: {
      // flexDirection: 'column',
      flex: 2,
      // paddingTop: 20,
      backgroundColor: "white",
      alignItems: 'center',
      justifyContent: 'center',
    },
    feature_box: {
      flex: 1,
      flexDirection: "row",
      alignContent: "flex-end",
    },
    pictures: {
      height:"30%",
      width: "100%",
      alignSelf: "center",
      resizeMode: "contain",
    },
    rectanges: {
      flex: 1,
      justifyContent: "center"
    }
  });