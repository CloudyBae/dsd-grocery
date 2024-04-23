import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Title, Caption, HeaderTitle, BodySmall } from './Typography';
import Button from '../components/Button';

const RecipeSummary = ({ image, name, savedOn }) => {
  const placeholderImage = require('../assets/generic_recipe.png');
  return (
    <View style={styles.container}>
      <View style={{ ...styles.rowContainer, gap: 10, height: '100%' }}>
        <View style={styles.columnContainer}>
          <Image
            source={placeholderImage ?? image}
            style={styles.recipeImage}
            resizeMode='cover'
          />
        </View>
        <View
          style={{
            ...styles.columnContainer,
            alignItems: 'flex-start',
            justifyContent: 'space-around',
            height: '100%',
          }}
        >
          <View
            style={{
              ...styles.columnContainer,
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <HeaderTitle style={{ fontSize: 16, width: '70%' }}>
              {name}
            </HeaderTitle>
            <View
              style={{
                ...styles.rowContainer,
                justifyContent: 'flex-start',
                alignItems: 'space-around',
                gap: 6,
              }}
            >
              <FontAwesome name='bookmark-o' color='#7C7C7C' size={18} />
              <Caption style={{ color: '#7C7C7C' }}>Saved on {savedOn}</Caption>
            </View>
          </View>
          <View style={{...styles.rowContainer, gap:40}}>
          <View style={styles.tagBox}>
            <BodySmall style={{ color: '#fff' }}>Generic Recipe</BodySmall>
            <MaterialCommunityIcons name='pot-steam' color='#fff' size={18} />
          </View>

            <Button kind='ghost' size='small' style={{ padding: 0 }}>
            <FontAwesome name='trash-o' color='#000' size={18} />
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const AcctRecipeBar = (props) => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [loading, setLoading] = useState(true); 
  const  userId  = '1';

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/users/${userId}/plannedRecipes/`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch response');
        }
        const savedRecipesResponse = await response.json();
        setSavedRecipes(savedRecipesResponse);
        setLoading(false); // Cambiar estado a false cuando la carga se complete
      } catch (error) {
        console.log('Error fetching saved recipes: ', error);
        setLoading(false); // Cambiar estado a false en caso de error
      }
    };
    fetchSavedRecipes();
  }, [userId]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#52B175" />
      </View>
    );
  }
  if (!savedRecipes.length && !loading) {
    return (
      <View style={styles.loaderContainer}>
        <Caption style={{textAlign:'center'}}>
          You have no saved recipes. Save recipes to view them here.
        </Caption>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: '#fff', padding: 20 }}>
      <Title>Saved Recipes</Title>
      {savedRecipes.map((recipe) => (
        <View style={{ ...styles.columnContainer, width: '100%' }} key={recipe.recipe_id}>
          <RecipeSummary
            name={recipe.name}
            savedOn={recipe.date_for}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderColor: '#c2c2c2',
    gap: 16,
    padding: 16,
    paddingLeft: 0,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  recipeImage: {
    height: 100,
    width: 100,
    borderRadius: 4,
  },
  tagBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    backgroundColor: '#F28A74',
    borderRadius: 4,
    padding: 2,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
  },
});

export default AcctRecipeBar;
