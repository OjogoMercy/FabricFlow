// screens/IntroScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Splash ({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('IntroScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
