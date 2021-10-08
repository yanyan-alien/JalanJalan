import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const name = "Tan Ah Kow";
const address = ["123 Chua Chu Kang Road", "#04-05", "S678910"];
const nextOfKinInfo = ["Tan Ah Beng", "+65 9123 45678"];

export default function AddressScreen() {
    return (
        <View style={{ flex: 1, padding: "5%"}}>
           <Text style={{fontSize:36, fontWeight: "bold"}}>{name}</Text>
           <View style={{paddingVertical: "10%"}}>
               <Text style = {{fontSize:36}}>{address[0]}</Text>
               <Text style = {{fontSize:36}}>{address[1]}</Text>
               <Text style = {{fontSize:36}}>{address[2]}</Text>
           </View>
           <Text style = {{fontSize:30}}>
               If I require assistance, call: {"\n"}
               Next-of-kin: <Text style={{fontWeight:"bold"}}>{nextOfKinInfo[0]}</Text>{"\n"}
               Contact: <Text style={{fontWeight:"bold"}}>{nextOfKinInfo[1]}</Text>{"\n"}
           </Text>
        </View>
    )
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
})