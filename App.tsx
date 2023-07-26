import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
    Button,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function App() {
    const [test, setTest] = useState(0);
    const [dummy, setDummy] = useState([]);

    useEffect(() => {
        const res = axios
            .get(
                "https://dev-api.buybly.com/dummy/product?perPage=0&pageNumber=1"
            )
            .then((e) => {
                setDummy(e.data.data);
            });
    }, []);

    console.log("데이터:1", dummy);
    return (
        <View style={styles.container}>
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
                title="하위"
                onPress={() => {
                    setTest(test + 1);
                }}
            ></Button>
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
    },
    itemBox: {
        width: 200,
        height: 200,
        borderWidth: 1,
        borderColor: "lightgray",
    },
    itemContainer: {
        width: "90%",
        height: 200,
        overflow: "scroll",
    },
});
