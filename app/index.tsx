import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigator from './../navigation/Stacknavigator';
import { NavigationContainer ,NavigationIndependentTree} from '@react-navigation/native';

const index = () => {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
  </NavigationIndependentTree>
  );
}

export default index
