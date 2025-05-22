import {Text, View ,StatusBar, TextInput,SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import general from './General'
import Button from './Button'

const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={general.container}>
      <Text style={general.down}>Register</Text>
      <View style={{width:'100%',alignItems:'center',marginVertical:30}}>
      <View style={general.inputcontainer}>
        <Text>Full Name</Text>
        <TextInput
        style={general.input}
        placeholder='Enter your Name'
        placeholderTextColor={'gray'}
        />
      </View>
      <View style={general.inputcontainer}>
        <Text>Email</Text>
        <TextInput
        style={general.input}
        placeholder='Enter your Email'
        placeholderTextColor={'gray'}
        />
      </View>
      <View style={general.inputcontainer}>
        <Text>Password</Text>
        <TextInput
        style={general.input}
        placeholder='Enter your Password'
        placeholderTextColor={'gray'}
        />
      </View>
      </View>
      <Button title="Sign Up" onPress={() => navigation.navigate("Verification")}/>
    </SafeAreaView>
  )
}

export default Signup
