import {
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AcctHeader from '../components/AcctHeader';
import Nav from '../components/Nav';
import LogOutIcon from '../components/Icons/LogOutIcon';
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
import { ButtonText } from '../components/Typography';

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
    <SafeAreaView style={{ flex: 1 }}>
      <AcctHeader />

      {screenOption != SettingsScreen.AccountSettings && (
        <Pressable
          style={styles.backButton}
          onPress={() => setScreenOption(SettingsScreen.AccountSettings)}
        >
          <Ionicons name='chevron-back-circle' size={48} color='#53B175' />
        </Pressable>
      )}
      <View style={styles.menuContainer}>
        {screenOption === SettingsScreen.AccountSettings && (
          <>
            <View style={styles.optionList}>
              <SettingOption
                title='Dietary Preferences'
                icon={<Ionicons name={'ban-outline'} size={24} />}
                onPress={() =>
                  setScreenOption(SettingsScreen.DietaryPreferences)
                }
              />
              <SettingOption
                title='My Details'
                icon={<AntDesign name={'idcard'} size={24} />}
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
              <View style={{ marginTop: 48 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={[styles.buttonReset, styles.buttonOutline]}
                >
                  <LogOutIcon />
                  <ButtonText>Log Out</ButtonText>
                </TouchableOpacity>
              </View>
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
    top: '33%',
    left: 12,
    zIndex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#fff',
  },
  menuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  buttonReset: {
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 18,
    borderWidth: 2,
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    padding: 24,
  },
  buttonOutline: {
    borderColor: '#c2c2c2',
  },
  buttonPrimary: {
    backgroundColor: '#52B175',
    borderColor: '#52B175',
  },
  buttonDestructive: {
    backgroundColor: '#D47373',
    borderColor: '#D47373',
  },
});
