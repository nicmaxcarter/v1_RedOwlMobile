import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import Splash from "../screens/Splash";

export const Root = StackNavigator(
  {
    Splash: { screen: Splash }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
