import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import ThirdPartySignIn from '../components/ThirdPartySignIn';

export const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View>
            <ThirdPartySignIn />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
