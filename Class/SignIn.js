import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import google from '../assets/images/google.png'
import facebook from '../assets/images/facebook.png'
import apple from '../assets/images/apple.png'
import { StatusBar } from 'react-native';



const SignIn = ({navigation}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [tick, setTick] = useState(false);
  return (
    <View style={{flex:1,backgroundColor:'white',padding:15,alignItems:'center'}}>
   <StatusBar backgroundColor="#fff"/>
    <View style={{justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:25,fontWeight:'bold',marginTop:20}}>Welcome back</Text>
  <Text style={{fontSize:14,margin:10}}>Continue Your Path</Text>
    </View>
    <View style={{marginBottom:20}}>
        <View style={styles.inputcontainer}>
            <Text style={{fontSize:12,color:'#999'}}>Email</Text>
            <TextInput
             style={styles.input}
             placeholderTextColor="#000"
            />
        </View>
        <View style={styles.inputcontainer}>
            <Text style={{fontSize:12,color:'#999'}}>Password</Text>
            <View style={{flexDirection:'row',borderWidth:2,borderRadius:10,borderColor:'#999',alignItems:'center'}}>
             <TextInput
             style={[styles.input, {width:'90%',borderColor:'white'}]}
             placeholderTextColor="#000"
             secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
            color="#999"
          />
            </TouchableOpacity>
            </View>
        </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'row',marginRight:100}}>
            <TouchableOpacity onPress={() => setTick(!tick)}>  
                 <Icon
                 name={tick ? 'checkbox-outline' : 'checkbox-blank-outline'}
                 size={20}
                 color="#999"
                 />
            </TouchableOpacity>
            <Text style={{fontSize:12}}>Remember Me</Text>
        </View>
        <Text style={{fontSize:12}}>Forgot Password?</Text>
      </View>
       <TouchableOpacity style={styles.button}>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Login</Text>
      </TouchableOpacity>
      <Text style={{margin:10}}>Or</Text>
      <View style={styles.box}>
        <Image source={facebook} style={styles.image}/>
        <Text style={styles.text}>Login with Facebook</Text>
      </View>
      <View style={styles.box}>
        <Image source={google} style={styles.image}/>
        <Text style={styles.text}>Login with Google</Text>
      </View>
      <View style={styles.box}>
        <Image source={apple} style={styles.image}/>
        <Text style={styles.text}>Login with Apple</Text>
      </View>
       <View style={{flexDirection:'row',marginTop:30,alignItems:'center',marginBottom:20}}>
        <Text style={{fontSize:12,marginRight:90,marginTop:8}}>Don't Have An Account?</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('SignUp')}>
            <Text style={{fontSize:20,color:'red',fontWeight:'bold'}}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignIn
const styles = StyleSheet.create({
  inputcontainer:{
      height:60,
      width:330,
      marginTop:30
  },
  input:{
      height:45,
      borderColor:'#999',
      borderWidth:2,
      borderRadius:10,
  },
  button:{
      backgroundColor:'red',
      width:'100%',
      height:50,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:15,
      elevation:9,
      marginTop:20
  },
  box:{
      flexDirection:'row',
      height:45,
      borderColor:'#999',
      borderWidth:2,
      borderRadius:10,
      width:'100%',
      marginTop:20,
      alignItems:'center',
  },
  image:{
      height:25,
      width:25,
      margin:20,
      resizeMode:'contain'
  },
  text:{
      marginLeft:50,
      fontWeight:'bold',
      fontSize:16
  },
})