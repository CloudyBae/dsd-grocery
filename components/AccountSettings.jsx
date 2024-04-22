import { View, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AcctHeader from './AcctHeader';
import Nav from './Nav';
import Button from './Button';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { SettingOption } from './SettingOption';

export const AccountSettings = (setScreenOption) => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <View style={styles.optionList}>
        <SettingOption
          title='Dietary Preferences'
          icon={<Ionicons name={'ban-outline'} size={18} />}
          onPress={() => setScreenOption(SettingsScreen.MyDetails)}
        />
        <SettingOption
          title='My Details'
          icon={<AntDesign name={'idcard'} size={18} />}
          onPress={() => setScreenOption(SettingsScreen.MyDetails)}
        />
        <SettingOption
          title='Favorite Recipes'
          icon={<MaterialCommunityIcons name={'pot-steam-outline'} size={18} />}
          onPress={() => setScreenOption(SettingsScreen.MyDetails)}
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
    </View>
  );
};

const styles = StyleSheet.create({
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
    paddingBottom: 200,
    backgroundColor: '#fff',
  },
  optionList: {
    display: 'flex',
    flexDirection: 'column',
  },
});
