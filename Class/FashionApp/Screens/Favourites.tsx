import { Image, Text, TouchableOpacity, View,FlatList } from 'react-native'
import React, { useCallback } from 'react'
import general from '../Constants/General'
import Colors from '../Constants/Colors'
import { Ionicons,FontAwesome,AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import { StatusBar } from 'react-native'
import { useFocusEffect } from 'expo-router'
import Header from '../Components/Header'
import { useEffect } from 'react'
const Favourites = ({navigation}) => {
  const [products, setProducts] = useState([])
   const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
    .then((data) => {
      setProducts(data);
       })
  }
  useEffect(() => {
    fetchProducts();
  }, [])

  const renderItem = ({item}) => (
    <View style={general.con}>
    <TouchableOpacity activeOpacity={0.7} style={general.card} onPress={() => navigation.navigate('Details', {item})} >
    <Image source={{ uri: item.image}} style={general.image} />
    <View style={general.float}> <Ionicons name='heart' color={Colors.primary} size={20}/></View>
    <View style={{paddingHorizontal:5,}}>
          <Text style={general.name}>{item.name} <Text style={{ fontWeight: 'bold', color: Colors.primary }}>${ item.price}</Text></Text>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20}}> 
    <Ionicons name='star' color={Colors.primary} size={24}/>
    <View style={{height:30,width:30,borderRadius:30,backgroundColor:Colors.primary,alignItems:'center',justifyContent:'center'}}>  
      <Ionicons name='briefcase-outline' color={'white'} size={20}/></View>
    </View>
    </View>
    </TouchableOpacity>
  </View>
  )
  return (
    <View style={general.container1}>
     <Header title='Favourites'/>
     <FlatList
     data={products}
     renderItem={renderItem}
     numColumns={2}
     showsVerticalScrollIndicator={false}

     />
    </View>
  )
}

export default Favourites
