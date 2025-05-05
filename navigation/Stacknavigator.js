import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,NavigationIndependentTree } from '@react-navigation/native';
import SignUp from '../Class/SignUp';
import SignIn from '../Class/SignIn';
import Flexbox from './../Class/Flexbox';
import Index from './../Class/Index';
import Register from './../Class/Register';
import Forgot from './../Class/Forgot';
import Welcome from './../Class/Welcome';
import Whatsapp from './../Class/Whatsapp';
import Instagram from './../Class/Instagram';
import Twitter from './../Class/Twitter';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationIndependentTree>
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Instagram" screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Flexbox" component={Flexbox} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Whatsapp" component={Whatsapp} />
        <Stack.Screen name="Instagram" component={Instagram} />
        <Stack.Screen name="Twitter" component={Twitter} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
  );
}
