import { StyleSheet, Text, View ,StatusBar, TextInput,SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import general from '../Constants/General'
import Button from '../Components/Button'

const Signin = ({navigation}) => {
  return (
    <SafeAreaView style={general.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <Text style={general.down}>Sign In</Text>
      <View style={general.inputcontainer}>
        <Text>Full Name</Text>
        <TextInput
        style={general.input}
        placeholder='Enter your Name'
        placeholderTextColor={'gray'}
        />
      </View>
      <View style={general.inputcontainer}>
        <Text>Email</Text>
        <TextInput
        style={general.input}
        placeholder='Enter your Email'
        placeholderTextColor={'gray'}
        />
      </View>
      <View style={general.inputcontainer}>
        <Text>Password</Text>
        <TextInput
        style={general.input}
        placeholder='Enter your Password'
        placeholderTextColor={'gray'}
        />
      </View>
      <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center',marginTop:10}}>
        <View style={{height:1,width:'35%',backgroundColor:'black'}}/>
        <Text style={{fontSize:15}}>  OR  </Text>
        <View style={{height:1,width:'35%',backgroundColor:'black'}}/>
      </View>
        <View style={{flexDirection:'row', width:'35%',justifyContent:'space-between',margin:10 }}>
          <Image source={{uri:'https://img.icons8.com/?size=48&id=17949&format=png'}} style={general.google}/>
          <Image source={{uri:'https://img.icons8.com/?size=48&id=uLWV5A9vXIPu&format=png'}} style={general.google}/>
        </View>
        <Button title="Sign In" onPress={() => navigation.navigate("Bottomtab")}/>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={{position:'absolute',bottom:20}}>
        <Text style={{textAlign:'center'}}>Dont have an Account? <Text style={{color:'#803A32',fontWeight:'bold'}}>Sign Up</Text></Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Signin

const styles = StyleSheet.create({})