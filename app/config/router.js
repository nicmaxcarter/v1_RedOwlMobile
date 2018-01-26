import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import Splash from "../screens/Splash";
import Login from "../screens/Login";

export const Root = StackNavigator(
  {
    // Splash: { screen: Splash },
    Login: { screen: Login }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
