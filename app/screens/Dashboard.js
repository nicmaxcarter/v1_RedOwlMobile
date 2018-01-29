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
import OrangeBtn from "../components/js/OrangeBtn";

export default class Login extends Component<{}> {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          style={styles.background}
          source={require("../components/img/dashboard_bg.jpg")}
        >
          <View style={styles.rewardsContainer}>
            <Text style={styles.title}>YOUR REWARDS</Text>
            <Image
              style={styles.rewardsImg}
              source={require("../components/img/5_9_reward_progression.png")}
            />
          </View>
          <View style={styles.menuContainer}>
            <OrangeBtn
              navigation={this.props.navigation}
              page="Splash"
              title="NEW ORDER"
            />
            <OrangeBtn
              navigation={this.props.navigation}
              page="Splash"
              title="MY FAVORITES"
            />
            <OrangeBtn
              navigation={this.props.navigation}
              page="Splash"
              title="ORDER HISTORY"
            />
            <OrangeBtn
              navigation={this.props.navigation}
              page="Splash"
              title="MANAGE PROFILE"
            />
            <View style={styles.signOutContainer}>
              <View style={styles.centerLine} />
              <TouchableOpacity style={styles.signOutTouchable}>
                <Text style={styles.signOut}>SIGN OUT</Text>
              </TouchableOpacity>
              <View style={styles.centerLine} />
            </View>
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
    alignItems: "center",
    width: undefined,
    height: undefined,
    paddingHorizontal: 40
  },
  title: {
    paddingTop: 30,
    fontSize: 35,
    textAlign: "center",
    fontFamily: "Kelson Sans Bold",
    color: "black"
  },
  rewardsImg: {
    marginTop: 25,
    flex: 0.9,
    resizeMode: "contain"
  },
  rewardsContainer: {
    flex: 1.2
  },
  menuContainer: {
    flex: 1,
    width: "100%"
  },
  signOutContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    opacity: 0.5
  },
  centerLine: {
    flex: 1,
    backgroundColor: "#333333",
    height: 2
  },
  signOutTouchable: {
    flex: 1
  },
  signOut: {
    textAlign: "center",
    justifyContent: "center",
    color: "#333333"
  }
});
