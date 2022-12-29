import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Drawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <Text>Drawer Title</Text>
      <DrawerItemList {...props} />
      <DrawerItem label="Contact" onPress={() => alert('Contact Pressed')} />
      <Button
        title="Home Button"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
    </DrawerContentScrollView>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
