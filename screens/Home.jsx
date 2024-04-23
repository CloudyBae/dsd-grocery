import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Nav from '../components/Nav';
import CategoryButton from '../components/CategoryButton';
import Macro from '../components/Macro';
import { useNavigation } from '@react-navigation/native';
import { Title } from '../components/Typography';
import { StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import { USER_API_IP_URL } from '@env';
import { FontAwesome5 } from '@expo/vector-icons';
import { FavoriteHomeSection } from './FavoriteHomeSection';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [macroData, setMacroData] = useState(null);

  useEffect(() => {
    const fetchMacros = async () => {
      try {
        const response = await fetch(
          `http://${USER_API_IP_URL}:8000/api/users/1/macros/`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Macros data: ', data);
        setMacroData(data);
      } catch (error) {
        console.log('Error fetching Macros: ', error);
      }
    };

    fetchMacros();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor='#fff' barStyle='dark-content' />

      <View
        style={{ ...styles.columnContainer, paddingTop: 20, paddingBottom: 20 }}
      >
        <View
          style={{
            ...styles.columnContainer,
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <FontAwesome5
            name='lemon'
            style={styles.icon}
            size={30}
            color='#52B175'
          />
          <Title style={{ fontSize: 28, marginTop: 6 }}>Welcome to Zest!</Title>
        </View>
        <Image
          source={require('../assets/recipe_banner.png')}
          style={{
            width: '100%',
            height: 100,
            borderRadius: 10,
          }}
          resizeMode='cover'
        />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.macrosContainer}>
            <Macro
              macro='Carbs'
              percentage={macroData && macroData.Carbs ? macroData.Carbs : 0}
              goal={100}
            />
            <Macro
              macro='Protein'
              percentage={
                macroData && macroData.Protein ? macroData.Protein : 0
              }
              goal={100}
            />
            <Macro
              macro='Fat'
              percentage={macroData && macroData.Fat ? macroData.Fat : 0}
              goal={100}
            />
          </View>
          <View style={styles.homeContainer}>
            <View>
              <TouchableOpacity
                accessible={true}
                accessibilityLabel='Ingredients button was pressed!'
                onPress={() => navigation.navigate('Settings')}
              ></TouchableOpacity>
            </View>
            <View style={styles.mainButtonsContainer}>
              <CategoryButton
                onPress={() => navigation.navigate('Ingredients')}
                title='Pantry'
                icon='kitchen'
              />
              <CategoryButton
                title='Recipes'
                icon='soup-kitchen'
                onPress={() => navigation.navigate('Filter')}
              />
            </View>
            <FavoriteHomeSection />
          </View>
        </ScrollView>
      </View>
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    paddingTop: 16,
    flex: 1,
  },
  columnContainer: {
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  macrosContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    padding: 16,
  },
  mainButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginVertical: 48,
  },
  favoriteRecipesContainer: {
    // marginBottom: 16,
  },
  favoriteRecipesTitle: {
    borderBottomWidth: 1,
    paddingBottom: 8,
    borderColor: '#c2c2c2',
    width: '100%',
    marginBottom: 12,
  },
  dietFilterContainer: {
    marginBottom: 32,
  },
});
