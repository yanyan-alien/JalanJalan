import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HealthScreen = ({navigation}) =>{
  return (
  <View style = {[styles.container, {flexDirection:"column"}]}>
    <View style={{ flex:1}}>
      <Text style = 
      {{fontSize : 36, 
        fontWeight: 'bold',
        marginTop:"10%",
        marginRight:"30%"}}>
        Nearest Clinics: 
        </Text>
    </View>

    <View style={{ flex:2, justifyContent: 'center', alignItems: 'center'}}>
        <Text style = 
        {{fontSize : 30,
          marginTop:"10%"}}>
          1. (Name of hospital) 
        </Text>
    </View>

    <View style={styles.feature_box}>
        <TouchableOpacity style={{ 
          backgroundColor: '#3FDCFF' , 
          justifyContent:"center",
          width:350,
          borderRadius: 24}}
          onPress ={() => navigation.navigate('HealthList')}>
        <Text style={{textAlign:"center", fontSize:30}}>Directions</Text>
        </TouchableOpacity>
    </View>
   

    <View style={{ flex:2, justifyContent: 'center', alignItems: 'center'}}>
        <Text style = 
        {{fontSize : 30, 
          marginTop:"10%"}}>
          2. (Name of polyclinic) 
        </Text>
    </View>

    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.feature_box}>
        <TouchableOpacity style={{
          backgroundColor: '#3FDCFF' , 
          justifyContent:"center",
          width:350,
          borderRadius: 24,}}
          onPress ={() => navigation.navigate('HealthList')}>
        <Text style={{textAlign:"center", fontSize:30}}>Directions</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style ={{flex:1}}></View>

    <View style={{ flex:1.1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.feature_box}>
        <TouchableOpacity style={{ 
          backgroundColor: '#6FBAFF' , 
          justifyContent:"center",
          width:350,
          borderRadius: 24}}
          onPress ={() => navigation.navigate('Reminder')}>
        <Text style={{textAlign:"center", fontSize:30}}>REMINDERS</Text>
        </TouchableOpacity>
    </View>
    <View style = {{flex :0.1}}></View>
    </View>
  </View>
  );
}

const Health_listScreen = ({navigation}) =>{
  return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.feature_box}>
          <TouchableOpacity style={{ 
          backgroundColor: '#3FDCFF' , 
          justifyContent:"center",
          width:1000,
          borderRadius: 24}}
          onPress ={() => navigation.navigate('HealthMap')}>
          <Text style={{textAlign:"center", fontSize:30}}>Tap for Map View</Text>
          </TouchableOpacity>
        </View>
      <View style={{ flex:10, justifyContent: 'center', alignItems: 'center'}}>
        <Text style = 
        {{fontSize : 30, 
          marginTop:"10%"}}>
          (Directions by Google Maps) 
        </Text>
    </View>
    </View>
  );
}

const Health_MapScreen = ({navigation}) =>{
  return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.feature_box}>
          <TouchableOpacity style={{ 
          backgroundColor: '#3FDCFF' , 
          justifyContent:"center",
          width:1000,
          borderRadius: 24}}
          onPress ={() => navigation.navigate('HealthList')}>
          <Text style={{textAlign:"center", fontSize:30}}>Tap for List View</Text>
          </TouchableOpacity>
        </View>
      <View style={{ flex:10, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Put Image here</Text>
      </View>
    </View>
  );
}

const TaxiScreen = ({navigation}) =>{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Taxi Things!</Text>
    </View>
  );
}
const FoodScreen = ({navigation}) =>{
  return (
  <View style = {[styles.container, {flexDirection:"column"}]}>

    <View style={styles.feature_box}>
        <TouchableOpacity style={{ 
          backgroundColor: '#B1F698' , 
          justifyContent:"center",
          width:350,
          borderRadius: 24,
          top:"20%",
          }}
          onPress ={() => navigation.navigate('FoodReco')}>
        <Text style={{textAlign:"center", fontSize:30}}>Coffeeshop/Hawker Centre</Text>
        </TouchableOpacity>
    </View>

    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.feature_box}>
        <TouchableOpacity style={{
          backgroundColor: '#B1F698' , 
          justifyContent:"center",
          width:350,
          borderRadius: 24,
          top:"40%"
          }}
          onPress ={() => navigation.navigate('FoodReco')}>
        <Text style={{textAlign:"center", fontSize:30}}>Restaurants</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style ={{flex:1}}></View>
  </View>
  );
}

