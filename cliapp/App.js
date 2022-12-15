import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
// Components
import Nav from './src/Nav';
import Generate from './src/Generate';
import ListItems from './src/ListItems';
import MyInputs from './src/MyInputs';

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 50,
    width: '100%',
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  basicView: {
    backgroundColor: 'green',
    width: '100%',
    marginBottom: 5,
  },
  basicText: {
    fontSize: 20,
    color: 'navy',
    textAlign: 'center',
    padding: 20,
  },
});

export default function App() {
  const [hello, setHello] = useState(true);
  const [random, setRandom] = useState([20, 55]);

  useEffect(() => {
    setTimeout(() => {
      setHello(false);
    }, 2000);
  }, []);

  const onAddRandom = () => {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    const newState = [...random, randomValue];
    setRandom(newState);
    alert(`${randomValue} Added`);
  };

  const handleRemoveItem = (itemKey) => {
    const newArrary = random.filter((item, index)=> {
      return index !== itemKey
    })
    setRandom(newArrary)
    alert(`Item with index ${itemKey} has been removed from ${random}. New Array is ${newArrary}`);
  };

  return (
    <View style={styles.mainView}>
      <Nav nameOfApp={'Demo App'}>Hello Props</Nav>
      <Text style={styles.basicText}>Hello World</Text>
      {hello && <Text>Hello useState variable is true</Text>}
      <View>
        <Generate add={() => onAddRandom()} />
        <ListItems items={random} removeItem={(pos) => handleRemoveItem(pos)} />
      </View>
      <MyInputs></MyInputs>
    </View>
  );
}
