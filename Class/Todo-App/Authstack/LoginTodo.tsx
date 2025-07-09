import { Text, View, Alert, SafeAreaView } from "react-native";
import React from "react";
import general from "../../FashionApp/Constants/General";
import Button from "../../FashionApp/Components/Button";
import Input from "@/components/textinputs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
  Name: string;
};

export default function LoginTodo({ navigation }) {
  const { handleSubmit, control } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("Submitted data:", data);

    const { Name, email, password } = data;

    if (!Name || Name.trim().length < 3) {
      return Alert.alert("Name must be at least 3 characters");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return Alert.alert("Please enter a valid email");
    }

    if (!password || password.trim().length < 6) {
      return Alert.alert("Password must be at least 6 characters");
    }

    const collectData = {
      id: Math.random().toString(),
      username: Name.trim(),
      email: email.trim(),
      password: password,
    };

    try {
      const response = await axios.post(
        "https://fakestoreapi.com/users",
        collectData
      );

      if (response.status === 201) {
        await AsyncStorage.setItem("User", JSON.stringify(collectData));
        Alert.alert("User created successfully!");
        navigation.navigate("Todo");
      } else {
        Alert.alert("User creation failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      Alert.alert("Failed to create user");
    }
  };

  return (
    <SafeAreaView style={general.container}>
      <Text style={general.down}>Register</Text>
      <View style={{ width: "100%", marginVertical: 30, alignItems: "center" }}>
        <View style={general.inputcontainer}>
          <Input
            placeholder="Enter your fullname"
            label="Name"
            control={control}
            name="Name"
            rules={{ required: true, minLength: 3, maxLength: 15 }}
          />
        </View>
        <View style={general.inputcontainer}>
          <Input
            placeholder="Enter your email"
            label="Email"
            control={control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            }}
          />
        </View>
        <View style={general.inputcontainer}>
          <Input
            control={control}
            name="password"
            label="Password"
            isPassword={true}
            placeholder="Enter your password"
            rules={{ required: true, minLength: 6 }}
          />
        </View>
      </View>

      <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />

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
