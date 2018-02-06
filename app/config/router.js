import React from "react";
import { StackNavigator } from "react-navigation";

import Splash from "../screens/Splash";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import PrivacyPolicy from "../screens/PrivacyPolicy";
import Register from "../screens/Register";
import NewOrder from '../screens/NewOrder';

export const Root = StackNavigator(
  {
    NewOrder: { screen: NewOrder },
    Dashboard: { screen: Dashboard },
    Splash: { screen: Splash },
    Login: { screen: Login },
    Register: { screen: Register },
    
    PrivacyPolicy: { screen: PrivacyPolicy }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
