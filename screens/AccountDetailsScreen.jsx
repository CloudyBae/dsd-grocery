import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Body, ButtonText, Title } from '../components/Typography';

export const AccountDetailsScreen = () => {
  const [username, setUsername] = useState('jsmith');
  const [email, setEmail] = useState('johnsmith@gmail.com');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Perform save action, like updating the username on a server
    setIsEditing(false);
  };

  const handleDelete = () => {
    // Perform delete action, like resetting the username to default
    setUsername('John Smith');
    setEmail('johnsmith@gmail.com');
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Title>My Details</Title>
      <View style={styles.inputSection}>
        <View style={styles.inputContainer}>
          <Body>Username</Body>
          <TextInput
            style={[
              styles.textBox,
              isEditing ? styles.textBoxEditing : styles.textBox,
            ]}
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder='Account Username'
            editable={isEditing}
          />
        </View>
        <View style={styles.inputContainer}>
          <Body>Email</Body>
          <TextInput
            style={[
              styles.textBox,
              isEditing ? styles.textBoxEditing : styles.textBox,
            ]}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder='Email'
            editable={isEditing}
          />
        </View>
      </View>

      <View style={styles.editSection}>
        {!isEditing ? (
          <TouchableOpacity
            onPress={handleEdit}
            style={[styles.buttonReset, styles.buttonOutline]}
          >
            <ButtonText>Edit</ButtonText>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              onPress={handleSave}
              style={[styles.buttonReset, styles.buttonPrimary]}
            >
              <ButtonText style={{ color: '#fff' }}>Save</ButtonText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleDelete}
              style={[styles.buttonReset, styles.buttonOutline]}
            >
              <ButtonText>Cancel</ButtonText>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    gap: 24,
  },
  inputSection: {
    gap: 16,
  },
  inputContainer: {
    gap: 4,
  },
  textBox: {
    borderWidth: 1,
    backgroundColor: '#f2f2f2',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 9,
    fontSize: 16,
    color: '#727272',
    fontFamily: 'Gilroy-Regular',
  },
  textBoxEditing: {
    backgroundColor: '#F1F9F4',
    color: '#121212',
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 16,
    fontFamily: 'Gilroy-Regular',
  },
  editSection: {
    gap: 20,
  },
  buttonReset: {
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 18,
    borderWidth: 2,
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    padding: 24,
  },
  buttonOutline: {
    borderColor: '#c2c2c2',
  },
  buttonPrimary: {
    backgroundColor: '#52B175',
    borderColor: '#52B175',
  },
  buttonDestructive: {
    backgroundColor: '#D47373',
    borderColor: '#D47373',
  },
});
