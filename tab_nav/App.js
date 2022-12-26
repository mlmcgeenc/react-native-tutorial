import * as React from 'react';
import {Text, View, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/Home';
import Users from './src/Users';

import Logo from './src/images/paypal-logo.png';

const Stack = createNativeStackNavigator();
const HomeStack = (props) => (
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name="Home_Main" component={Home} />
    <Stack.Screen name="Home_settings">
      {props => <Text>Home Settings</Text>}
    </Stack.Screen>
    <Stack.Screen name="HomePosts">
      {props => <Text>Post Main</Text>}
    </Stack.Screen>
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator();
const UserTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="Users_Main" component={Users} />
    <Tab.Screen name="User_Settings">
      {props => <Text>User Settings</Text>}
    </Tab.Screen>
    <Tab.Screen name="User_Profile">
      {props => <Text>User Profile</Text>}
    </Tab.Screen>
  </Tab.Navigator>
);

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Text>App is running</Text>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Users" component={UserTab} />
        <Drawer.Screen name="Posts">
          {props => <Text>Post Main</Text>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
