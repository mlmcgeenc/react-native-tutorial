import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Home = (props) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Go to Users'
        onPress={()=>  props.navigation.navigate('Users') }
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})