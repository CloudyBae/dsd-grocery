import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainButton from './components/MainButton';
import Macro from './components/Macro';
import Accordion from './components/Accordion';
import Button from "./components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <MainButton />
      <Macro macro={"Protein"} percentage={50} goal={100}/>
      <Accordion/>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        id="add_to_basket_btn"
        isFullWidth={true}
        startEnhancer={<Text>✔️</Text>}
        endEnhancer={<Text>$12.96</Text>}
      >
        Add to the Basket
      </Button>
      <MainButton />
      <Macro macro={"Protein"} percentage={50} goal={100}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});