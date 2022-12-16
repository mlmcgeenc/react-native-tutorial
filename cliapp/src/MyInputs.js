import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const MyInputs = () => {
  const [text, setText] = useState('');
  const [namesList, setNamesList] = useState(['Bill', 'Frank', 'Smantha', 'Jesse', 'Mark']);

  const handleAddUser = () => {
    const newState = [...namesList, text];
    setNamesList(newState);
    setText('');
  };

  return (
    <>
      <TextInput
        style={styles.textInput}
        defaultValue={text}
        onChangeText={newText => setText(newText)}
        multiline={true}
      />
      <Button title="Add User" onPress={handleAddUser} />
      <View>
        {namesList.map((name, index) => (
          <Text style={styles.user} key={index}>{name}</Text>
        ))}
      </View>
    </>
  );
};

export default MyInputs;

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    marginTop: 20,
    padding: 20,
    fontSize: 16,
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1,
  },
  user: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
});
