import {Text, View ,StatusBar, TextInput,SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import general from '../Constants/General'
import logo from '../../assets/images/icons8-correct-160.png'
import Button from '../Components/Button'
const Succesful = ({navigation}) => {
  return (
    <SafeAreaView style={general.container}>
       <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <Image source={logo} style={{resizeMode:'contain',marginVertical:30}}/>
      <Text style={{faaaontSize:20,fontWeight:'bold',marginVertical:10}}>Succesfully Registered </Text>
      <Text style={{textAlign:'center',opacity:0.5,marginHorizontal:25}}>Congratulations, your account has been registered in this application</Text>
      <Button title="Thank You" onPress={() => navigation.navigate("Bottomtab")}/>
    </SafeAreaView>
  )
}

export default Succesful
