import { StyleSheet, Text, View,TextInput,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import logo from '../assets/images/icons8-security-shield-100.png'
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import styles from './../const/Styles';
import { StatusBar } from 'react-native';

const Forgot = ({navigation}) => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.Container}>
      <Image style={{height:120,width:120,marginTop:80}} source={logo}/>
      <Text style={styles.header}>Forgot Password</Text>
      <Text style={[styles.label, {textAlign:'center'}]}>Please enter your email address to reset your password</Text>
      <View style={{marginTop:30}}>
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email address..."
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />
    </View>
      </View>
      <TouchableOpacity style={[styles.button, {marginTop:30}]}  onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.buttontext}>Continue</Text>
      </TouchableOpacity>
      <Text style={[styles.label,{marginTop:25}]}>Don't remember your email?</Text>
      <Text style={[styles.label,{marginTop:-5}]}>Contact us at <Text style={{color:'#63a70a',textDecorationLine:'underline'}}>help@finpal.ai</Text></Text>
    </View>
  )
}

export default Forgot