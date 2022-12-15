import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 10,
    width: '100%'
  }
});

export default function Nav({ children, nameOfApp }) {
  return (
    <View style={styles.nav}>
      <Text>{nameOfApp}</Text>
    </View>
  )
}

