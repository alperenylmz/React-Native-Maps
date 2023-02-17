import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Location from './Location';
import Locations from '../mocks/locations';
import { StatusBar } from 'expo-status-bar';
import Location2 from './Location2';

export default function Home({navigation}) {
    const [pin, setPin] = useState({
        latitude: Locations[0].coord.latitude,
        longitude: Locations[0].coord.longitude,
        latitudeDelta: Locations[0].coord.latitudeDelta,
        longitudeDelta: Locations[0].coord.longitudeDelta   
    });

    return (
        <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={pin}>
            <Marker
                coordinate={pin}
                draggable={false}
            >
                 <Callout onPress={() => {
                    if(pin.latitude==37.7 && pin.longitude==-100.5){
                        navigation.navigate(Location)
                     }
                    }
                }>
                    <Text>Location 1</Text>
                </Callout>
            </Marker>
            <Marker
                coordinate={{
                    latitude: Locations[1].coord.latitude,
                    longitude: Locations[1].coord.longitude,
                }}
                draggable= {false}
            >
                <Callout onPress={() => navigation.navigate(Location2)}>
                    <Text>Location2</Text>
                </Callout>
            </Marker>
            <StatusBar/>
        </MapView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: 500,
    height: 500,
  },
});
