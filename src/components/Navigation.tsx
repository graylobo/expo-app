import { Image, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import * as Notifications from "expo-notifications";
import * as Linking from "expo-linking";
import Constants from "expo-constants";
export default class Navigation extends Component {
  render() {
    if (Constants.platform) {
      if (Constants.platform.ios) {
        // iOS
      } else if (Constants.platform.android) {
        // Android
      }
      console.log("Constants.platform: ", Constants.platform);
    }

    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo.png")}
          resizeMode="contain"
        />
        <Image
          style={styles.mypage}
          source={require("../../assets/mypage.png")}
          resizeMode="contain"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "15%",
    flexDirection: "row",
  },
  logo: {
    width: "20%",
    height: 25,
  },
  mypage: {
    position: "absolute",
    right: "10%",
  },
});
