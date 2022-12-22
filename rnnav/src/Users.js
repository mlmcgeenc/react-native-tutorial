import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const Users = () => {
  // const { id, codeName} = route.params
  const route = useRoute()
  const navigation = useNavigation()

  return (
    <View>
      <Text>ID: {route.params.id}</Text>
      <Text>Codename: {route.params.codeName}</Text>
      <Button title="Go Back" onPress={() => navigation.navigate('Home', {
        active: 'true'
      })} />
    </View>
  );
}

export default Users

const styles = StyleSheet.create({})