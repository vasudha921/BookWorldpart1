import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTrans from './screens/BookTrans.js';
import SearchScr from './screens/SearchScr.js';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default function App() {
  return (
    <AppContainer/>
  )
}

const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:BookTrans},
  SearchBook:{screen:SearchScr},
})

const AppContainer = createAppContainer(TabNavigator);