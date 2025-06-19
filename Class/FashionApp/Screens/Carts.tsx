import { Image, Text, TouchableOpacity, View,FlatList } from 'react-native'
import React, { useRef, useMemo } from 'react'
import general from '../Constants/General'
import { Ionicons,AntDesign } from '@expo/vector-icons'
import Header from '../Components/Header'
import clothingData from '../Constants/Clothing'
import BottomSheet from '@gorhom/bottom-sheet';


const Carts = ({ navigation }) => {
  


  const renderItem =({item}) => (
    <TouchableOpacity activeOpacity={0.7} style={general.long}>
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
  </TouchableOpacity>
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
