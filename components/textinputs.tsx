import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from '@/constants/Styles';

const Input = ({
  value,placeholder,keyboardType,onChangeText,IconName, name,
  isPassword = false,
}) => {
  const [hidePassword, setHidePassword] = useState(isPassword);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View>
      <Text>{name}</Text>
      <View style={styles.inputContainer}>
        <Ionicons name={IconName} size={20} color="#000" style={styles.icon} />
        <TextInput
          value={value}
          placeholder={placeholder}
          secureTextEntry={isPassword ? hidePassword : false}
          style={styles.input}
          keyboardType={keyboardType}
          placeholderTextColor={'#888'}
          onChangeText={onChangeText}
        />
        {isPassword && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={hidePassword ? 'eye-off' : 'eye'}
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
