import {Text, View ,ScrollView, TouchableOpacity,FlatList,Image,StyleSheet} from 'react-native'
import React from 'react'
import { MaterialIcons ,Feather,MaterialCommunityIcons,AntDesign,FontAwesome,Ionicons,Entypo} from '@expo/vector-icons';
import { useState } from 'react';
import { StatusBar} from 'react-native';
import ChatData from '../../constants/ChatData';
import rose from '../assets/images/ROSE.jpg'

const Twitter = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
        <View style={styles.row}> 
        <Image source={rose} style={styles.profile}/>
        </View>
      <Text style={{fontSize:25,fontWeight:'condensed-bold',}}>Suggested follows</Text>
      <Text style={{color:'gray' , }}>Because you follow Tesla</Text>
      <Text style={{color:'gray',textAlign:'center'}}> Featuring Everyday Astronaut, Jennie Kim, Lalisa Manoban, Jisoo Kim, Park Chaeyoung and 7 others</Text>
    <TouchableOpacity style={[styles.button, {backgroundColor:'black'}]}>
        <Text style={[styles.buttontext, {color:'white'}]}>Follow all</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>Not now</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Twitter

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding:15
    },
    profile:{
        height:80,
        width:80,
        borderRadius:40
    },
    row:{
        flexDirection:'row',
        paddingHorizontal:5,
        justifyContent:'space-between'
    },
    button:{
        width:'90%',
        height:80,
        borderRadius:20,
        borderWidth:1,
        borderColor:'gray',
        justifyContent:'center',
        marginTop:15
    },
    buttontext:{
        fontWeight:'bold',
        fontSize:14,
        textAlign:'center',
        color:'black'
    },
})