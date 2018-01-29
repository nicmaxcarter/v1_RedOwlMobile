/**
 * Register page for Red Owl App
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
  Alert
} from "react-native";
import RegisterForm from "../components/js/RegisterForm";

export default class Register extends Component<{}> {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          style={styles.background}
          source={require("../components/img/register_bg.jpg")}
        >
          <View style={styles.logoContainer}>
            <View style={styles.leftOfLogo}>
              <View style={styles.logoLine} />
            </View>
            <Image
              style={styles.logoImg}
              source={require("../components/img/red_owl_emblems_white_red.png")}
            />
            <View style={styles.rightOfLogo}>
              <View style={styles.logoLine} />
            </View>
          </View>
          <View style={styles.formContainer}>
            <RegisterForm navigation={this.props.navigation} />
          </View>
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
  },
  background: {
    flex: 1,
    flexDirection: "column",
    width: undefined,
    height: undefined
  },
  logoContainer: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
    paddingHorizontal: 10
  },
  leftOfLogo: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  rightOfLogo: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  formContainer: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 15,
    paddingBottom: 25
  },
  logoImg: {
    flex: 0.5,
    width: undefined,
    height: undefined,
    resizeMode: "contain"
  },
  logoLine: {
    height: 3,
    width: undefined,
    alignSelf: "stretch",
    backgroundColor: "#D14827"
  }
});
