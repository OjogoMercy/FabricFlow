import { StyleSheet, Text, View,TextInput,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import logo from '../assets/images/icons8-money-30 (1).png'
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import styles from '../navigation/constants/Styles';
import { StatusBar, ScrollView } from 'react-native';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirm, setConfirm] = useState(false);
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={'black'}/>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.header}>Sign up to Finpal</Text>
      <ScrollView>
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
      <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
        <View style={styles.lin}></View>
        <View style={styles.lin}></View>
        <View style={styles.lin}></View>
        <View style={[styles.lin, {backgroundColor:'#444'}]}></View>
      </View>
      <Text style={{color:'white',alignSelf:'flex-start',marginVertical:10}}>Password strength: Great!👍</Text>
      <View style={styles.con}>
      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password..."
          placeholderTextColor="#888"
          secureTextEntry={!confirm}
         
        />
          <TouchableOpacity onPress={() => setConfirm(!confirm)}>
          <MaterialIcons name={confirm ? 'visibility' : 'visibility-off'} size={20} color="#888" />
        </TouchableOpacity>
      </View>  
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttontext}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:-10}}>
      <Text style={styles.line}>I Already Have An Account</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register