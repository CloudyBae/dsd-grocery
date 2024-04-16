import { Text, View } from 'react-native';


export const AccountSettingsMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topMenu}>
        <Image />
        <View>
            <Text>John Smith</Text>
            <Text>johnsmith@gmail.com</Text>
        </View>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
   container: {

   },
   topMenu: {},

  });