import React, { useState } from 'react';
import {
  Alert,
  Modal as ModalBase,
  StyleSheet,
  Text,
  Pressable,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Body, Title } from '../Typography';
import { AntDesign } from '@expo/vector-icons';
import Button from '../Button';

export const Modal = ({
  modalVisible,
  setModalVisible,
  titleText,
  descriptionText,
  onClose,
  size,
  fullscreen,
  children,
}) => {
  const modalStyle = {
    ...styles.modalView,
    ...(size && { width: size }),
    ...(fullscreen && { width: '100%', height: '100%' }),
  };

  return (
    <ModalBase
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(false);
      }}
    >
      <View style={styles.container}>
        <View style={styles.background}></View>
        <KeyboardAvoidingView
          style={styles.centeredView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={modalStyle}>
            <View style={styles.columnContainer}>
              <Title style={styles.modalText}>{titleText}</Title>
              <Body style={styles.modalText}>{descriptionText}</Body>
              {children}
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalView: {
    minWidth: '100%',
    backgroundColor: '#fff',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
  },
  columnContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Modal;
