import { View, StyleSheet, Image, Pressable, SafeAreaView } from 'react-native';
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
import { DietaryAllergenFilter } from './DietaryAllergenFilter';
import { AccountDetailsScreen } from './AccountDetailsScreen';

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
          <DietaryAllergenFilter />
        )}
        {screenOption == SettingsScreen.MyDetails && <AccountDetailsScreen />}

        {screenOption == SettingsScreen.FavoriteRecipes && <AcctSavedRecipes />}
      </View>
      <Nav />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 200,
    // top: 40
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
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: 300,
    backgroundColor: '#fff',
  },
  optionList: {
    display: 'flex',
    flexDirection: 'column',
  },
});
