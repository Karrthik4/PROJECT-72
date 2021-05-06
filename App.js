import React from 'react';
import { Text } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen'

export default function App() {
  return (
    <WelcomeScreen/>
  );
}