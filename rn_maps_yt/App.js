import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

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
        <Marker
          title={'Blue Dream Curry'}
          coordinate={{
            latitude: 35.5945,
            longitude: -82.555,
          }}
        />
        <Marker
          title={'Asaka'}
          coordinate={{
            latitude: 35.5688,
            longitude: -82.545,
          }}
        />
        <Marker
          title={'OTC'}
          coordinate={{
            latitude: 35.5974,
            longitude: -82.5517,
          }}
        />
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
