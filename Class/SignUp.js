import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native';

const SignUp = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:'white',padding:15,alignItems:'center'}}>
      <StatusBar backgroundColor="#fff"/>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:25,fontWeight:'bold',marginTop:20}}>Welcome</Text>
      <Text style={{fontSize:14,marginTop:10}}>Discover Your Path</Text>
        </View>
      <ScrollView style={{marginBottom:-20}}>
        <View style={styles.inputcontainer}>
            <Text style={{fontSize:12,color:'#999'}}>Name</Text>
            <TextInput
             style={styles.input}
             placeholderTextColor="#000"
            />
        </View>
        <View style={styles.inputcontainer}>
            <Text style={{fontSize:12,color:'#999'}}>Email</Text>
            <TextInput
             style={styles.input}
             placeholderTextColor="#000"
            />
        </View>
        <View style={styles.inputcontainer}>
            <Text style={{fontSize:12,color:'#999'}}>Password</Text>
            <TextInput
             style={styles.input}
             placeholderTextColor="#000"
            />
        </View>
        <View style={styles.inputcontainer}>
            <Text style={{fontSize:12,color:'#999'}}>Confirm Password</Text>
            <TextInput
             style={styles.input}
             placeholderTextColor="#000"
            />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={{fontSize:12,marginTop:20}}>By Clicking On SignUp You Accept Our <Text style={{color:'#000fff'}}>Terms Of Service</Text> And</Text>
      <Text style={{color:'#000fff',fontSize:12}}>Privacy Policy</Text>
      <View style={{flexDirection:'row',marginTop:30,alignItems:'center',marginBottom:20}}>
        <Text style={{fontSize:12,marginRight:90,marginTop:8}}>Already Have An Account?</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('SignIn')}>
            <Text style={{fontSize:20,color:'red',fontWeight:'bold'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp

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
        marginTop:-20
    },
    
})