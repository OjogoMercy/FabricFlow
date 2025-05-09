import {Text, View ,StatusBar, TextInput,SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import general from './General'
import logo from '../../assets/images/icons8-correct-160.png'
const Succesful = () => {
  return (
    <SafeAreaView style={general.container}>
       <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <Image source={logo} style={{resizeMode:'contain',marginVertical:30}}/>
      <Text style={{fontSize:20,fontWeight:'bold',marginVertical:10}}>Succesfully Registered </Text>
      <Text style={{textAlign:'center',opacity:0.5,margin:5}}>Congratulations, your account has been registered in this application</Text>
      <TouchableOpacity style={[general.button , {width:'90%',height:45,marginVertical:30,position:'absolute',bottom:30}]} onPress={() => navigation.navigate('Succesful')}>
          <Text style={[general.buttontext, {fontWeight:'bold'}]}>Thank U</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Succesful
