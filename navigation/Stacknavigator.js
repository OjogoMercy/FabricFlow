import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../Class/SignUp';
import SignIn from '../Class/SignIn';
import Flexbox from '../Class/Flexbox';
import Index from '../Class/Index';
import Register from '../Class/Register';
import Forgot from '../Class/FashionApp/Forgot';
import Welcome from '../Class/Welcome';
import Whatsapp from '../Class/Whatsapp';
import Instagram from '../Class/Instagram';
import Twitter from '../Class/Twitter';
import Todo from '@/Class/Todo-App/Todo';
import FashionNav from '@/Class/FashionApp/FashionNavigator';
import LoginTodo from '@/Class/Todo-App/Authstack/LoginTodo';
import NewFile from '@/Class/NewFile';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
      <Stack.Navigator initialRouteName="Todo" screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="SignUp" component={SignUp}/> */}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Flexbox" component={Flexbox} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Forgot" component={Forgot} /> 
        <Stack.Screen name="Whatsapp" component={Whatsapp} />
        <Stack.Screen name="Instagram" component={Instagram} />
          {/* Fashion App */}
          <Stack.Screen name='FashionNav' component={FashionNav}/>
        {/* Fashion App */}
        <Stack.Screen name="Twitter" component={Twitter} />
        <Stack.Screen name="Todo" component={Todo} />
        {/* <Stack.Screen name="LoginTodo" component={LoginTodo} /> */}
        <Stack.Screen name="NewFile" component={NewFile} />
      </Stack.Navigator>
  );
}
