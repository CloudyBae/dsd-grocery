import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';
import AcctRecipeBar from '../components/AcctRecipeBar';
import { useNavigation } from '@react-navigation/native';

export const AcctSavedRecipesScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.homeContainer}>
            <Pressable
              onPress={() => navigation.navigate('Recipe', { id: item.id })}
            >
              <AcctRecipeBar />
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  homeContainer: {
    backgroundColor: '#f2f2f2',
  },
});

export default AcctSavedRecipesScreen;
