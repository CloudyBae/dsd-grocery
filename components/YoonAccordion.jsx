import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function YoonAccordion() {
  const [isFirstOpen, setIsFirstOpen] = React.useState(false);
  const [isSecondOpen, setIsSecondOpen] = React.useState(false);
  const [isThirdOpen, setIsThirdOpen] = React.useState(false);

  const toggleFirst = () => {
    setIsFirstOpen(!isFirstOpen);
  };

  const toggleSecond = () => {
    setIsSecondOpen(!isSecondOpen);
  };

  const toggleThird = () => {
    setIsThirdOpen(!isThirdOpen);
  };

  return (
    <>
      <StatusBar backgroundColor='#fff' />
      <View style={styles.container}>
        <TouchableOpacity style={styles.card} onPress={toggleFirst}>
          <Text style={styles.cardHeader}>Ingredients</Text>
          <View style={styles.arrowContent}>
            <AntDesign
              name={isFirstOpen ? 'up' : 'down'}
              size={20}
              color='black'
            />
          </View>
        </TouchableOpacity>
        {isFirstOpen && (
          <View style={styles.cardContent}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        )}

        <TouchableOpacity style={styles.card} onPress={toggleSecond}>
          <Text style={styles.cardHeader}>Instructions</Text>
          <View style={styles.arrowContent}>
            <AntDesign
              name={isSecondOpen ? 'up' : 'down'}
              size={20}
              color='black'
            />
          </View>
        </TouchableOpacity>
        {isSecondOpen && (
          <View style={styles.cardContent}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        )}

        <TouchableOpacity style={styles.card} onPress={toggleThird}>
          <Text style={styles.cardHeader}>Macros</Text>
          <View style={styles.arrowContent}>
            <AntDesign
              name={isThirdOpen ? 'up' : 'down'}
              size={20}
              color='black'
            />
          </View>
        </TouchableOpacity>
        {isThirdOpen && (
          <View style={styles.cardContent}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    width: 364,
  },
  card: {
    backgroundColor: '#52B175',
    borderRadius: 13,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    fontSize: 18,
  },
  cardContent: {
    padding: 5,
  },
  arrowContent: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
