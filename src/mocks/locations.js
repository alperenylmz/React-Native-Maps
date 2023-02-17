import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const Locations = [
    {
        id: 0,
        name: 'alperen',
        img: require("/home/alperen/Documents/mapApp/assets/Boy-Emoji-Avatar-PNG.png"),
        description: 'cok kaliteli bir konum, tavsiye ederim',
        coord: {
            latitude: 37.7,
            longitude: -100.5,
            latitudeDelta: 0.9,
            longitudeDelta: 0.421
        }
    },
    {
        id: 1,
        name: 'yilmaz',
        img: require("/home/alperen/Documents/mapApp/assets/Boy-Emoji-Avatar-PNG.png"),
        description: 'baya les bir konum, hic tavsiye etmem',
        coord: {
            latitude: 37.5,
            longitude: -100.2,
            latitudeDelta: 0.0,
            longitudeDelta: 0.421
        }
    }
]

export default Locations;