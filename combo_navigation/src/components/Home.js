import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Home = (props) => {
  return (
    <View>
      <Button
        title="Go to Your Profile"
        onPress={() => props.navigation.navigate('Profile')}
      />
      <Button
        title="Go to Your Photos"
        onPress={() => props.navigation.navigate('Photos')}
      />
      <Button
        title="Create a new Post"
        onPress={() => props.navigation.navigate('Post')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
