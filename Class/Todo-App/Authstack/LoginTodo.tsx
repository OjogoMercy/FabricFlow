import { Text, View, Alert, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import general from '../../FashionApp/Constants/General'
import Button from '../../FashionApp/Components/Button'
import Input from '@/components/textinputs'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { FIREBASE_AUTH } from '../Authentication/Firebase'

export default function LoginTodo({ navigation }) {
  const [Name, setName] = useState(null)
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // to collect ant validate the inputs of data

  const Submit = () => {
    if (!Name?.trim()) {
      Alert.alert("Enter your Name");
    } else if (Name.trim().length < 3) {
      Alert.alert("Name cannot be less than 3 characters")
    } else if (Name.trim().length > 15) {
      Alert.alert("Your name is too long ")
    } else if (!emailRegex.test(email.trim())) {
      Alert.alert("Please enter a valid email address")
    }
    else if (!email || !email.trim()) {
      Alert.alert("Please enter an email address")
    } else if (!password || !password.trim()) {
      Alert.alert("Enter a password")
    } else {
      const collectData = {
        id: Math.random,
        Name: Name.trim(),
        password: password,
        email: email.trim(),
      };
      console.log(collectData);
      console.log("Submitting...");
    }
  }

  return (
    <SafeAreaView style={general.container}>
      <Text style={general.down}>Register</Text>
      <View style={{ width: '100%', marginVertical: 30, alignItems: 'center' }}>
        <View style={general.inputcontainer}>
          <Input placeholder={'Name'} value={Name} onChangeText={setName} name={'FullName'} />
        </View>
        <View style={general.inputcontainer}>
          <Input value={email} onChangeText={setEmail} name={'Email'} placeholder={'Enter your email'} />
        </View>
        <View style={general.inputcontainer}>
          <Input value={password} onChangeText={setPassword} name={'Password'} isPassword={true} placeholder={'Enter your password'} />
        </View>
      </View>

      <Button title="Sign Up" onPress={Submit} />
      <View style={{ position: 'absolute', bottom: 20 }}>
        <Text style={{ textAlign: 'center' }}>
          Already have an Account?
          <Text
            style={{ color: '#803A32', fontWeight: 'bold' }}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            {' '}Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}
