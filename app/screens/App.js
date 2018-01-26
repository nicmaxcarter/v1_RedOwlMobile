/**
 * Splash page for Red Owl App
 * Should be timed to delay for load
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoImgContainer}>
          <Image
            style={styles.logoImg}
            source={require("../components/img/red_owl_emblem_and_text.png")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: "steelblue",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  logoImgContainer: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 10
  },
  logoTxtImgContainer: {
    flex: 1,
    flexDirection: "row",
    // alignItems: "stretch",
    justifyContent: "center"
  },
  logoImg: {
    // backgroundColor: "powderblue",
    flex: 0.55,
    alignSelf: "flex-end",
    width: 500,
    height: 250,
    resizeMode: "contain"
  },
  logoTxtImg: {
    // backgroundColor: "skyblue",
    flex: 0.7,
    alignSelf: "flex-start",
    width: 500,
    height: 100,
    resizeMode: "contain"
  }
});
