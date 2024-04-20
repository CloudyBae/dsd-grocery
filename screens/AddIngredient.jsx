import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import { Modal } from '../components/Modal';
import { HeaderTitle, Title } from '../components/Typography';
import Button from '../components/Button';
import { AntDesign } from '@expo/vector-icons';

export const AddIngredientModal = ({
  modalVisible,
  setModalVisible,
  buttonText,
  onClose,
}) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSaveProduct = () => {
    console.log('Product Name:', productName);
    console.log('Quantity:', quantity);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <Modal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      titleText={'Add Product 🍎'}
      buttonText={buttonText}
      cancelText='Cancel'
      onClose={onClose}
      size='100%'
      fullscreen={false}
    >
      <View
        style={{
          ...styles.columnContainer,
          gap: 8,
          marginBottom: 20,
          width: '100%',
        }}
      >
        <HeaderTitle style={styles.label}>Product Name</HeaderTitle>
        <TextInput
          style={styles.input}
          placeholder='Enter a product name...'
          value={productName}
          onChangeText={(text) => setProductName(text)}
          placeholderTextColor='gray'
        />

        <View style={{ ...styles.columnContainer, alignItems: 'flex-start' }}>
          <View style={{ ...styles.rowContainer, ...styles.counterContainer }}>
            <Button kind='ghost' onPress={decrementQuantity}>
              <AntDesign name='minus' size={24} color='black' />
            </Button>
            <TextInput
              style={styles.counterInput}
              value={quantity.toString()}
              onChangeText={(text) => setQuantity(parseInt(text))}
            />
            <Button kind='ghost' onPress={incrementQuantity}>
              <AntDesign name='plus' size={24} color='black' />
            </Button>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.columnContainer,
          alignItems: 'center',
          justifyContent: 'center',
          width: 150,
        }}
      >
        <Button
          isFullWidth={true}
          onPress={handleSaveProduct}
          kind='primary'
          shape='rounded'
        >
          Save
        </Button>
        <Button
          isFullWidth={true}
          onPress={() => {
            setModalVisible(false);
            onClose && onClose();
          }}
          kind='ghost'
          shape='rounded'
        >
          Cancel
        </Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
  },
  counterContainer: {
    paddingHorizontal: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: 60,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
  },
  counterInput: {
    height: '100%',
    width: 80,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Gilroy-Bold',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontFamily: 'Gilroy-Medium',
  },
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  columnContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
