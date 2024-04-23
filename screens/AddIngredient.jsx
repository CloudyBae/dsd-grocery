import React, { useContext, useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Modal } from '../components/Modal';
import Button from '../components/Button';
import { AntDesign } from '@expo/vector-icons';
import { BodySmall } from '../components/Typography';
import { USER_API_IP_URL } from '@env';

const defaultIngredientImage =
  'https://cdn-icons-png.freepik.com/512/6981/6981367.png';

export const AddIngredientModal = ({
  modalVisible,
  setModalVisible,
  onClose,
  fetchIngredients,
}) => {
  const { userId } = '1'; // fix when backend integrated
  const [showError, setShowError] = useState('');
  const [productData, setProductData] = useState({
    name: '',
    quantity: 0,
  });

  const incrementQuantity = () => {
    setProductData((prevData) => ({
      ...prevData,
      quantity: prevData.quantity + 1,
    }));
  };

  const decrementQuantity = () => {
    if (productData.quantity > 0) {
      setProductData((prevData) => ({
        ...prevData,
        quantity: prevData.quantity - 1,
      }));
    }
  };

  const handleSaveProduct = async () => {
    if (!productData.name || productData.quantity === 0) {
      setShowError('Please, fill in all fields');
      return;
    }

    try {
      const response = await fetch(
        `http://${USER_API_IP_URL}:8000/api/users/1/ingredients/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...productData,
            user: '1',
            image: defaultIngredientImage,
          }),
        }
      );
      if (!response.ok) {
        setShowError('Failed to save ingredient');
      }
      fetchIngredients();
      setModalVisible(false);
    } catch (error) {
      setShowError('Error saving ingredient');
      console.error('Error saving ingredient:', error);
    }
  };

  return (
    <Modal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      titleText='Add a Product 🍎'
      onClose={onClose}
      size='100%'
      fullscreen={false}
    >
      <View
        style={{
          ...styles.columnContainer,
          gap: 8,
          width: '100%',
          marginBottom: 20,
          gap: 15,
        }}
      >
        <TextInput
          style={styles.input}
          placeholder='Enter a product name...'
          value={productData.name}
          onChangeText={(text) =>
            setProductData({ ...productData, name: text })
          }
          placeholderTextColor='gray'
        />

        <View style={{ ...styles.columnContainer, alignItems: 'flex-start' }}>
          <View style={{ ...styles.rowContainer, ...styles.counterContainer }}>
            <Button kind='ghost' onPress={decrementQuantity}>
              <AntDesign name='minus' size={24} color='#121212' />
            </Button>
            <TextInput
              style={styles.counterInput}
              value={productData.quantity.toString()}
              onChangeText={(text) =>
                setProductData({ ...productData, quantity: parseInt(text) })
              }
            />
            <Button kind='ghost' onPress={incrementQuantity}>
              <AntDesign name='plus' size={24} color='#121212' />
            </Button>
          </View>
          {showError && (
            <View
              style={{
                ...styles.rowContainer,
                justifyContent: 'center',
                paddingTop: 20,
              }}
            >
              <BodySmall style={{ color: 'red', textAlign: 'center' }}>
                {showError}
              </BodySmall>
            </View>
          )}
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
          style={{ paddingBottom: 0 }}
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
  },
  label: {
    fontSize: 16,
  },
  counterContainer: {
    alignSelf: 'center',
    justifyContent: 'space-evenly',
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
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
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
