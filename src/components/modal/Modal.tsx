import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from "react-native";

const ModalComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Modal
                style={styles.modalStyle}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View>
                    <View>
                        <Text>GGGGGGGGGGGGGGG</Text>
                        <TouchableHighlight
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.buttonTextStyle}>
                                Hide Modal
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text style={styles.buttonTextStyle}>Show Modal</Text>
            </TouchableHighlight>
        </View>
    );
};
export default ModalComponent;
const styles = StyleSheet.create({
    modalStyle: {
        backgroundColor: "red",
        width: "100%",
        height: 50,
    },
    buttonTextStyle: {
        backgroundColor: "blue",
        color: "white",
        padding: 10,
        borderRadius: 50,
    },
    logo: {
        width: "20%",
        height: 25,
    },
});
