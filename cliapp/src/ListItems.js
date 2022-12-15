import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const ListItems = ({items, removeItem}) => {
  return items.map((item, key) => (
    <Pressable key={key}  onPress={() => removeItem(key)}>
      <View style={styles.listitem}>
        <Text>{item}</Text>
      </View>
    </Pressable>
  ));
};

export default ListItems;

const styles = StyleSheet.create({
  listitem: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    width: '100%',
  },
});
