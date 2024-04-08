import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import MainButton from './components/MainButton';
import Macro from './components/Macro';
import CategoryButton from './components/CategoryButton';
import RecipeCard from './components/RecipeCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        id='add_to_basket_btn'
        isFullWidth={true}
        startEnhancer={<Text>✔️</Text>}
        endEnhancer={<Text>$12.96</Text>}
      >
        Add to the Basket
      </Button>
      <MainButton />
      <Macro macro={'Protein'} percentage={50} goal={100} />
      <CategoryButton
        title={'Plan Meal'}
        onPress={() => console.log('Plan meal')}
      />
      <RecipeCard
        title='Banana Pie'
        image={
          'https://assets.epicurious.com/photos/64dce3fb0581466b0dc4c9ea/1:1/w_2560%2Cc_limit/Banana-Cream-Pie_Recipe_2023-08-10_1221.jpg'
        }
        minutes={30}
        rating={4.7}
      />
      <AddProductCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
