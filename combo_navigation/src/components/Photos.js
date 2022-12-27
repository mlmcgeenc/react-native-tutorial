import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const Photos = () => {
  return (
    <ScrollView style={styles.mainView}>
      <Image
        style={styles.photo}
        source={{uri: 'https://picsum.photos/250/250'}}
      />
      <Image
        style={styles.photo}
        source={{uri: 'https://picsum.photos/250/250'}}
      />
      <Image
        style={styles.photo}
        source={{uri: 'https://picsum.photos/250/250'}}
      />
      <Image
        style={styles.photo}
        source={{uri: 'https://picsum.photos/250/250'}}
      />
      <Image
        style={styles.photo}
        source={{uri: 'https://picsum.photos/250/250'}}
      />
      <Image
        style={styles.photo}
        source={{uri: 'https://picsum.photos/250/250'}}
      />
      <Image
        style={styles.photo}
        source={{uri: 'https://picsum.photos/250/250'}}
      />
      <Image
        style={styles.photo}
        source={{uri: 'https://picsum.photos/250/250'}}
      />
    </ScrollView>
  );
};

export default Photos;

const styles = StyleSheet.create({
  mainView: {
    padding: 16,
  },
  photo: {
    width: 250,
    height: 250,
    marginVertical: 16,
    alignSelf: 'center',
  },
});
