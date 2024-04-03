
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import { StyleSheet, Text, View } from 'react-native';
import MainButton from './components/MainButton';


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
      <Button onPress={() => console.log("click!")}>➕</Button>
      <Button disabled={true}>Disable</Button>
      <Button kind="ghost" onPress={() => console.log("click!")}>
        Sign Up
      </Button>
      <View style={{ display: "flex", flexDirection:"row", alignItems:"center" }}>
        <Button kind="outline" onPress={() => console.log("click!")}>
          ➖
        </Button>
        <Text>    1    </Text>
        <Button kind="outline" onPress={() => console.log("click!")}>
          ➕
        </Button>
      </View>
      <Button isLoading={true} onPress={() => console.log("click!")}>
        Sign Up
      </Button>



      <MainButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
