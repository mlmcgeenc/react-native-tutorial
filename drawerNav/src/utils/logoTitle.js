import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Logo from '../images/paypal-logo.png'

const logoTitle = () => {
  return (
    <View>
      <Image source={Logo}
        style={{width: 50, height: 50}}
      />
    </View>
  )
}

export default logoTitle

const styles = StyleSheet.create({})