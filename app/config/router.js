import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import App from "../screens/App";

export const Root = StackNavigator({
  Splash: { screen: App }
});
