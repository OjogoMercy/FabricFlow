import { StyleSheet, Text, View,TextInput,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import logo from '../assets/images/icons8-money-30 (1).png'
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import styles from './../const/Styles';
import { StatusBar } from 'react-native';

export default function Welcome  (navigation) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={'black'}/>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.header}>Sign in to Finpal</Text>
 <View style={styles.con}>
    <Text style={styles.label}>Email Address</Text>
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
      <View style={styles.con}>
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password..."
          placeholderTextColor="#888"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={20} color="#888" />
        </TouchableOpacity>
      </View>  
      </View>
      <View style={styles.rememberContainer}>
      <TouchableOpacity  onPress={() => setRemember(!remember)}>
        <MaterialIcons
          name={remember ? 'check-circle' : 'radio-button-unchecked'}
          size={20}
          color={remember ? '#63A70A' : '#888'}
        />
      </TouchableOpacity>
      <Text style={styles.rememberText}>Remember for 30 days</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button,{backgroundColor:'black'}]}>
        <Text style={[styles.buttontext, {color:'#63A70A'}]}>Create New Account</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={styles.line}>Forgot Password</Text>
      </TouchableOpacity>
     
    </View>
  )
  }

