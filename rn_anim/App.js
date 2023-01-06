import {StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import React from 'react';

import AnimOne from './src/AnimOne';
import AnimTwo from './src/AnimTwo';
import AnimThree from './src/AnimThree';

const App = () => {
  return (
    <View>
      <Header
        centerComponent={{
          text: 'Anim Project',
          style: {color: 'navy'},
        }}></Header>
      <AnimOne></AnimOne>
      <AnimTwo></AnimTwo>
      <AnimThree />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