const FoodRecoScreen = ({navigation}) =>{
  return (
    <View style = {[styles.container, {flexDirection:"column"}]}>  
      <View style={{ flex:2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style = 
          {{fontSize : 30,
            marginTop:"10%"}}>
            1. (Choice 1) 
          </Text>
      </View>
  
      <View style={styles.feature_box}>
          <TouchableOpacity style={{ 
            backgroundColor: '#B1F698' , 
            justifyContent:"center",
            width:350,
            borderRadius: 24}}
            onPress ={() => navigation.navigate('FoodList')}>
          <Text style={{textAlign:"center", fontSize:30}}>Directions</Text>
          </TouchableOpacity>
      </View>
     
  
      <View style={{ flex:2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style = 
          {{fontSize : 30, 
            marginTop:"10%"}}>
            2. (Choice 2) 
          </Text>
      </View>
  
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.feature_box}>
          <TouchableOpacity style={{
            backgroundColor: '#B1F698' , 
            justifyContent:"center",
            width:350,
            borderRadius: 24,}}
            onPress ={() => navigation.navigate('FoodList')}>
          <Text style={{textAlign:"center", fontSize:30}}>Directions</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style ={{flex:1}}></View>
    </View>
    );
}

const Food_listScreen = ({navigation}) =>{
  return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.feature_box}>
          <TouchableOpacity style={{ 
          backgroundColor: '#B1F698' , 
          justifyContent:"center",
          width:1000,
          borderRadius: 24}}
          onPress ={() => navigation.navigate('FoodMap')}>
          <Text style={{textAlign:"center", fontSize:30}}>Tap for Map View</Text>
          </TouchableOpacity>
        </View>
      <View style={{ flex:10, justifyContent: 'center', alignItems: 'center'}}>
        <Text style = 
        {{fontSize : 30, 
          marginTop:"10%"}}>
          (Directions by Google Maps) 
        </Text>
    </View>
    </View>
  );
}

const Food_MapScreen = ({navigation}) =>{
  return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.feature_box}>
          <TouchableOpacity style={{ 
          backgroundColor: '#B1F698' , 
          justifyContent:"center",
          width:1000,
          borderRadius: 24}}
          onPress ={() => navigation.navigate('FoodList')}>
          <Text style={{textAlign:"center", fontSize:30}}>Tap for List View</Text>
          </TouchableOpacity>
        </View>
      <View style={{ flex:10, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Put Image here</Text>
      </View>
    </View>
  );
}

const EmergencyScreen = ({navigation}) =>{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Emergency Things!</Text>
    </View>
  );
}

const ReminderScreen = ({navigation}) =>{
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chiam Chueng pls</Text>
    </View>
  );
}


function Home(){
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
  
}
function HomeScreen({navigation}) {
  return (
        <View style={styles.container}>
        <View style={styles.feature_box}>
        <TouchableOpacity style={{ flex: 1, backgroundColor: '#F8FFA5' , justifyContent:"center"}}
        onPress ={() => navigation.navigate('Taxi')}> 
              <Text style={{textAlign:"center"}}>TAXI</Text>
              <Image style={styles.pictures} source={require('./assets/local_taxi.png')}></Image>
          </TouchableOpacity>
          
          <TouchableOpacity style={{ flex: 1, 
            backgroundColor: '#A5EFFF' , 
            justifyContent:"center" 
             }} onPress ={() => navigation.navigate('Health')} >
              <Text style={{textAlign:"center"}}>HEALTH</Text>
              <Image style={styles.pictures} source={require('./assets/health.png')}></Image>
          </TouchableOpacity>
        </View>
          
        <View style={styles.feature_box}>
          <TouchableOpacity
            style={{ flex: 1, backgroundColor: '#B1F698' , justifyContent:"center"}}
            onPress ={() => navigation.navigate('Food')}>
              <Text style={{textAlign:"center"}}>FOOD</Text>  
              <Image style={styles.pictures} source={require('./assets/restaurant.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, backgroundColor: '#FF9292' , justifyContent:"center"}} 
            onPress ={() => navigation.navigate('Emergency')}>
              <Text style={{textAlign:"center"}}>EMERGENCY</Text>  
              <Image style={styles.pictures} source={require('./assets/emergency.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function PersonalsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Personal Information!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
					screenOptions={({ route }) => ({
						// tabbarIcon is a function thus fixed value for color and size?
						tabBarIcon: ({color}) => {
							let iconName;
              if (route.name === "MENU") iconName = "menu";
              if (route.name === "PROFILE") iconName = "account";
              if (route.name === "ADDRESS") iconName = "home";
              
              return <MaterialCommunityIcons name={iconName} size={35} color={color} />
            }
          })
        }
      >
        <Tab.Screen 
          name="MENU" 
          component={Home} 
          options={{headerTitleAlign: "center", tabBarShowLabel: false}}
        />
        <Tab.Screen name="ADDRESS" component={SettingsScreen} 
          options={{headerTitleAlign: "center", tabBarShowLabel: false}}
        />
        <Tab.Screen name="PROFILE" component={PersonalsScreen} 
          options={{headerTitleAlign: "center", tabBarShowLabel: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

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
  }
});
