import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'

export default function Header({title}) {
  const navigation = useNavigation();
  return (
    <View style={{padding:10,flexDirection:'row',marginTop:20,width:'100%'}}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{alignSelf:'flex-end',width:'10%'}}>
      <Ionicons name="chevron-back" size={26} color={'black'} />
      </TouchableOpacity>
      <View style={{alignItems:'center',width:'90%'}}>
      <Text style={{fontSize:22,fontWeight:'bold'}}>{title}</Text>
      </View>
    </View>
  )
}