import {StyleSheet, Text, View, Animated, Button} from 'react-native';
import React, {useEffect, useRef} from 'react';

const AnimThree = () => {
  const magentaSquare = useRef(new Animated.ValueXY()).current;
  const purpleSquare = useRef(new Animated.Value(1)).current;
  const orangeSquare = useRef(new Animated.Value(1)).current;

  const runAnimation = () => {
    Animated.sequence([
      Animated.timing(orangeSquare, {
        toValue: 0,
      }),
      Animated.parallel([
        Animated.spring(magentaSquare, {
          toValue: {x: 200, y: 200},
        }),
        Animated.timing(purpleSquare, {
          toValue: 0,
        }),
      ]),
    ]).start();
  };

  return (
    <View>
      <Button title="Animate AnimThree objects" onPress={runAnimation} />
      <Animated.View style={{opacity: orangeSquare}}>
        <View style={styles.square_three}>
          <Text>Animate this Step 1</Text>
        </View>
      </Animated.View>
      <Animated.View style={magentaSquare.getLayout()}>
        <View style={styles.square}>
          <Text>Animated 3.a</Text>
        </View>
      </Animated.View>
      <Animated.View style={{opacity: purpleSquare}}>
        <View style={styles.square_two}>
          <Text>Animated 3.b</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default AnimThree;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'magenta',
  },
  square_two: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
  },
  square_three: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
  },
  button: {
    height: 42,
    backgroundColor: 'navy',
    color: 'white',
    borderRadius: 7,
  },
});
