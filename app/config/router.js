import React from "react";
import { StackNavigator } from "react-navigation";

import Splash from "../screens/Splash";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import Register from "../screens/Register";

export const Root = StackNavigator(
  {
    Splash: { screen: Splash },
    Login: { screen: Login },
    Register: { screen: Register },
    Dashboard: { screen: Dashboard },
    PrivacyPolicy: { screen: PrivacyPolicy }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
