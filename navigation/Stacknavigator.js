import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,NavigationIndependentTree } from '@react-navigation/native';
import SignUp from '../Class/SignUp';
import SignIn from '../Class/SignIn';
import Flexbox from './../Class/Flexbox';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="SignUp" screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Flexbox" component={Flexbox} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}
