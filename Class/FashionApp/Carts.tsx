import { Image, Text, TouchableOpacity, View,FlatList } from 'react-native'
import React, { useCallback } from 'react'
import general from './Components/General'
import Colors from './Components/Colors'
import { Ionicons,FontAwesome,AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import { StatusBar } from 'react-native'
import { useFocusEffect } from 'expo-router'
import Header from './Components/Header'
import clothingData from './Components/Clothing'


const Carts = ({navigation}) => {
  const renderItem =({item}) => (
    <View style={general.long}>
    <Image
      source={{ uri:item.imageUrl }}
      style={general.img}
    />
    <View style={general.details}>
      <View style={general.rowBetween}>
        <Text style={general.tit}>{item.name}</Text>
        <Ionicons name="trash-outline" size={18} color="gray" />
      </View>
      <View style={general.rowBetween}>
        <Text style={general.meta}>Size (Medium)</Text>
        <Text style={general.meta}>Color (White)</Text>
      </View>
      <View style={general.rowBetween}>
        <Text style={general.price}>$345</Text>
        <View style={general.counter}>
          <AntDesign name="minus" size={16} color="red" />
          <Text style={general.qty}>2</Text>
          <AntDesign name="plus" size={16} color="red" />
        </View>
      </View>
    </View>
  </View>
  )
  return (
    <View style={general.container1}>
      <Header title='Carts'/>
     <FlatList
     data={clothingData}
     renderItem={renderItem}
     showsVerticalScrollIndicator={false}

     />
    </View>
  )
}

export default Carts
