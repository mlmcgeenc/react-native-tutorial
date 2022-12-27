import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ContactCard from './ContactCard'

const Personal = () => {
  return (
    <View style={styles.mainView}>
      <ContactCard
        firstName="Marc"
        lastName="Loftis"
        email="gardner2013@yahoo.com"
        phone="409-886-1060"
      />
      <ContactCard
        firstName="Stephanie"
        lastName="Delagarza"
        email="keaton1983@hotmail.com"
        phone="512-387-7518"
      />
      <ContactCard
        firstName="Brian"
        lastName="Garner"
        email="florian_sip@hotmail.com"
        phone="573-351-5949"
      />
      <ContactCard
        firstName="Dawn"
        lastName="Campbell"
        email="sheridan.considi@hotmail.com"
        phone="765-455-7535"
      />
      <ContactCard
        firstName="Joe"
        lastName="Lopez"
        email="hailie_haye3@hotmail.com"
        phone="715-744-5241"
      />
    </View>
  );
}

export default Personal

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