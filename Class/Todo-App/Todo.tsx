import { View, Text, TextInput ,StyleSheet,FlatList,TouchableOpacity, StatusBar, KeyboardAvoidingView } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons'
import {Tasks, addTask, removeAllTasks,getTasks,toggleLike} from './Todojavasctipt'
import Theme from './Colors'
import Button from '../FashionApp/Components/Button'
import light from '../../assets/images/icons8-sun-50.png'
import dark from '../../assets/images/icons8-night-64.png'

export default function Todo() {
  const [tasks, setTasks] = useState(Tasks);
  const [taskText, setTaskText] = useState('');
  const [darkMode, setDarkmode] = useState(false)
  const theme = darkMode ? Theme.lightTheme : Theme.darkTheme;

  //   const [todo,setTodos]  = useState([
  //   { id: '1', text: 'Buy groceries' ,liked:false},
  //   { id: '2', text: 'Walk the dog',liked:false },
  //   { id: '3', text: 'Read a book',liked:false },
  // ])

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
const removeTask = (taskId) => {
  const updatedTasks = tasks.filter(task => task.id !== taskId); 
  setTasks(updatedTasks);
};
 
  return (
    <View style={[styles.container1 ,{backgroundColor:theme.background}]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'}/>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
        <Text style={styles.bigtext}>Todo-App</Text>
        <TouchableOpacity style={styles.float1}>
          
        </TouchableOpacity>
      <TouchableOpacity style={styles.float1} activeOpacity={0.7} onPress={handleClearAll}>
            <Ionicons name='trash-outline' size={20} color='white'/>
        </TouchableOpacity>
      </View>
      <FlatList
  data={Tasks}
  keyExtractor={(item) => item.id.toString()}
  showsVerticalScrollIndicator={false}
  renderItem={({ item }) => (
    <View style={styles.todoItem}>
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
      <TouchableOpacity onPress={removeTask}>  
      <Ionicons name='trash-outline' size={20} color='#E2725B'/>
      </TouchableOpacity>
</View>
     
    </View>
  )}
      />
     
      
      <KeyboardAvoidingView style={[styles.starsRow,{alignSelf:'baseline'}]}>
        <TouchableOpacity activeOpacity={0.7} style={styles.float1} onPress={handleTask}>
            <Ionicons name='add' size={20} color='white'/>
        </TouchableOpacity>
        <TextInput 
        placeholder='Input'
        placeholderTextColor={'#ccc'}
        style={styles.inputcontainer}
        value={taskText}
        onChangeText={(value)=> setTaskText(value)}
        />
        
      </KeyboardAvoidingView>
       <TouchableOpacity style={styles.toggle} onPress={()=> setDarkmode(!darkMode)}>
        <Text style={{color:'white',fontWeight:'bold'}}>{ darkMode ? 'Dark mode ' : 'Light mode'}</Text>
      </TouchableOpacity>   
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
    padding:10,
    alignSelf:'center',
  },
  float1:{
    height:40,
    width:40,
    borderRadius:25,
    backgroundColor:'#E2725B',
    justifyContent:'center',
    alignItems:'center',
    elevation:3,
   
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