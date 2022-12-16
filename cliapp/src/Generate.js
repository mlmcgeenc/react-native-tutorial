import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';

const Generate = ({add}) => {
  return (
    <>
      <Pressable onPress={add}>
        <View style={styles.generate}>
          <Text style={{color: 'white'}}>Add Random number</Text>
        </View>
      </Pressable>
    </>
  );
};

export default Generate;

const styles = StyleSheet.create({
  generate: {
    backgroundColor: 'orange',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
});
