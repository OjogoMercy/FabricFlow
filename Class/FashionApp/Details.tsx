import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View,FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import general from './Components/General'
import Colors from './Components/Colors'
import { Ionicons } from '@expo/vector-icons'
import jacket from './Components/jacket.png'
import { useState } from 'react'
import Clothes from './Components/Clothing'

export default function Details({route,navigation}) {
    const {item} = route.params;
  return (
    <SafeAreaView style={general.container1}>
        <View style={{flexDirection:'row',}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{padding:10}}>
            <Ionicons name='chevron-back' size={24} color={'black'} />
        </TouchableOpacity>
        <View style={[general.float, {position:'absolute',top:0,right:0}]}> <Ionicons name='heart' color={Colors.primary} size={20}/></View>
        </View>
      <Image source={{ uri: item.imageUrl }} style={{ width: '100%', height:'50%',position:'absolute',top:0 }} />
    </SafeAreaView>
  )
}