import {Text, View ,ScrollView, TouchableOpacity,FlatList,Image,StyleSheet} from 'react-native'
import React from 'react'
import { MaterialIcons ,Feather,MaterialCommunityIcons,AntDesign,FontAwesome,Ionicons} from '@expo/vector-icons';
import { useState } from 'react';
import { StatusBar} from 'react-native';
import ChatData from './../const/ChatData';
import instagram from '../assets/images/instagram.png'
import { LinearGradient } from 'expo-linear-gradient';


const Instagram = () => {
    const renderItem =({item}) =>(
        <View style={styles.flat}>
            <LinearGradient
  colors={['#ffd700', '#ff1493']}
  start={{ x: 0, y: 1 }}
  end={{ x: 1, y: 0 }}
  style={{ flex: 1, padding: 10,height:85,width:85,alignItems:'center',justifyContent:'center',borderRadius:50 }}
>
<TouchableOpacity style={styles.contain} activeOpacity={0.8}>
             <Image source={{uri:item.profilePic}} style={[styles.profile,{height:77,width:77,}]}/>
           </TouchableOpacity>
</LinearGradient>
          
           <Text style={styles.text}>{item.name}</Text>
        </View>
    );
    const renderItems =({item}) =>(
        <View style={styles.box}>
            <Feather name='x' size={15} color={'gray'} style={{alignSelf:'flex-end',margin:5}}/>
           <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
             <Image source={{uri:item.profilePic}} style={styles.profile}/>
           </TouchableOpacity>
           <View style={{paddingHorizontal:10,flexDirection:'row',alignItems:'center',alignSelf:'center'}}>
            <Text style={styles.text}>{item.name}</Text>
           <AntDesign name='checkcircle' size={10} color={'blue'} style={{marginTop:7,marginLeft:5}}/>
           </View>
           <Text style={{color:'gray',fontSize:12,textAlign:'center'}}>Popular</Text>
             <TouchableOpacity style={styles.button}>
             <Text style={{color:'white',fontWeight:'condensedBold',textAlign:'center'}}>Follow</Text>
             </TouchableOpacity>
        </View>
    );
const render =({item}) =>(
    <View style={{backgroundColor:'white'}}>
    <View style={styles.containe}>
        <TouchableOpacity>
        <Image
        source={{ uri:item.profilePic }} 
        style={styles.profilePic}
      />
        </TouchableOpacity> 
      <View style={styles.info}>
        <Text style={styles.username}>{item.name}</Text>
        <Text style={styles.suggested}>Suggested for you</Text>
      </View>
      <TouchableOpacity style={styles.followBtn}>
        <Text style={styles.followText}>Follow</Text>
      </TouchableOpacity>
      <MaterialIcons name="more-horiz" size={20} color="black" style={styles.menuIcon} />
    </View>
    <Image source={{uri:item.profilePic}} style={{height:400,width:'100%',resizeMode:'contain'}}/>
     <View style={styles.con}>
      <View style={styles.leftActions}>
        <TouchableOpacity style={styles.iconWithText}>
          <FontAwesome name="heart" size={22} color="red" />
          <Text style={styles.text}>96,2K</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWithText}>
          <Feather name="message-circle" size={22} color="black" />
          <Text style={styles.text}>339</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWithText}>
          <Feather name="send" size={22} color="black" />
          <Text style={styles.text}>7.290</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons name="bookmark-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
    <Text style={{textAlign:'center',margin:10}} numberOfLines={2}>Woke up feeling like, like 'Fuck up the World','Fuck up the World'. I think I just might ,'Fuck up the World','Fuck up the World' </Text>
    <Text style={{color:'gray',fontSize:14,marginHorizontal:10}}>View all comments...</Text>
    </View>
);

    return(
        <><ScrollView style={styles.Container}>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <View style={styles.row}>
                <Image source={instagram} style={styles.logo} />
                <AntDesign name='down' size={15} color={'black'} style={{ marginLeft: -130 }} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity>
                        <Feather name='heart' size={24} color={'black'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name='message1' size={24} color={'black'} style={{ alignSelf: "flex-end", marginLeft: 10 }} />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: 'red', height: 15, width: 15, borderRadius: 20, alignItems: 'center', justifyContent: 'center', right: -7, top: -5, position: 'absolute' }}><Text style={{ color: 'white', textAlign: 'center', fontSize: 10 }}>1</Text></View>
                </View>

            </View>
            <View>
                <FlatList
                    data={ChatData}
                    horizontal
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginVertical: 10, }} />
            </View>
            <View style={{ backgroundColor: '#f2f2f2' }}>
                <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', backgroundColor: '#f2f2f2' }}>
                    <Text style={{ fontWeight: 'bold' }}>Suggested for you </Text>
                    <Text style={{ color: 'blue', fontSize: 13 }}>See all</Text>
                </View>
                <View>
                    <FlatList
                        data={ChatData}
                        horizontal
                        renderItem={renderItems}
                        keyExtractor={(item) => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ marginVertical: 10, backgroundColor: '#f2f2f2' }} />
                </View>
            </View>

            <FlatList
                data={ChatData}
                renderItem={render}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ backgroundColor: '#f2f2f2', marginVertical: 10 }}
                ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#e0e0e0' }} />} />
        </ScrollView><View style={styles.last}>
                <TouchableOpacity style={styles.co}>
                    <FontAwesome name="home" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.co}>
                    <MaterialIcons name="search" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.co}>
                    <FontAwesome name="plus-square-o" size={22} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.co}>
                    <FontAwesome name="credit-card" size={22} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.co}>
                    <Ionicons name="person-circle-outline" size={27} color="black" />
                </TouchableOpacity>
            </View></>
    )
}
export default Instagram
const styles = StyleSheet.create({
 Container:{
  flex:1,
  padding:10,
  backgroundColor:'white'
 },
 text:{
    color:'black',
    textAlign:'center',
    fontSize:13
 },
 row:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    justifyContent:'space-between',
 
 },
 logo:{
    height:35,
    width:'35%',
    resizeMode:'contain'
   
 },
 flat:{
    paddingHorizontal:10,
    marginBottom:0
 },
 contain:{
    backgroundColor:'#fff',
    height:80,
    width:80,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
 },
 profile:{
    height:95,
    width:95,
    borderRadius:50,
    borderWidth:2,
    borderColor:'white'
 },
 box:{
    height:230,
    width:180,
    backgroundColor:'white',
    marginLeft:10,
    borderRadius:10,
    marginBottom:10
 },
 button:{
    backgroundColor:'blue',
    height:35,
    width:'90%',
    justifyContent:'center',
    borderRadius:10,
    alignSelf:'center',
    marginVertical:15
 },
 containe: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#c13584', 
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  suggested: {
    fontSize: 12,
    color: 'gray',
  },
  followBtn: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  followText: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  menuIcon: {
    marginLeft: 10,
  },
  con: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  text: {
    marginLeft: 5,
    fontSize: 13,
    color: 'black',
  },
  last:{
    flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#fff',
paddingVertical: 10,
width:'100%'
  },
  co:{
    alignItems:'center'
  },
})