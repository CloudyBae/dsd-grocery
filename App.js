import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainButton from './components/MainButton';
import Macro from './components/Macro';

export default function App() {
  return (
    <View style={styles.container}>
      <MainButton />
      <Macro macro={"Protein"} percentage={50} goal={100}/>
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
