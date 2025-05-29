import {Text, View ,StatusBar, TextInput,SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import general from '../Constants/General'
import Button from '../Components/Button'
const Verification = ({navigation}) => {
  return (
    <SafeAreaView style={general.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <Text style={general.down}>Verification</Text>
      <Text style={{opacity:0.5}}>OTP Code has been sent to +234-070****5235</Text>
      <Text style={{opacity:0.5, fontSize:11}}>Resend Code in <Text style={{color:'#E2725B'}}>55</Text>s</Text>
     <Button title="Verification" onPress={() => navigation.navigate("Succesful")}/>
    </SafeAreaView>
  )
}

export default Verification
 