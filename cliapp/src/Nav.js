import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Nav({ children, nameOfApp }) {
  return (
    <View style={styles.nav}>
      <Text>{nameOfApp}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 32,
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
});

