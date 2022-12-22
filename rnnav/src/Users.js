import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

const Users = () => {
  // const { id, codeName} = route.params
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button
            title="Forward to Home"
            onPress={() => navigation.navigate('Home')}
          />
        ),
      });
    }, 2000);
  }, [navigation]);

  return (
    <View>
      <Text>ID: {route.params.id}</Text>
      <Text>Codename: {route.params.codeName}</Text>
      <Button
        title="Go Back"
        onPress={() =>
          navigation.navigate('Home', {
            active: 'true',
          })
        }
      />
      <Button
        title="Change Header"
        onPress={() =>
          navigation.setOptions({
            title: 'New Title',
          })
        }
      />
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({});
