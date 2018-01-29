/**
 * Dashboard page for Red Owl App
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight
} from "react-native";

export default class Login extends Component<{}> {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          style={styles.background}
          source={require("../components/img/dashboard_bg.jpg")}
        >
          <Text style={styles.title}>YOUR REWARDS</Text>
          <Image
            style={styles.rewardsImg}
            source={require("../components/img/5_9_reward_progression.png")}
          />
          <TouchableHighlight style={styles.menuBtn}>
            <Text>NEW ORDER</Text>
          </TouchableHighlight>
        </ImageBackground>
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
    alignItems: "stretch"
    // backgroundColor: "#F5FCFF"
  },
  background: {
    // backgroundColor: "skyblue",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: undefined,
    height: undefined,
    paddingHorizontal: 40
    // resizeMode: "cover",
    // alignItems: "center"
  },
  title: {
    paddingTop: 30,
    fontSize: 35,
    textAlign: "center",
    fontFamily: "Kelson Sans Bold",
    color: "black"
  },
  rewardsImg: {
    flex: 0.4,
    resizeMode: "contain"
  },
  menuBtn: {
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
    marginVertical: 7,
    borderWidth: 3,
    borderColor: "#D14827",
    alignSelf: "stretch"
  },

  //---------------------------------------
  logoContainer: {
    // backgroundColor: "blue",
    flex: 0.75,
    flexDirection: "row",
    // alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 25
  },
  formContainer: {
    // backgroundColor: "red",
    flex: 1,
    flexDirection: "column",
    paddingBottom: 25
  },
  logoImg: {
    // backgroundColor: "powderblue",
    flex: 0.55,
    width: undefined,
    height: undefined,
    resizeMode: "contain"
  }
});
