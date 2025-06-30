import {Text, View , TextInput,SafeAreaView,ScrollView, KeyboardAvoidingView} from 'react-native'
import React, { useState } from 'react'
import general from '../Constants/General'
import Button from '../Components/Button'
import Input from '@/components/textinputs'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { FIREBASE_AUTH } from '../Authentication/Firebase'

const Signup = ({ navigation }) => {
  const [Name, setName] = useState(null)  
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()

  const submit = () => {
  const collectData = { 
    Name: Name,
    password: password,
    email:email
  }
  console.log(collectData)    
    }
  
  // const [loading, setLoading] = useState(false)
  
//     const Create = async () => {
//     setLoading(true);
//     try{
//       const response = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
//       alert('Check your email')
//     } catch (error) {
//       alert('User not logged in')
//       console.log('Error when loading!')
//     } finally {
//       setLoading(false)
//     }
  // }

  return (
    <SafeAreaView style={general.container}>
      <Text style={general.down}>Register</Text>
      <View style={{width:'100%',marginVertical:30,alignItems:'center'}} >
      <View style={general.inputcontainer}>
          <Input placeholder={'Name'} value={Name} onChangeText={setName}  name={'FullName'}/>
      </View>
      <View style={general.inputcontainer}>
          <Input value={email} onChangeText={setEmail} name={'Email'} isPassword={ true} placeholder={'Enter your email'} />
      </View>
      <View style={general.inputcontainer}>
      <Input value={password} onChangeText={setPassword} name={'Password'} isPassword={ true} placeholder={'Enter your password'} />
      </View>
      </View>
     
      <Button title="Sign Up" onPress={() => navigation.navigate("Sign")}/>
      <View style={{position:'absolute',bottom:20}}>
        <Text style={{ textAlign: 'center' }}>Already have an Account?
          <Text style={{ color: '#803A32', fontWeight: 'bold' }}
            onPress={() => navigation.navigate('Signin')}>
            Sign In
          </Text>
        </Text>
        </View>
    </SafeAreaView>
  )
}

export default Signup
