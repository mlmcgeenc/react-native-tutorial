import {StyleSheet, Text, View, Animated, Easing, Button} from 'react-native';
import React, {useEffect, useRef} from 'react';

const AnimTwo = () => {
  const moveElement = useRef(new Animated.ValueXY()).current;
  const animateValue = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.timing(moveElement, {
      toValue: {
        x: 100,
        y: 300,
      },
      duration: 2000,
      delay: 500,
      easing: Easing.elastic(2),
    }).start();
  }

  const animateOpacity = () => {
    Animated.timing(animateValue, {
      toValue: 0,
      duration: 500
    }).start()
  }

  return (
    <View style={styles.container}>
      {/* <Button style={styles.button} title="Start Animation" onPress={startAnimation}/> */}
      <Button title="Second Animation" onPress={animateOpacity} />
      <Animated.View
        // style={moveElement.getLayout()}
        // style={{left: moveElement.x, top: moveElement.y}}
        style={{
          opacity: animateValue,
          left: animateValue.interpolate({
            inputRange: [0, 1],
            outputRange: [100, 0],
          }),
        }}>
        <View style={styles.square}>
          <Animated.Text
          style={{
            fontSize: animateValue.interpolate({
              inputRange: [0, 1],
              outputRange: [8, 32]
            }),
            backgroundColor: animateValue.interpolate({
              inputRange: [0, 1],
              outputRange: ["blue", "green"]
            })
          }}
          >
            <Text>AnimTwo</Text>
          </Animated.Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default AnimTwo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  button: {
    height: 42,
    backgroundColor: 'navy',
    color: 'white',
    borderRadius: 7,
  }
});
