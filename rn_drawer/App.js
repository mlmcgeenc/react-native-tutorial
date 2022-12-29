import * as React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/Home'
import Users from './src/Users'
import MyDrawer from './src/utils/Drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props)=> <MyDrawer {...props}/>}
          openByDefault="false"
          initialRouteName="Home"
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen
            name="Users"
            component={Users}
            initialParams={{id: 1, codeName: 'Iron Horse'}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 16,
    backgroundColor: 'black'
  }
})