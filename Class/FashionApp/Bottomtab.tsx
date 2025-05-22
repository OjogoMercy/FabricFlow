// App.js
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Carts from './Carts';
import Favourites from './Favourites';
import Profile from './Profile';
import Homescreen from './Homescreen';
import Colors from './Components/Colors';

const Tab = createBottomTabNavigator();
export default function App() {
  return (   
      <Tab.Navigator
      
        screenOptions={({ route }) => ({
          headerShown : false,
          tabBarIcon: ({ color, size ,focused}) => {
            let iconName;

            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Profile') iconName = 'person-outline';
            else if (route.name === 'Carts') iconName = 'briefcase-outline';
            else if (route.name === 'Favourites') iconName = 'heart';

              const IconSize = focused ? 25: 20

            return <Ionicons name={iconName} size={IconSize} color={color} />;
          },
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          tabBarStyle:{ 
             borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        })}   
      >
        <Tab.Screen name="Home" component={Homescreen}/>
        <Tab.Screen name="Carts" component={Carts}/>
        <Tab.Screen name="Favourites" component={Favourites}/>
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}
