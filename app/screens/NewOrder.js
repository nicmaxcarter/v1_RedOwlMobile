/**
 * Temporary New Order page for Red Owl App
 * Should be timed to delay for load
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

export default class NewOrder extends Component<{}> {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          style={styles.background}
          source={require("../components/img/register_bg_op1.png")}
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
            <View style={styles.container}>
            <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor="#C6CCCD"
            returnKeyType="go"
            underlineColorAndroid="transparent"
            placeholder="TEST 1"
            ref={input => (this.test1 = input)}
            />
            <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor="#C6CCCD"
            returnKeyType="go"
            underlineColorAndroid="transparent"
            placeholder="TEST 2"
            ref={input => (this.test2 = input)}
            />
            <View style={styles.divider} />
            <TouchableOpacity
            onPress={this.onSubmitPress}
            style={styles.submitButton}
            >
            <Text style={styles.submitButtonText}>SUBMIT</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
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
    paddingHorizontal: 10,
    // backgroundColor: 'skyblue'
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
  },
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 40,
    paddingBottom: 60,
    justifyContent: "flex-end",
    // backgroundColor: 'steelblue'
  },
  input: {
    backgroundColor: "white",
    marginHorizontal: 2,
    marginVertical: 7,
    color: "black",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#C6CCCD",
    textAlign: "center"
  },
  submitButton: {
    backgroundColor: "#C6CCCD",
    paddingVertical: 10,
    marginVertical: 7,
    borderWidth: 2,
    borderColor: "white"
  },
  submitButtonText: {
    textAlign: "center",
    color: "#333333",
    fontWeight: "700"
  },
  divider: {
    height: 1,
    width: undefined,
    backgroundColor: "black",
    marginHorizontal: 2,
    marginVertical: 10
  },
});
