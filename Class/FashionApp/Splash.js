import React, { useEffect } from 'react';
import { View, Text, StyleSheet ,Image, StatusBar } from 'react-native';
import general from './General';
import logo from '../../assets/images/fashion.png'

export default function Splash ({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('IntroScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={[general.container , {backgroundColor:'#C15F4D'}]}>
      <StatusBar backgroundColor={'#C15F4D'}/>
     <Image source={logo} style={general.logo}/>
    </View>
  );
}


