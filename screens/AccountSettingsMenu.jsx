import { View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AcctHeader from '../components/AcctHeader';
import Nav from '../components/Nav';
import Button from '../components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { SettingOption } from '../components/SettingOption';
import { useState } from 'react';
import { DietaryAllergenFilterScreen } from './DietaryAllergenFilter';
import { AccountDetailsScreen } from './AccountDetailsScreen';
import { AcctSavedRecipesScreen } from './AcctSavedRecipes';

export const SettingsScreen = {
  AccountSettings: 'AccountSettings',
  DietaryPreferences: 'DietaryPreferences',
  MyDetails: 'MyDetails',
  FavoriteRecipes: 'FavoriteRecipes',
};

export const AccountSettingsMenu = () => {
  const [showBackButton, setShowBackButton] = useState(false);
  const navigation = useNavigation();

  const [screenOption, setScreenOption] = useState(
    SettingsScreen.AccountSettings
  );
  return (
    <SafeAreaView style={styles.container}>
      <AcctHeader />

      {screenOption != SettingsScreen.AccountSettings && (
        <Pressable
          style={styles.backButton}
          onPress={() => setScreenOption(SettingsScreen.AccountSettings)}
        >
          <Ionicons
            name='chevron-back-circle'
            size={26}
            color='#72C08F'
            style={{ margin: 20 }}
          />
        </Pressable>
      )}
      <View style={styles.menuContainer}>
        {screenOption === SettingsScreen.AccountSettings && (
          <>
            <View style={styles.optionList}>
              <SettingOption
                title='Dietary Preferences'
                icon={<Ionicons name={'ban-outline'} size={18} />}
                onPress={() =>
                  setScreenOption(SettingsScreen.DietaryPreferences)
                }
              />
              <SettingOption
                title='My Details'
                icon={<AntDesign name={'idcard'} size={18} />}
                onPress={() => setScreenOption(SettingsScreen.MyDetails)}
              />
              <SettingOption
                title='Favorite Recipes'
                icon={
                  <MaterialCommunityIcons
                    name={'pot-steam-outline'}
                    size={18}
                  />
                }
                onPress={() => setScreenOption(SettingsScreen.FavoriteRecipes)}
              />
            </View>
            <View style={{ paddingHorizontal: 20 }}>
              <Button
                isFullWidth={true}
                onPress={() => navigation.navigate('Login')}
                kind='outline'
                shape='rounded'
                startEnhancer={
                  <MaterialIcons name={'logout'} size={18} color='#52B175' />
                }
              >
                Log Out
              </Button>
            </View>
          </>
        )}

        {screenOption == SettingsScreen.DietaryPreferences && (
          <DietaryAllergenFilterScreen />
        )}
        {screenOption == SettingsScreen.MyDetails && <AccountDetailsScreen />}

        {screenOption == SettingsScreen.FavoriteRecipes && (
          <AcctSavedRecipesScreen />
        )}
      </View>
      <Nav />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 200,
    zIndex: 1,
  },
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  innerContainer: {
    marginHorizontal: 16,
    marginTop: 16,
    alignItems: 'center',
  },
  menuItemContainer: {
    alignContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    display: 'flex',
    justifyContent: 'center',
    padding: 24,
    width: '100%',
    gap: 32,
  },
  menuItemInnerContainer: {
    gap: 24,
  },
  menuItem: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#c2c2c2',
    borderRadius: 18,
    borderWidth: 2,
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    padding: 24,
  },
  icon: {
    color: '#121212',
  },
});
