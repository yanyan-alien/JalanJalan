import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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