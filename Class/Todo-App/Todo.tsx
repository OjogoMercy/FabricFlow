import { View, Text, TextInput ,StyleSheet,FlatList,TouchableOpacity, StatusBar, KeyboardAvoidingView } from 'react-native'
import React,{useEffect, useState} from 'react'
import { Ionicons } from '@expo/vector-icons'
import {Tasks, addTask, removeAllTasks,getTasks,toggleLike,removeTask} from './Todojavasctipt'
import Theme from './Constants/Colors'
import { styles } from './Constants/Styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [darkMode, setDarkmode] = useState(false)
  const theme = darkMode ? Theme.darkTheme : Theme.lightTheme;

  // to store tasks in AsyncStorage
  const storeTasks = async (value: { id: number; text: string; liked: boolean; mark: boolean; pending: boolean }[]) => {
    try { 
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-Tasks',jsonValue)
    }
    catch (e) {
      console.log('Error saving tasks',e);
    }
  }
  // to return stored tasks
  const recieveTasks = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-Tasks');
      return jsonValue != null ? JSON.parse(jsonValue) : null; 
    }
    catch (e) {
      console.log('Error retrieving tasks', e);
      return [];
    }
  }
  // to render it when the app starts
  useEffect(() => {
    const fetchTasks = async () => {
      const savedTasks = await recieveTasks();
      setTasks(savedTasks)
    }
    fetchTasks();
  }, []);
 const handleClearAll = () =>   {
   const clear = removeAllTasks();
   setTasks(clear);
   storeTasks(clear);
 }
 const handleTask = () => {
  if (taskText.trim()) {
    const updatedTask = addTask(taskText);
    setTasks(updatedTask); 
    storeTasks(updatedTask)
    setTaskText('');
  }
};
const handleDeleteTask = (taskId) => {
  const updatedTasks = tasks.filter(task => task.id !== taskId); 
  setTasks(updatedTasks);
};
const removeTaskbutton = (taskId) => {
  const updatedTasks = removeTask(taskId);
  setTasks(updatedTasks)
  storeTasks(updatedTasks)
};
 
  return (
    <View style={[styles.container1 ,{backgroundColor:theme.background}]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent/>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
        <Text style={[styles.bigtext,{color:theme.text}]}>Todo-App</Text>
        <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.float1} onPress={()=> setDarkmode(!darkMode)} activeOpacity={0.7}>
          <Ionicons  name={ darkMode ? 'cloudy-night' : 'sunny' }size={20} color='white'/>
        </TouchableOpacity>
      <TouchableOpacity style={styles.float1} activeOpacity={0.7} onPress={handleClearAll}>
            <Ionicons name='trash-outline' size={20} color='white'/>
        </TouchableOpacity>
        </View>
      </View>
      <FlatList
  data={tasks}
  keyExtractor={(item) => item.id.toString()}
  showsVerticalScrollIndicator={false}
  renderItem={({ item }) => (
    <View style={[styles.todoItem,{backgroundColor:theme.inputBackground}]}>
      <Text style={[styles.todoText, item.liked && styles.likedText]}>
  {item.text}
</Text> 
<View style={{flexDirection:'row',gap:10}}>
<TouchableOpacity onPress={() => {
        toggleLike(item.id);
          setTasks(getTasks());
          storeTasks(getTasks())
      }}>
        <Ionicons name={item.liked ? 'checkbox' : 'square-outline'} size={20} color={item.liked ? '#E2725B' : '#555'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeTaskbutton(item.id)}>  
      <Ionicons name='trash-outline' size={20} color='#E2725B'/>
      </TouchableOpacity>
</View>
    </View>
  )} />
      <KeyboardAvoidingView  style={[styles.starsRow,{alignSelf:'baseline',backgroundColor:theme.inputBackground}]} behaviour="padding">
        <TextInput 
        placeholder='Input'
        placeholderTextColor={'#ccc'}
        style={[styles.inputcontainer, {backgroundColor:theme.inputBackground}]}
        value={taskText}
        onChangeText={(value)=> setTaskText(value)}
        />
        <TouchableOpacity activeOpacity={0.7} style={styles.float1} onPress={handleTask}>
        <Ionicons name='add' size={20} color='white'/>
        </TouchableOpacity>
      </KeyboardAvoidingView>  
    </View>
  )
}