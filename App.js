import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/navigator/TabNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// import React, { Component } from "react";
// import { View, Text, Button, Alert, Platform } from "react-native";
// import NetInfo from "@react-native-community/netinfo";

// import {useNetInfo} from "@react-native-community/netinfo";

// export default function YourComponent() {
//   const netInfo = useNetInfo();
//   if (!NetInfo.isConnected && NetInfo.isConnected !== null)
//   console.log(netInfo.isConnected);
//   return (
//     <View>
//       <Text>Type: {netInfo.type}</Text>
//       {/* <Text>Is Connected? {netInfo.isConnected.toString()}</Text> */}
//     </View>
//   );
// };