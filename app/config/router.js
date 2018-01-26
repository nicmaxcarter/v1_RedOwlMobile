import React from "react";
import { StackNavigator } from "react-navigation";

import Splash from "../screens/Splash";
import Login from "../screens/Login";

export const Root = StackNavigator(
  {
    Login: { screen: Login },
    Splash: { screen: Splash }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
