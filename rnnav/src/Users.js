import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Users = (props) => {
  return (
    <View>
      <Text>Users</Text>
      <Button
        title='Go Back'
        onPress={()=> props.navigation.goBack()}
      />
    </View>
  );
}

export default Users

const styles = StyleSheet.create({})