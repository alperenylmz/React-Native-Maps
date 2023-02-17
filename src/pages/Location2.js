import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import Locations from '../mocks/locations';

export default function Location2({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Locations[1].img} style={styles.img}/>
      <Text style={styles.textStyle}>
        Location ID: {Locations[1].id} {'\n'} Location Name: {Locations[1].name} {'\n'} Location Description: {Locations[1].description}
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    bottom: 100,
    height: 200,
    width: 200,
  },
  textStyle: {
    alignItems: 'center',
    fontSize: 20,
  }
});
