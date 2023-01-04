import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const locations = [
  {
    title: 'Blue Dream Curry',
    longitude: -82.555,
    latitude: 35.5945,
  },
  {
    title: 'Asaka',
    longitude: -82.545,
    latitude: 35.5688,
  },
  {
    title: 'OTC',
    longitude: -82.5517,
    latitude: 35.5974,
  },
  {
    title: 'AVL',
    longitude: -82.5515,
    latitude: 35.5951,
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 35.5951,
          longitude: -82.5515,
          latitudeDelta: 0.05,
          longitudeDelta: 0.0121,
        }}>
        {locations[0] != null &&
          locations.map((marker, index) => (
            <Marker
              key={index}
              title={marker.title}
              coordinate={{
                longitude: marker.longitude,
                latitude: marker.latitude,
              }}
            />
          ))}
      </MapView>
      <Text>react-native-maps Demo</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
