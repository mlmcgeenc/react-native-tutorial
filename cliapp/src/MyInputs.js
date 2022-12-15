import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const MyInputs = () => {
  const [text, setText] = useState('');
  const [namesList, setNamesList] = useState(['Bill', 'Frank']);

  // const handleInputChange = (event) => {
  //   setMyInput(event);
  //   alert(myInput)
  // };

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
        {namesList.map(name => (
          <Text style={styles.user} key={name}>{name}</Text>
        ))}
      </View>
    </>
  );
};

export default MyInputs;

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    backgroundColor: 'gray',
    marginTop: 20,
    padding: 20,
    fontSize: 16,
  },
  user: {
    font: 30,
    borderWidth: 1,
    borderColor: 'magenta',
    padding: 10,
    marginBottom: 10,
  },
});
