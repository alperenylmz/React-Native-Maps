import Home from "./src/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Location from "./src/pages/Location";
import Location2 from "./src/pages/Location2";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: "Home Screen"}}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{title: "Location Details"}}
        />
        <Stack.Screen
          name="Location2"
          component={Location2}
          options={{title: "Location 2 Details"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
