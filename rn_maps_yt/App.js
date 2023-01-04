import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

Geocoder.init('');

const locations = [
  {
    title: 'Blue Dream Curry',
    address: '',
    city: 'Asheville',
    zip: 28801,
    longitude: -82.555,
    latitude: 35.5945,
  },
  {
    title: 'Asaka',
    address: '',
    city: 'Asheville',
    zip: 28801,
    longitude: -82.545,
    latitude: 35.5688,
  },
  {
    title: 'OTC',
    address: '',
    city: 'Asheville',
    zip: 28801,
    longitude: -82.5517,
    latitude: 35.5974,
  },
];

const App = () => {
  const [markerName, setMarkerName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [locationsList, setLocationsList] = useState([])

  const handleDecodeAddress = async() => {
    console.log('decodedAddress fired')
    console.log(`Marker Name: ${markerName}`)
    console.log(`Address: ${address}`)
    console.log(`Zip: ${zip}`)

    let newLocation = {
      title: markerName,
      address: address,
      city: 'Asheville',
      zip: zip,
      longitude: null,
      latitude: null,
    }

    let searchString = `${markerName} ${address} ${zip}`

    Geocoder.from(searchString)
      .then(json => {
        var location = json.results[0].geometry.location;
        newLocation.latitude = location.lat.toFixed(4)
        newLocation.longitude = location.lng.toFixed(4)
        setLocationsList([...locationsList, newLocation]);
        console.log(locations);
      })
      .catch(error => console.warn(error));
  };

  return (
    <>
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
            locationsList.map((marker, index) => (
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

      <View style={styles.markersList}>
        <>
          <TextInput
            style={styles.formInput}
            id="nameInput"
            placeholder="Location name"
            value={markerName}
            onChangeText={setMarkerName}
            autoFocus="true"
            ></TextInput>
          <TextInput
            style={styles.formInput}
            id="addressInput"
            placeholder="Address"
            value={address}
            onChangeText={setAddress}></TextInput>
          {/* <TextInput
            style={styles.formInput}
            id="cityInput"
            placeholder="City"
            value={city}
            ></TextInput> */}
          <TextInput
            style={styles.formInput}
            id="zipInput"
            placeholder="Zip"
            value={zip}
            onChangeText={setZip}></TextInput>
          <Button
            title="Add marker to the map"
            onPress={handleDecodeAddress}></Button>
        </>

        <ScrollView>
          {locationsList[0] != null &&
            locationsList.map((marker, index) => (
              <View style={styles.location} key={index}>
                <Text style={styles.markerTitle}>{marker.title}</Text>
                <Text style={styles.markerAddress}>
                  Address: {marker.address}
                </Text>
                <Text style={styles.markerAddress}>Zip: {marker.zip}</Text>
              </View>
            ))}
        </ScrollView>
      </View>
    </>
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
  formInput: {
    height: 42,
    padding: 4,
    margin: 4,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
  },
  markersList: {
    marginTop: 400,
  },
  location: {
    marginTop: 8,
  },
  markerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  markerAddress: {},
});
