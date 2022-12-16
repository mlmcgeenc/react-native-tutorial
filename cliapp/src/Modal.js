import {StyleSheet, Text, View, Button, Modal} from 'react-native';
import React, {useState} from 'react';

const ModalComponent = () => {
  const [modal, setModal] = useState(false);

  const handleToggleModal = () => {
    setModal(!modal);
  };

  return (
    <View>
      <Modal
        visible={modal}
        animationType={'slide'}
      >
        <View style={{marginTop: 50, marginLeft: 16, marginRight: 16}}>
          <Text>
            This is a modal! In React Native they are full screen by default.
            Thankfully there are libraries availible to make adding more
            attractive modals super easy without having to write a bunch of
            bespoke styles.
          </Text>
        </View>
        <Button title="Close Modal" onPress={handleToggleModal} />
      </Modal>
      <Button title="Open Modal" onPress={handleToggleModal} />
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({});
