import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Components
import Home from './src/Home';
import Users from './src/Users';
import logoTitle from './src/utils/logoTitle';

const Stack = createNativeStackNavigator();
const defaultHeader = {
  headerStyle: {
    backgroundColor: 'blue',
    borderBottomWidth: 10,
    borderBottomColor: 'black',
  },
  headerTitle: props => logoTitle(props),
  headerTitleAlign: 'center',
  headerTintColor: 'white',
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            ...defaultHeader,
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="Users"
            component={Users}
            initialParams={{id: 42, codeName: 'Authur'}}
            options={
              ({navigation}) => ({
                headerLeft: () => (
                  <Button
                    title="Back to Home"
                    onPress={() => navigation.navigate('Home')}
                  />
                ),
              })
              //   {
              //   headerLeft:()=> <Button
              //     title="Left Button"
              //     onPress={()=> alert('Left button clicked!')}
              //   />,
              //   headerRight:()=> <Button
              //   title="Right Button"
              //   onPress={()=> alert('Right button clicked!')}
              //   />
              // }
            }
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
