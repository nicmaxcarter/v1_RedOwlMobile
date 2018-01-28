import React from "react";
import { StackNavigator } from "react-navigation";

import Splash from "../screens/Splash";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";

export const Root = StackNavigator(
  {
    // Dashboard: { screen: Dashboard },
    Splash: { screen: Splash },
    Login: { screen: Login }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
