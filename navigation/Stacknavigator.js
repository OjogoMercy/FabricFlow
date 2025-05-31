import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,NavigationIndependentTree } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';  

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
import Succesful from '../Class/FashionApp/Screens/Succesful';
import Signin from '../Class/FashionApp/Screens/Sign-In';
import Signup from '../Class/FashionApp/Screens/Sign-Up';
import Splash from '../Class/FashionApp/Screens/Splash';
import Verification from '../Class/FashionApp/Screens/Verification';
import IntroScreen from '../Class/FashionApp/Screens/IntroScreen';
import Bottomtab from './../Class/FashionApp/Bottomtab'
import Details from '@/Class/FashionApp/Screens/Details';
import Carts from '@/Class/FashionApp/Screens/Carts';
import Sheet from '@/Class/FashionApp/Screens/sheet';


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
 <NavigationIndependentTree>
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Flexbox" component={Flexbox} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Whatsapp" component={Whatsapp} />
        <Stack.Screen name="Instagram" component={Instagram} />
        {/* Fashion App */}
        <Stack.Screen name="Succesful" component={Succesful} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Carts" component={Carts} />
        <Stack.Screen name="Bottomtab" component={Bottomtab} />
        <Stack.Screen name="Sheet" component={Sheet} />
        <Stack.Screen name="Details" component={Details}  options={{ unmountOnBlur: true }}/>
        {/* Fashion App */}
        <Stack.Screen name="Twitter" component={Twitter} />
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>    
   
  );
}
