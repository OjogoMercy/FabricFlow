import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View,FlatList, SafeAreaView } from 'react-native'
import React, { useCallback } from 'react'
import general from '../Constants/General'
import Colors from '../Constants/Colors'
import { Ionicons,FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'
import { StatusBar } from 'react-native'
import { useFocusEffect } from 'expo-router'

export default function Details({route,navigation}) {
    const [active,setActive] = useState('M')
  const tabs = ['S','M','L','XL',];
  const [item, setItem] = useState(route.params?.item);
    // Update item when route params change
  
    useFocusEffect(
      useCallback(() => {
        if (route.params?.item) {
          setItem(route.params.item);
        }
      }, [route.params?.item])
    );
  
  return (
    <View style={{flex:1}}>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'}/>
      {item && (
      <>
      <Image source={{ uri: item.imageUrl }} style={{ height: "50%", width: "100%",borderBottomLeftRadius:20,borderBottomRightRadius:20 }} />
      <View style={general.high}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={general.float1}>
            <Ionicons name="chevron-back" size={20} color={'black'} />
          </TouchableOpacity>
          <View style={general.float1}>
            <Ionicons name="heart" size={20} color={Colors.primary} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', padding: 10 ,justifyContent:'space-between'}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
            <View style={general.contain}>
      <View style={general.starsRow}>
        {[...Array(4)].map((_, index) => (
          <FontAwesome key={index} name="star" size={24} color="#C23D3D" />
        ))}
      </View>
      <Text style={general.reviewText}>2038 Reviews</Text>
    </View>
          </View>
          <View style={{padding:10,flex:1}}>
          <Text style={general.bigtext}>Select your size</Text>
          <View style={{marginTop:10, flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',gap:10}}>
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={tab}
              style={[general.tabBox, active === tab && general.activeBox]}
              onPress={() => setActive(tab)}
            >
              <Text style={[general.tabText, active === tab && general.activeText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
          </View>
          <View style={{height:35, backgroundColor:'#ddd',borderRadius:5, alignItems:'center', justifyContent:'center'}}><Text>     -      2     +    </Text></View>
          </View>
          <Text style={general.bigtext}>Description</Text>
           <Text style={{fontSize:15,marginTop:10}}>{item.description}</Text>
           <View style={general.space}>
            <Text style={{color:Colors.primary, fontSize:16, fontWeight:'bold'}}>$435</Text>
         <TouchableOpacity style={[general.button, {width:'60%', height:45}]} onPress={() => navigation.navigate('Carts')}>
          <Text style={general.buttontext}>Buy Now</Text>
          </TouchableOpacity>           
           </View>
          </View>

          </>
      )}

    </View>
  )
}