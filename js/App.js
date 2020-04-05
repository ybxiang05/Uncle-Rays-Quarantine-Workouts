/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Rootstack from './navigation';

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Rootstack />
      </NavigationContainer>
    </>
  );
};

export default App;
