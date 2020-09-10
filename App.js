/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './screens/StackNavigator';
import Player from './Player';
//
// import Home from './screens/Home'
//
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>

      {/* <Player /> */}
      {/*<Tracks /> */}
      {/* <Header title="Awsome music" /> */}
      {/* <TrackImage /> */}
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
