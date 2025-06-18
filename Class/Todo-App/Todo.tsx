import { View, Text, TextInput ,StyleSheet,FlatList,TouchableOpacity, StatusBar, KeyboardAvoidingView } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons'
import {Tasks, addTask, removeAllTasks,getTasks,toggleLike,removeTask} from './Todojavasctipt'
import Theme from './Colors'


export default function Todo() {
  const [tasks, setTasks] = useState(Tasks);
  const [taskText, setTaskText] = useState('');
  const [darkMode, setDarkmode] = useState(false)
  const theme = darkMode ? Theme.lightTheme : Theme.darkTheme;
 const handleClearAll = () =>   {
   const clear = removeAllTasks();
   setTasks(clear);
 }
 const handleTask = () => {
  if (taskText.trim()) {
    const updatedTask = addTask(taskText);
    setTasks(updatedTask); 
    setTaskText('');
  }
};
// const handleDeleteTask = (taskId) => {
//   const updatedTasks = tasks.filter(task => task.id !== taskId); 
//   setTasks(updatedTasks);
// };
const removeTaskbutton = (taskId) => {
  const updatedTasks = removeTask(taskId);
  setTasks(updatedTasks)
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
      }}>
        <Ionicons name={item.liked ? 'checkbox' : 'square-outline'} size={20} color={item.liked ? '#E2725B' : '#555'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeTaskbutton(item.id)}>  
      <Ionicons name='trash-outline' size={20} color='#E2725B'/>
      </TouchableOpacity>
</View>
     
    </View>
  )}
      />
      <KeyboardAvoidingView style={[styles.starsRow,{alignSelf:'baseline',backgroundColor:theme.inputBackground}]}>
        <TouchableOpacity activeOpacity={0.7} style={styles.float1} onPress={handleTask}>
            <Ionicons name='add' size={20} color='white'/>
        </TouchableOpacity>
        <TextInput 
        placeholder='Input'
        placeholderTextColor={'#ccc'}
        style={[styles.inputcontainer, {backgroundColor:theme.inputBackground}]}
        value={taskText}
        onChangeText={(value)=> setTaskText(value)}
        />
      </KeyboardAvoidingView>  
    </View>
  )
}

const styles = StyleSheet.create({
  container1:{
    flex: 1,
      backgroundColor:'#fff',
      padding: 15,
  },
  bigtext:{
    color: '#555',
      fontSize: 24,
      fontWeight: 'bold',
  },
  toggle: {
    backgroundColor: '#E2725B',
    alignItems:'center',
    alignSelf: 'center',
    justifyContent:'center',
    padding: 15,
    borderRadius:10
  },
  starsRow: {
    flexDirection: 'row',
    marginBottom: 5,
    borderColor:'#ccc',
    borderRadius:25,
    borderWidth:2,
    padding:7,
    alignSelf:'center',
  },
  float1:{
    height:40,
    width:40,
    borderRadius:25,
    backgroundColor:'#E2725B',
    justifyContent:'center',
    alignItems:'center',
    elevation: 3,
    marginLeft:7
   
   },
   inputcontainer:{
    padding:8,
    width:'85%',
  },
  likedText: {
    textDecorationLine: 'line-through',
    color: '#E2725B', 
  },
  todoItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    justifyContent:'space-between',
    flexDirection:'row'
  },
  todoText: {
    fontSize: 16,
    color:'black'
  },
})