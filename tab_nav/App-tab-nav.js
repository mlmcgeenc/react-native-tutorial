import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from "./src/Home"
import Users from "./src/Users"

import Logo from "./src/images/paypal-logo.png"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return focused
              ? <Image source={Logo} style={{ width: 50, height: 50 }} />
              : null
            }
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'blue',
        })}>
        <Tab.Screen name="Home" component={Home} options={{tabBarBadge: 3}} />
        <Tab.Screen
          name="Users"
          component={Users}
          initialParams={{id: 42, codeName: 'Authur'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
