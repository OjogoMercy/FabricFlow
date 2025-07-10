import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import styles from "@/navigation/constants/Styles";

const Input = ({
  placeholder,
  label,
  IconName,
  control,
  name,
  rules = {},
  isPassword = false,
  value,onChangeText
}) => {
  const [hidePassword, setHidePassword] = useState(isPassword);

  const togglePasswordVisibility = () => {
    setHidePassword((prev) => !prev);
  };

  return (
    <View>
      {label && <Text>{label}</Text>}
      <View style={styles.inputContainer}>
        {IconName && (
          <Ionicons
            name={IconName}
            size={20}
            color="#000"
            style={styles.icon}
          />
        )}

        {/* <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field: { onChange, value, onBlur } }) => ( */}
            <TextInput
              value={value} // prevents substring/length errors
              placeholder={placeholder}
              secureTextEntry={isPassword ? hidePassword : false}
              style={styles.input}
              keyboardType="default"
              placeholderTextColor="#888"
              onChangeText={onChangeText}
              // onBlur={onBlur}
              autoCapitalize="none"
            />
          {/* )}
        /> */}

        {isPassword && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={hidePassword ? "eye-off" : "eye"}
              size={20}
              color="#777"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
