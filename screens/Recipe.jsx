import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { useMemo, useState } from 'react';
import { useGetRecipeInfo } from '../hooks/useGetRecipeInfo';
import { BodySmall, ButtonLarge, Title } from '../components/Typography';
import { Octicons } from '@expo/vector-icons';
import Accordion from '../components/Accordion';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import RenderHTML from 'react-native-render-html';
import React, { useContext } from 'react';

const Detail = ({ title, value }) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.columnContainer}>
        <BodySmall>{title}</BodySmall>
        <ButtonLarge>{value}</ButtonLarge>
      </View>
    </View>
  );
};

export const RecipeScreen = () => {
  const route = useRoute();
  const { id } = route.params;
  const navigation = useNavigation();
  const { userId } = useContext(AuthContext);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isOpenMoreTags, setOpenMoreTags] = useState(false);

  const { recipe, loading } = useGetRecipeInfo(id);
  const ingredients = useMemo(() => {
    if (!recipe || !recipe.extendedIngredients) return null;
    return recipe?.extendedIngredients.map((ingredient, index) => (
      <View
        style={{ ...styles.rowContainer, gridGap: 6, alignSelf: 'flex-start' }}
        key={index}
      >
        <Octicons name='dot-fill' size={24} color='#72C08F' />
        <BodySmall key={index}>{ingredient.original}</BodySmall>
      </View>
    ));
  }, [recipe?.extendedIngredients]);

  const { width } = useWindowDimensions();
  const InnerHtmlContent = ({ value }) => {
    return <RenderHTML source={{ html: value }} contentWidth={width} />;
  };

  const Macros = () => {
    const nutrients = recipe?.nutrition?.nutrients;
    return (
      <View style={{ ...styles.columnContainer, alignItems: 'flex-start' }}>
        {nutrients.map(({ name, amount, unit, percentOfDailyNeeds }, index) => (
          <View key={index} style={{ ...styles.rowContainer, gap: 5 }}>
            <Octicons name='dot-fill' size={24} color='#52B175' />
            <View style={{ ...styles.rowContainer, gap: 5 }}>
              <BodySmall style={{ textTransform: 'uppercase' }}>
                {name}:
              </BodySmall>
              <ButtonLarge>
                {amount}
                {unit}
              </ButtonLarge>
            </View>
          </View>
        ))}
      </View>
    );
  };

  // partly working, need to fix connectiong to api
  useEffect(() => {
    const onClickFavourite = async () => {
      setIsFavourite(!isFavourite);
      try {
        const response = await fetch(
          'http://localhost:8000/favorite_recipes/${userId}/save/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe),
          }
        );
        if (!response.ok) {
          console.error('Failed to save favorite recipe');
        }
      } catch (error) {
        console.error('Error saving favorite recipe:', error);
      }
    };

    onClickFavourite();

    return () => {};
  }, [isFavourite, recipe, userId]);

  if (loading || !recipe) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const listItems = [
    { title: 'Summary', details: <InnerHtmlContent value={recipe?.summary} /> },
    {
      title: 'Instructions',
      details: <InnerHtmlContent value={recipe?.instructions} />,
    },
    {
      title: 'Ingredients',
      details: <View style={styles.columnContainer}>{ingredients}</View>,
    },
    {
      title: 'Nutrition',
      details: <Macros />,
    },
  ];

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Octicons
            name='x-circle-fill'
            size={26}
            color='#72C08F'
            style={{ margin: 20 }}
          />
        </Pressable>
        <Image
          source={{ uri: recipe.image }}
          style={{ width: '100%', height: 200 }}
          resizeMode='cover'
        />
        <ScrollView style={styles.detailContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.rowContainer}>
              <Title>{recipe.title}</Title>
              <Pressable
                style={styles.favoriteButton}
                onPress={onClickFavourite}
              >
                <Octicons
                  name={isFavourite ? 'heart-fill' : 'heart'}
                  size={22}
                  color={isFavourite ? '#e63946' : '#7C7C7C'}
                />
              </Pressable>
            </View>
            <View style={styles.categoriesContainer}>
              {recipe &&
                recipe?.diets.slice(0, 4).map((category, index) => (
                  <View key={index} style={styles.category}>
                    <BodySmall style={{ color: '#52B175' }}>
                      {category}
                    </BodySmall>
                  </View>
                ))}
              {!isOpenMoreTags && recipe?.diets.length > 4 && (
                <Pressable
                  style={styles.category}
                  onPress={() => setOpenMoreTags(true)}
                >
                  <BodySmall style={{ color: '#52B175' }}>+</BodySmall>
                </Pressable>
              )}

              {isOpenMoreTags && (
                <>
                  {recipe &&
                    recipe?.diets.slice(4).map((category, index) => (
                      <View key={index} style={styles.category}>
                        <BodySmall style={{ color: '#52B175' }}>
                          {category}
                        </BodySmall>
                      </View>
                    ))}
                </>
              )}
            </View>
            <View
              style={{
                ...styles.rowContainer,
                justifyContent: 'space-around',
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              <Detail title='Prep' value={`${recipe.readyInMinutes}m`} />
              <Detail title='Servings' value={recipe.servings} />
              <Detail
                title='Health Score'
                value={recipe?.healthScore?.toFixed(2)}
              />
            </View>
          </View>
          <View style={styles.ingredientsContainer}>
            <Accordion listItem={listItems} />
          </View>
        </ScrollView>
        <View style={styles.addToCartButtonContainer}>
          <Button isFullWidth={true} onPress={() => console.log('Add to Cart')}>
            Add missing ingredients to list
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    zIndex: 1,
  },
  detailContainer: {
    paddingVertical: 0,
    paddingHorizontal: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  columnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 200,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',

    gap: 5,
    flexWrap: 'wrap',
  },
  category: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#52B175',
    paddingVertical: 0,
    paddingHorizontal: 6,
    borderRadius: 5,
    marginTop: 10,
  },
  addToCartButtonContainer: {
    padding: 24,
    backgroundColor: 'transparent',
  },
  infoContainer: {
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ingredientsContainer: {},
  ingredientsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  favoriteButton: {
    position: 'relative',
    zIndex: 2,
  },
});
