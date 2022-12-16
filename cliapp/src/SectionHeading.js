import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SectionHeading = ({sectionName}) => {
  return (
    <View style={styles.underline}>
      <Text style={styles.heading}>{sectionName}</Text>
    </View>
  );
};

export default SectionHeading;

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    padding: 8,
  },
  underline: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 8,
  },
});
