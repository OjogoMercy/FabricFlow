import { Text, View, Alert, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import general from '../../FashionApp/Constants/General'
import Button from '../../FashionApp/Components/Button'
import Input from '@/components/textinputs'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { useForm, SubmitHandler } from "react-hook-form";


export default function LoginTodo({ navigation }) {
  const Form = useForm<FormValues>();
  type FormValues = {
    email: string;
    password: string;
    Name:string
  }

  const [Name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // to collect ant validate the inputs of data

  const Submit = async () => {
    if (!Name.trim()) {
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
        id: Math.random.toString(),
        username: Name.trim(),
        email: email.trim(),
        password: password,
      };
      console.log(collectData);
      console.log("Submitting...");
      try {
        const response = await axios.post('https://fakestoreapi.com/users', collectData)
        navigation.navigate('Todo')
        if (response.status === 201 || response.status === 201) {
          Alert.alert("User created successfully!")
        await AsyncStorage.setItem('User', JSON.stringify(collectData))
        }else{Alert.alert("User has not been created")}
        console.log(`Data collected...`)
      }
      catch (error) {
        Alert.alert('Failed to save user data')
        console.log("Error when saaing user data")
      }
    }
  }
  const fetchData = async () => {
    const userData = await AsyncStorage.getItem('User');
    if (userData) {
      const parsed = JSON.parse(userData);
      console.log("UserData has been parsed!")
    }
  }
  return (
    <SafeAreaView style={general.container}>
      <Text style={general.down}>Register</Text>
      <Form>
        <View
          style={{ width: "100%", marginVertical: 30, alignItems: "center" }}
        >
          <View style={general.inputcontainer}>
            <Input
              placeholder={"Enter your fullname"}
              value={Name}
              onChangeText={setName}
              name={"FullName"}
            />
          </View>
          <View style={general.inputcontainer}>
            <Input
              value={email}
              onChangeText={setEmail}
              name={"Email"}
              placeholder={"Enter your email"}
            />
          </View>
          <View style={general.inputcontainer}>
            <Input
              value={password}
              onChangeText={setPassword}
              name={"Password"}
              isPassword={true}
              placeholder={"Enter your password"}
            />
          </View>
        </View>
      </Form>

      <Button title="Sign Up" onPress={Submit} />
      <View style={{ position: "absolute", bottom: 20 }}>
        <Text style={{ textAlign: "center" }}>
          Already have an Account?
          <Text
            style={{ color: "#803A32", fontWeight: "bold" }}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            {" "}
            Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
