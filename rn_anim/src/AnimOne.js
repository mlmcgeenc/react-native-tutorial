import {StyleSheet, Text, View, Animated} from 'react-native';
import React, { useEffect, useRef } from 'react';

const AnimOne = () => {
  const moveElement = useRef(new Animated.ValueXY()).current

  useEffect(()=>{
    Animated.spring(moveElement, {
      toValue: {
        x: 100,
        y: 300,
      },
      friction: .5,
    }).start();
  }, [moveElement])

  return (
    <View style={styles.container}>
      <Animated.View
        style={moveElement.getLayout()}
      // style={{left: moveElement.x, top: moveElement.y}}
      >
        <View style={styles.square}>
          <Text>AnimOne</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default AnimOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
});
