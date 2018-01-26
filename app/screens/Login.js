/**
 * Login page for Red Owl App
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
  TouchableHighlight,
  Alert
} from "react-native";
import LoginForm from "../components/js/LoginForm";

export default class Login extends Component<{}> {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          style={styles.background}
          source={require("../components/img/login_bg_op1.jpg")}
        >
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImg}
              source={require("../components/img/red_owl_emblem_red.png")}
            />
          </View>
          <View style={styles.formContainer}>
            <LoginForm navigation={this.props.navigation} />
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
    // backgroundColor: "#F5FCFF"
  },
  background: {
    // backgroundColor: "skyblue",
    flex: 1,
    flexDirection: "column",
    width: undefined,
    height: undefined
    // resizeMode: "cover",
    // alignItems: "center"
  },
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
