import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactCard = ({firstName, lastName, email, phone}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardName}>
        {firstName} {lastName}
      </Text>
      <Text style={styles.cardInfo}>email: {email}</Text>
      <Text style={styles.cardInfo}>phone: {phone}</Text>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  cardName: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  cardInfo: {},
  card: {
    marginVertical: 16,
  },
});
