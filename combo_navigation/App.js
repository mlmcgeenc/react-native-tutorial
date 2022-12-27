import {
  PushNotificationIOS,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import React from 'react';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/components/Home';
import Profile from './src/components/Profile';
import Photos from './src/components/Photos';
import Post from './src/components/Post';
import Favorites from './src/components/Favorites';
import Personal from './src/components/Personal';
import Professional from './src/components/Professional';

// ---={ App Structure }=---
// App - Drawer
// - Home - Stack
//   - Profile
//   - Photos
//   - Post
// - Contacts - Tabs
//   - Favorites
//   - Personal
//   - Professional

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Hello = () => (
  <View style={styles.hello}>
    <Text style={styles.label}>Hello</Text>
  </View>
);

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen
      name="Photos"
      component={Photos}
      options={{headerTitle: 'Your Photos'}}
    />
    <Stack.Screen
      name="Post"
      component={Post}
      options={{headerTitle: 'Create a Post'}}
    />
  </Stack.Navigator>
);

const ContactsTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Personal" component={Personal} />
    <Tab.Screen name="Professional" component={Professional} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Hello">
        <Drawer.Screen name="Hello" component={Hello} />
        <Drawer.Screen name="My Account" component={HomeStack} />
        <Drawer.Screen name="Contacts" component={ContactsTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  hello: {
    height: '100%',
    width: '100%',
  },
  label: {
    alignSelf: 'center',
    marginTop: 36,
    fontSize: 32,
    fontWeight: 'bold',
  },
});
