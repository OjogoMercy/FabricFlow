import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from '@/navigation/constants/Styles';
import { Controller,Control } from 'react-hook-form';

const Input = ({
  value,placeholder,onChangeText,IconName, text,control, name,rules={},
  isPassword = false,
}) => {
  const [hidePassword, setHidePassword] = useState(isPassword);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View>
      <Text>{text}</Text>
      <View style={styles.inputContainer}>
          <Ionicons
            name={IconName}
            size={20}
            color="#000"
            style={styles.icon}
        />
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field: { onChange, value,onBlur } }) => (
            <TextInput
              value={value}
              placeholder={placeholder}
              secureTextEntry={isPassword ? hidePassword : false}
              style={styles.input}
              keyboardType="default"
              placeholderTextColor={"#888"}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}>
        </Controller>

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
