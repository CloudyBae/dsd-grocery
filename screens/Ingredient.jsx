import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import AddItemBar from '../components/AddItemBar';

export const IngredientScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View style={styles.ingredientsContainer}>
            <AddItemBar />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ingredientsContainer: {
    display: 'Flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 50,
  },
});
