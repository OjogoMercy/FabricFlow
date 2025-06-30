import { StyleSheet, Text, View ,StatusBar,SafeAreaView,Image, } from 'react-native'
import React, {useState} from 'react'
import general from '../Constants/General'
import Button from '../Components/Button'
import Input from '@/components/textinputs'
const Signin = ({ navigation }) => {
   const [Name, setName] = useState(null)
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  return (
    <SafeAreaView style={general.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <Text style={general.down}>Sign In</Text>
       <View style={general.inputcontainer}>
          <Input placeholder={'Name'} value={Name} onChangeText={setName}  name={'FullName'}/>
      </View>
      <View style={general.inputcontainer}>
          <Input value={email} onChangeText={setEmail} name={'Email'} isPassword={ true} placeholder={'Enter your email'} />
      </View>
      <View style={general.inputcontainer}>
      <Input value={password} onChangeText={setPassword} name={'Password'} isPassword={ true} placeholder={'Enter your password'} />
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
        <View style={{position:'absolute',bottom:20}}>
        <Text style={{textAlign:'center'}}>Dont have an Account? <Text style={{color:'#803A32',fontWeight:'bold'}} onPress={() => navigation.navigate('Signup')}>Sign Up</Text></Text>
        </View>
    </SafeAreaView>
  )
}

export default Signin

const styles = StyleSheet.create({})