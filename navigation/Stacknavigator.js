import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,NavigationIndependentTree } from '@react-navigation/native';
import SignUp from '../Class/SignUp';
import SignIn from '../Class/SignIn';
import Flexbox from './../Class/Flexbox';
import Index from './../Class/Index';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Index" screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Flexbox" component={Flexbox} />
        <Stack.Screen name="Index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}
