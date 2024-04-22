import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Nav from '../components/Nav';
import {
  Title,
  Body,
  BodySmall,
  Caption,
  ButtonLarge,
  ButtonText,
  ButtonSmall,
} from '../components/Typography';

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
    <View style={styles.wholeContainer}>
      <View style={styles.container}>
        <View style={styles.textBoxContainer}>
          <Title style={styles.myDetails}>Username</Title>
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
        <View style={styles.textBoxContainer}>
          <Title style={styles.myDetails}>Email</Title>
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
                <ButtonText>Save</ButtonText>
              </TouchableOpacity>
              <TouchableOpacity
                title='Delete'
                onPress={handleDelete}
                style={[styles.buttonReset, styles.buttonOutline]}
              >
                <ButtonText>Cancel</ButtonText>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
      <Nav style={styles.navBar} />
    </View>
  );
};
const styles = StyleSheet.create({
  wholeContainer: {
    backgroundColor: '#fff',
    height: '100%',
  },
  container: {
    flexDirection: 'col',
    justifyContent: 'center',
    marginHorizontal: 16,
    flex: 1,
    gap: 32,
  },
  editSection: {
    gap: 16,
  },
  textBoxContainer: {
    gap: 6,
  },
  textBox: {
    backgroundColor: '#f2f2f2',
    color: '#a2a2a2',
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  textBoxEditing: {
    backgroundColor: '#F1F9F4',
    color: '#121212',
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 16,
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
