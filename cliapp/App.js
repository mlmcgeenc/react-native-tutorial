import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
// Components
import Nav from './src/Nav';
import Generate from './src/Generate';
import ListItems from './src/ListItems';
import MyInputs from './src/MyInputs';
import ModalComponent from './src/Modal';
// Images
import logo from './src/assets/OTC-Logo.png';
import SectionHeading from './src/SectionHeading';

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

  const handleRemoveItem = itemKey => {
    const newArrary = random.filter((item, index) => {
      return index !== itemKey;
    });
    setRandom(newArrary);
    alert(
      `Item with index ${itemKey} has been removed from ${random}. New Array is ${newArrary}`,
    );
  };

  return (
    <View style={styles.mainView}>
      <Nav nameOfApp={'Demo App'}>Hello Props</Nav>
      <ScrollView style={{width: '92%', marginLeft: 16, marginRight: 16}}>
        <View style={styles.section}>
          <SectionHeading sectionName={'Hero Section'}></SectionHeading>
          <Text>Local image from src/assets</Text>
          <Image
            source={logo}
            style={styles.logo}
            onLoadEnd={() => alert('image done loading')}
          />
          <ImageBackground
            source={{uri: 'https://picsum.photos/400/400'}}
            style={styles.remoteImage}>
            <Text>Remote Image from https://picsum.photos/400/400</Text>
          </ImageBackground>
          <Text style={styles.basicText}>Hello World</Text>
          {hello && <Text>Hello useState variable is true</Text>}
        </View>

        <View style={styles.section}>
          <SectionHeading
            sectionName={'List of Random Numbers'}></SectionHeading>
          <Generate add={() => onAddRandom()} />
          <ListItems items={random} removeItem={pos => handleRemoveItem(pos)} />
        </View>

        <View style={styles.section}>
          <SectionHeading sectionName={'List of Users'}></SectionHeading>
          <MyInputs></MyInputs>
        </View>

        <ModalComponent></ModalComponent>

        <ActivityIndicator animating={false} size={'large'} color={'green'} />
      </ScrollView>
    </View>
  );
}

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
  logo: {
    maxWidth: '50%',
    height: 100,
    resizeMode: 'contain',
  },
  remoteImage: {
    width: 400,
    height: 400,
  },
  section: {
    marginBottom: 32,
  },
});
