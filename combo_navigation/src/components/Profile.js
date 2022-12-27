import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import profilePhoto from '../images/profile_photo.jpeg';

const Profile = () => {
  return (
    <View style={styles.mainView}>
      <Image source={profilePhoto} style={styles.profilePicture}></Image>
      <Text style={styles.profileName}>Elizabeth Turner</Text>
      <Text style={styles.sectionHeading}>My Info</Text>
      <Text style={styles.profileInfo}>email: nikki2010@hotmail.com</Text>
      <Text style={styles.profileInfo}>phone: 843-324-2784</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainView: {
    padding: 16,
    alignItems: 'center',
  },
  profilePicture: {
    maxWidth: 250,
    maxHeight: 250,
    borderRadius: 100,
  },
  profileName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 16,
    textDecorationLine: 'underline',
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  profileInfo: {
    fontSize: 10,
    alignSelf: 'flex-start',
  },
});
