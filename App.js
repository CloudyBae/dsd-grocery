
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import MainButton from './components/MainButton';
import Macro from './components/Macro';
import CategoryCard from './components/CategoryCard';


export default function App() {
  return (
    <View style={styles.container}>
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
      <CategoryCard  title="Dairy & Eggs" image='https://www.sunfreshfl.com/wp-content/uploads/2023/05/milk-and-eggs-580h-2.png'/>
      <CategoryCard title="Frash Fruits & Vegetable" image='https://www.sunfreshfl.com/wp-content/uploads/2023/05/milk-and-eggs-580h-2.png'/>
      <CategoryCard title="Dairy & Eggs" image='https://www.sunfreshfl.com/wp-content/uploads/2023/05/milk-and-eggs-580h-2.png'/>
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
