/**
 * Splash page for Red Owl App
 * Should be timed to delay for load
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, Alert } from "react-native";

export default class Splash extends Component<{}> {
  constructor(props) {
    super(props);

    setTimeout(() => {
      this.props.navigation.navigate("Login");
    }, 3000);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoImgContainer}>
          <Image
            style={styles.splashLogo}
            source={require("../components/img/Red_owl_emblem_and_text.png")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "steelblue",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  logoImgContainer: {
    // backgroundColor: "black",
    flex: 1,
    flexDirection: "row"
  },
  splashLogo: {
    // backgroundColor: "powderblue",
    flex: 0.55,
    width: undefined,
    height: undefined,
    resizeMode: "contain"
  }
});
