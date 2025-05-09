import {Text, View ,StatusBar, TextInput,SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import general from './General'

const Verification = ({navigation}) => {
  return (
    <SafeAreaView style={general.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <Text style={general.down}>Verification</Text>
      <Text style={{opacity:0.5}}>OTP Code has been sent to +234-070****5235</Text>
      <View style={{height:300}}/>
      <Text style={{opacity:0.5, fontSize:11}}>Resend Code in <Text style={{color:'#E2725B'}}>55</Text>s</Text>
      <TouchableOpacity style={[general.button , {width:'90%',height:45,marginVertical:30,position:'absolute',bottom:30}]} onPress={() => navigation.navigate('Succesful')}>
          <Text style={[general.buttontext, {fontWeight:'bold'}]}>Verification</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Verification
 