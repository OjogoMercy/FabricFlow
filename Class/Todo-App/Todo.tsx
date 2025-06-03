import { View, Text, Pressable, TextInput } from 'react-native'
import React from 'react'
import general from '../FashionApp/Components/General'
import { Ionicons } from '@expo/vector-icons'

export default function Todo() {
  return (
    <View style={general.container1}>
      <Text style={general.bigtext}>Todo-App</Text>
      <View style={[general.starsRow,{position:'absolute',bottom:20}]}>
        <Pressable style={general.float1}>
            <Ionicons name='add' size={24} color='white'/>
        </Pressable>
        <TextInput 
        placeholder='Input'
        placeholderTextColor={'#ccc'}
        style={general.input}
        />
        <Pressable style={general.float1}>
            <Ionicons name='trash-outline' size={24} color='white'/>
        </Pressable>
      </View>
    </View>
  )
}