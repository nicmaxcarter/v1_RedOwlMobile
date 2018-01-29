/*
* Custom button to be used app-wide
*/

import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

export default class OrangeBtn extends Component<{}> {
  onPress = () => {
    this.props.navigation.navigate(this.props.page);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress} style={styles.menuBtn}>
        <Text style={styles.menuBtnTxt}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  menuBtn: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    paddingVertical: 7,
    marginVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: "#D14827",
    alignSelf: "stretch"
  },
  menuBtnTxt: {
    fontFamily: "Kelson Sans Bold",
    fontSize: 22,
    color: "#D14827"
  }
});
