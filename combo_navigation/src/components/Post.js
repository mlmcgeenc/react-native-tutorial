import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Post = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.formLabel}>Post Title</Text>
      <TextInput style={styles.input} />
      <Text style={styles.formLabel}>Post Content</Text>
      <TextInput style={styles.input} multiline={true} numberOfLines={4} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  mainView: {
    padding: 16,
  },
  formLabel: {
    fontSize: 12,
    marginBottom: 8,
  },
  input: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#15aee8',
    padding: 8,
    marginBottom: 32,
    fontSize: 16,
  },
});
