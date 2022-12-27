import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ContactCard from './ContactCard';

const Favorites = () => {
  return (
    <View style={styles.mainView}>
      <ContactCard
        firstName="Katherine"
        lastName="Stweart"
        email="katherine.gra@yahoo.com"
        phone="603-615-0465"
      />
      <ContactCard
        firstName="Esther"
        lastName="Chase"
        email="emiliano_beah@gmail.com"
        phone="432-331-3638"
      />
      <ContactCard
        firstName="Patricia"
        lastName="Hooper"
        email="salvatore2008@gmail.com"
        phone="308-280-5983"
      />
      <ContactCard
        firstName="Martha"
        lastName="Polk"
        email="nicolette1995@hotmail.com"
        phone="618-222-4242"
      />
      <ContactCard
        firstName="Andrew"
        lastName="Ruf"
        email="enid_gottli@gmail.com"
        phone="727-741-6099"
      />
    </View>
  );
}

export default Favorites

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
    padding: 16,
  },
  label: {
    alignSelf: 'center',
    marginTop: 36,
    fontSize: 32,
    fontWeight: 'bold',
  },
});