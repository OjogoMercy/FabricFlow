import { StyleSheet, Text, View, ImageBackground,StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import general from './Components/General'

const IntroScreen = ({navigation}) => {
  return (
    <ImageBackground style={general.container}
    source={{uri:'https://img.freepik.com/free-photo/happy-good-looking-black-woman-wearing-grey-leather-coat-posing-beige-background-autumn-winter-fashion-concept_273443-127.jpg?t=st=1746788621~exp=1746792221~hmac=93ce7c7ae53a945cd1977da3fa3c8f9ba57c72c9342f8fe5517da3e2945b533c&w=996'}}
    opacity={0.5  }
  >
      <View style={general.overlay}>
        <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent/>
      <Text style={[general.down, {fontSize:33}]}>Home Of Fashion</Text>
      <Text style={general.text}>Looking for the best deals in terms of fashion without maxing out your credit card?  Look no further.</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',marginTop:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'30%'}}>
          <View style={{height:30,width:30,backgroundColor:'white',borderRadius:30}}/>
          <View style={{height:30,width:30,backgroundColor:'#E2725B',borderRadius:30}}/>
          <View style={{height:30,width:30,backgroundColor:'white',borderRadius:30}}/>
        </View>
        <TouchableOpacity style={general.button} onPress={()=> navigation.navigate('Signup')}>
          <Text style={general.buttontext}>Continue</Text>
        </TouchableOpacity>
      </View>
      </View> 
    </ImageBackground>
  )
}

export default IntroScreen

