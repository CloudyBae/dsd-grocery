import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useMemo, useState } from 'react';
import { useGetRecipeInfo } from '../hooks/useGetRecipeInfo';
import { BodySmall, ButtonLarge, Title } from '../components/Typography';
import { Octicons } from '@expo/vector-icons';
import Accordion from '../components/Accordion';
import Button from '../components/Button';
import Macro from '../components/Macro';
import { useRoute } from '@react-navigation/native';

const Detail = ({ title, value }) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.columnContainer}>
        <BodySmall>{title}</BodySmall>
        <ButtonLarge> {value}</ButtonLarge>
      </View>
    </View>
  );
};

export const RecipeScreen = () => {
  const route = useRoute();
  const { id } = route.params;
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

  const InnerHtmlContent = ({ value }) => {
    return <div dangerouslySetInnerHTML={{ __html: value }} />;
  };

  const Macros = () => {
    const percentProtein = recipe?.nutrition?.caloricBreakdown.percentProtein
    const percentFat = recipe?.nutrition?.caloricBreakdown.percentFat
    const percentCarbs = recipe?.nutrition?.caloricBreakdown.percentCarbs

    return (
      <>
      <View style={{...styles.rowContainer, width:'100%'}}>
        <Macro macro='Protein' percentage={percentProtein} goal={100} />
        <Macro macro='Fat' percentage={percentFat} goal={100} />
        <Macro macro='Carbs' percentage={percentCarbs} goal={100} />
      </View>
      </>
    );
  }

  const onClickFavourite = () => {
    setIsFavourite(!isFavourite);
  };

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
      details: <Macros/>,
    },
  ];

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
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
              {
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
                  {recipe?.diets.slice(4).map((category, index) => (
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
    alignItems: 'flex-end',
    margin: 20,
  },
});
