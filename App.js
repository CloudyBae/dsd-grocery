import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import MainButton from './components/MainButton';
import Macro from './components/Macro';
import Hero from "./components/Hero";
import HeroBanner from './assets/hero.png'; 


export default function App() {
  return (
    <View style={styles.container}>
      <Hero image = {HeroBanner}/>
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
