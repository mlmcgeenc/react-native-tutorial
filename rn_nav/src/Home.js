import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Home = ({navigation, route}) => {
  return (
    <View>
      <Text>Home</Text>
      <Text>Active: {route.params ? route.params.active : null}</Text>
      <Button
        title="Go to Users"
        onPress={() =>
          navigation.navigate('Users', {
            id: 23,
            codeName: 'Black Mamba',
          })
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
