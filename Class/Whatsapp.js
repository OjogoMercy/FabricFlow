import {Text, View ,ScrollView, TouchableOpacity,FlatList,Image} from 'react-native'
import React from 'react'
import { MaterialIcons ,Feather,MaterialCommunityIcons} from '@expo/vector-icons';
import { useState } from 'react';
import styles from './../const/Styles';
import { StatusBar } from 'react-native';
import ChatData from './../const/ChatData';

const Whatsapp = () => {
  const [active,setActive] = useState('All')
  const tabs = ['All','Unread','Groups'];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.chatContainer}>
      <Image source={{ uri: item.profilePic }} style={styles.chatProfilePic} />
      <View style={{flex:1}}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatTime}>{item.time}</Text>
        </View>
        <View style={styles.chatBody}>
          <Text style={styles.chatMessage}>{item.message}</Text>
          {item.tag ? (  <View style={{backgroundColor:'green',width:20,borderRadius:10,justifyContent:'center',height:20}}>
          <Text style={styles.tag}>{item.tag}</Text>
          </View>) : null}
        
          
        </View>
      </View>
    </View>
    );
  };
  return (
    <View style={[styles.Container, {backgroundColor:'white'}]}>
      <View style={styles.top}>
      <Text style={styles.Whatsapp}>Whatsapp</Text>
      <View style={styles.lay}>
      <Feather name='camera' size={23} color={'black'}/>
      <MaterialIcons name='search' size={23} color={'black'}/>
      <MaterialCommunityIcons name='dots-vertical' size={23} color={'black'}/>
      </View>
    </View>
    <View style={{flexDirection:'row',width:'100'}}>
    {tabs.map((tab) => (
      <TouchableOpacity
        key={tab}
        style={[styles.tabButton, active === tab && styles.activeTab]}
        onPress={() => setActive(tab)}>
          <Text style={[styles.tabText, active === tab && styles.activetext]}>
            {tab}
          </Text>
      </TouchableOpacity>
    ))}
    </View>
    <FlatList
      data={ChatData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      style={{marginTop:10}}
    /> 
    </View>
  )
}

export default Whatsapp
