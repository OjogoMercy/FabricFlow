// App.js
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Screen({ title }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{title}</Text>
    </View>
  );
}

export default function App() {
  return (   
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Profile') iconName = 'person';
            else if (route.name === 'Notifications') iconName = 'notifications';
            else if (route.name === 'Settings') iconName = 'settings';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" children={() => <Screen title="Home Screen" />} />
        <Tab.Screen name="Profile" children={() => <Screen title="Profile Screen" />} />
        <Tab.Screen name="Notifications" children={() => <Screen title="Notifications Screen" />} />
        <Tab.Screen name="Settings" children={() => <Screen title="Settings Screen" />} />
      </Tab.Navigator>
  );
}
