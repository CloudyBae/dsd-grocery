import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainButton from './components/MainButton';
import Macro from './components/Macro';
import Accordion from './components/Accordion';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Accordion/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
