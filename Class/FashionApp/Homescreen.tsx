import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View,FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import general from './Components/General'
import Colors from './Components/Colors'
import { Ionicons } from '@expo/vector-icons'
import jacket from './Components/jacket.png'
import { useState } from 'react'
import Clothes from './Components/Clothing'

const Homescreen = () => {
  const [active,setActive] = useState('All')
  const tabs = ['All','Men','Women','Kids'];

  const renderItem = ({ item }) => (
    <View style={general.card}>
      <Image source={{ uri: item.imageUrl }} style={general.image} />
      <View style={general.float}> <Ionicons name='heart' color={Colors.primary} size={20}/></View>
      <Text style={general.name}>{item.name}</Text>
  
    </View>
  );

  return (
    <SafeAreaView style={[general.container1 ,{paddingHorizontal:15}]}>
        <View style={general.row}>
        <View style={{alignItems:'flex-start',width:'50%'}}>
        <Text style={{fontSize:20, color:Colors.text,fontWeight:'bold'}}>Welcome Back!</Text>
        <Text style={{fontSize:14,fontWeight:'bold',marginLeft:10}}>Ojogo Mercy</Text>
        </View>
        <TouchableOpacity>
              <Ionicons name='notifications' size={20} color={Colors.primary}/>
        </TouchableOpacity>
      
        </View>
       <View style={general.search}>
        <Ionicons name='search' size={20} color={'gray'}/>
        <TextInput
        placeholder='Search'
        placeholderTextColor={'gray'}
        style={{width:'80%'}}
        />
        <Ionicons name='mic' size={20} color={'gray'}/>
       </View>
       <View style={general.display}>
       <View style={{width:'50%'}}>
        <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>Shop With Us Get 50% off</Text>
     </View>
     <Image source={jacket} style={{ resizeMode:'contain',height:150,width:'50%'}}/>
       </View>
      <View style={{flexDirection:'row'}}>
    {tabs.map((tab,index) => (
 <TouchableOpacity 
      key={tab}
      style={[general.tabButton, active === tab && general.activeTab]}
      onPress={() => setActive(tab)}>
       <Text style={[general.tabText, active === tab && general.activeText]}>
         {tab}
       </Text>
      </TouchableOpacity>
    ))}
    </View>
    <View>
    <FlatList
        data={Clothes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        showsVerticalScrollIndicator={false}
      />
  
    </View>
   
    </SafeAreaView>
  )
}

export default Homescreen
