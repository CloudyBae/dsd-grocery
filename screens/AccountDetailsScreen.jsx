import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { ButtonLarge } from '../components/Typography';

export const AccountDetailsScreen = () => {
  const [username, setUsername] = useState('jsmith');
  const [email, setEmail] = useState('johnsmith@gmail.com');
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
  setisEditing(true);
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
      <View styles={styles.inputSection}>
        <View style={styles.textBoxContainer}>
          <ButtonLarge>My Details</ButtonLarge>
          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#96d1ab',
              alignSelf: 'center',
              marginTop: 10,
              marginBottom: 15,
            }}
          />
          <ButtonLarge>Username</ButtonLarge>
          <TextInput
            style={styles.textBox}
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder='Account Username'
            editable={isEditing}
          />
        </View>
        <View style={styles.textBoxContainer}>
          <ButtonLarge>Email</ButtonLarge>
          <TextInput
            style={styles.textBox}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder='Email'
            editable={isEditing}
          />
        </View>
      </View>

      <View style={styles.editSection}>
        {!isEditing ? (
          <Button title='Edit' onPress={handleEdit} />
        ) : (
          <>
            <Button title='Save' onPress={handleSave} />
            <Button title='Delete' onPress={handleDelete} />
          </>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wholeContainer: {
    backgroundColor: '#fff',
    height: '100%',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 30,
  },
  inputSection: {
    flexDirection: 'column',
    width: '100%',
  },
  myDetails: {
    fontWeight: 'bold',
    width: 200,
  },
  textBoxContainer: {
    alignItems: 'center',
  },
  textBox: {
    flex: 0,
    borderColor: '#96d1ab',
    borderBottomWidth: 1,
    marginBottom: 5,
    padding: 10,
    width: 200,
    height: 80,
  },
  editSection: {
    marginLeft: 20,
  },
});
