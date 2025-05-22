import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import general from './General'

export default function Button({title,onPress}) {
  return (
    <TouchableOpacity style={[general.button , {width:'90%',height:45,marginVertical:30,position:'absolute',bottom:30}]} onPress={onPress}>
    <Text style={[general.buttontext, {fontWeight:'bold'}]}>{title}</Text>
  </TouchableOpacity>
  )
}