import React from 'react';
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import AuthScreen from "../screens/auth/AuthScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import LoginScreen from "../screens/auth/LoginScreen"
import RegisterScreen from "../screens/auth/RegisterScreen"
import PasswordResetEmailSent from "../screens/auth/PasswordResetEmailSent"
import MainTabNavigator from './MainTabNavigator';
import LandScreen from "../screens/CarbonEmissionTab/LandScreen"
import TransportMeansScreen from "../screens/CarbonEmissionTab/TransportMeansScreen"
import CarbonEmissionScreen from "../screens/CarbonEmissionTab/CarbonEmissionScreen"
const AuthStack = createStackNavigator(
    {
        AuthScreen,
        LoginScreen,
        RegisterScreen,
        ForgotPasswordScreen,
        PasswordResetEmailSent,
        LandScreen,
        TransportMeansScreen,
        CarbonEmissionScreen
    },
    {
        initialRouteName: "AuthScreen"
    }
);

export default createAppContainer(

  createSwitchNavigator({
    //
    Auth: AuthStack,
    Main: MainTabNavigator,
  })
);
