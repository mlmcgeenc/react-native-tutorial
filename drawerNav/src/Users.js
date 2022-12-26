import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';


const Users = () => {
  // const { id, codeName} = route.params
  const route = useRoute();
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus();

  useEffect(() => {
    setTimeout(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button
            title="Forward to Home"
            onPress={() => navigation.navigate('Home')}
          />
        ),
      });
    }, 2000);
  }, [navigation]);

  console.log(">>> isDrawerOpen >>> ", isDrawerOpen);

  return (
    <View>
      <Text>ID: {route.params.id}</Text>
      <Text>Codename: {route.params.codeName}</Text>
      <Button
        title="Go Back"
        onPress={() =>
          navigation.navigate('Home', {
            active: 'true',
          })
        }
      />
      <Button
        title="Change Header"
        onPress={() =>
          navigation.setOptions({
            title: 'New Title',
          })
        }
      />
      <Button title="Side Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({});
