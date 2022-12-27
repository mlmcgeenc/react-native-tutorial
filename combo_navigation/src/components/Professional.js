import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ContactCard from './ContactCard'

const Professional = () => {
  return (
    <View style={styles.mainView}>
      <ContactCard
        firstName="Brian"
        lastName="Palma"
        email="ilene2008@yahoo.com"
        phone="715-219-5023"
      />
      <ContactCard
        firstName="Henry"
        lastName="Kinner"
        email="violette.he@gmail.com"
        phone="408-861-8024"
      />
      <ContactCard
        firstName="Deborah"
        lastName="Ferguson"
        email="lester1984@hotmail.com"
        phone="252-665-7817"
      />
      <ContactCard
        firstName="Willie"
        lastName="Johnson"
        email="paris.gleas@hotmail.com"
        phone="972-770-4800"
      />
      <ContactCard
        firstName="Richard"
        lastName="Fernandez"
        email="bernadette_ritch@gmail.com"
        phone="417-993-6130"
      />
    </View>
  );
}

export default Professional

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