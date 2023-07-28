import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Navigation from "../../Navigation";
import ModalComponent from "../../modal/Modal";

export default function App() {
  const [test, setTest] = useState(0);
  const [dummy, setDummy] = useState<any>([]);

  useEffect(() => {
    const res = axios
      .get("https://dev-api.buybly.com/dummy/product?perPage=0&pageNumber=1")
      .then((e) => {
        setDummy(e.data.data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Navigation />
      <FlatList
        style={styles.itemContainer}
        data={dummy}
        renderItem={({ item: e }) => (
          <View style={styles.itemBox}>
            <Image
              source={{ uri: e.titleImage }}
              style={{ width: "70%", height: "70%" }}
            />
            <Text>{e.name}</Text>
            <Text>{e.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id} // Assuming that your data objects have a unique 'id' property
        numColumns={3} // Adjust this value to change the number of columns
      />

      <Button
        title="Clickzxc"
        onPress={() => {
          setTest(test + 1);
          Alert.alert("short click");
        }}
      ></Button>
      <ModalComponent />
      <Text>Count: {test}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  itemBox: {
    width: "30%",
    height: 150,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  itemContainer: {
    width: "90%",
    height: 200,
    overflow: "scroll",
  },
});
