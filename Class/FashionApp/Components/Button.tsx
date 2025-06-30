import { View, Text ,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import React from 'react'
import general from '../Constants/General'

export default function Button({title,onPress}) {
  return (
    <KeyboardAvoidingView style={{alignItems:'center',position:'absolute',bottom:30,width:'100%'}}>
 <TouchableOpacity style={[general.button , {width:'90%',height:45,marginVertical:30,}]} onPress={onPress}>
    <Text style={[general.buttontext, {fontWeight:'bold',fontSize:16}]}>{title}</Text>
  </TouchableOpacity>
    </KeyboardAvoidingView>
   
  )
}