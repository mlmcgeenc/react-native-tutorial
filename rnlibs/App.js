import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';

import {
  ImagePicker,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import Contacts from 'react-native-contacts';

const App = () => {
  const date = new Date();
  const now = date.toLocaleTimeString();
  const [avatar, setAvatar] = useState(null);
  const [userContacts, setUserContacts] = useState([]);

  const requestPermission = async () => {
    try {
      if (Platform.OS === 'ios') {
        return true;
      } else {
        const granted = await PermissionsAndroid.requestMultiple(
          [
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
          ],
          {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
          },
        );
        return (
          granted['android.permission.WRITE_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getContacts = () => {
    requestPermission().then(didGetPermission => {
      if (didGetPermission) {
        Contacts.getAll().then(contacts => {
          setUserContacts(contacts);
          console.log("Contacts array saved to 'userContacts'");
        });
      }
    });
  };

  const addContact = () => {
    requestPermission().then(didGetPermission => {
      if (didGetPermission) {
        const newContact = {
          familyName: "LastName",
          givenName: "FirstName"
        }
        Contacts.addContact(newContact).then(()=>{
          getContacts()
        })
        console.log("New contact added")
      }
    });
  }

  const getAvatar = () => {
    launchImageLibrary({includeBase64: true}, response => {
      if (response.didCancel) {
        console.log('User cancelled image selection');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // console.log(response.assets[0].base64)
        setAvatar(response.assets[0].uri);
      }
    });
  };

  const takePhoto = () => {
    launchCamera('', response => {
      console.log('Response: ', response);
      setAvatar(response.assets[0].uri);
    });
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.heading}>App</Text>
      <Text> Last updated: {now}</Text>
      <Image source={{uri: avatar}} style={styles.avatar}></Image>
      <Button
        title="Choose an image from your library"
        onPress={getAvatar}
        style={styles.button}></Button>
      <Button
        title="Take a photo with the camera"
        onPress={takePhoto}
        style={styles.button}></Button>
      <Button title="Add a Contact" onPress={addContact}></Button>
      <Button title="Get Contacts" onPress={getContacts}></Button>
      {userContacts.map(contact => (
        // console.log(contact)
        <View key={contact.recordID} style={styles.contactCard}>
          <Text style={styles.contactName}>
            Name: {contact.givenName} {contact.familyName}
          </Text>
          <Text>
            Email:{' '}
            {contact.emailAddresses[0]
              ? contact.emailAddresses[0].email
              : 'no email on file'}
          </Text>
          <Text>
            Phone:{' '}
            {contact.phoneNumbers[0]
              ? contact.phoneNumbers[0].number
              : 'no phon number on file'}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 64,
  },
  avatar: {
    width: 250,
    height: 250,
  },
  contactCard:{
    marginVertical: 8,
  },
  contactName: {
    fontWeight: 'bold'
  }
});
