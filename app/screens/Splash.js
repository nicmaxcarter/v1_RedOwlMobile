/**
 * Splash page for Red Owl App
 * Should be timed to delay for load
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, Alert } from "react-native";

var loadingBubbles = "../components/img/loading_bubbles_1.png";

export default class Splash extends Component<{}> {
  constructor(props) {
    super(props);

    // setTimeout(() => {
    //   loadingBubbles = "../components/img/loading_bubbles_2.png";
    // }, 500);

    // setTimeout(() => {
    //   loadingBubbles = "../components/img/loading_bubbles_3.png";
    // }, 500);

    // setTimeout(() => {
    //   loadingBubbles = "../components/img/loading_bubbles_4.png";
    // }, 500);

    // setTimeout(() => {
    //   loadingBubbles = "../components/img/loading_bubbles_5.png";
    // }, 500);

    setTimeout(() => {
      this.props.navigation.navigate("Login");
    }, 2000);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoImgContainer}>
          <Image
            style={styles.splashLogo}
            source={require("../components/img/Red_owl_emblem_and_text.png")}
          />
          <Image style={styles.loading} source={require(loadingBubbles)} />
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
    flexDirection: "column",
    justifyContent: "center"
  },
  splashLogo: {
    // backgroundColor: "powderblue",
    flex: 0.45,
    width: undefined,
    height: undefined,
    resizeMode: "contain"
  },
  loading: {
    flex: 0.03,
    resizeMode: "contain",
    marginTop: 10
  }
});
