import { View, Text, Pressable, TextInput ,StyleSheet,FlatList,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Todo() {
    const [todo,setTodos]  = useState([
    { id: '1', text: 'Buy groceries' ,liked:false},
    { id: '2', text: 'Walk the dog',liked:false },
    { id: '3', text: 'Read a book',liked:false },
  ])

  const toggleLike = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };
  
 
  return (
    <View style={styles.container1}>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
      <Text style={styles.bigtext}>Todo-App</Text>
      <TouchableOpacity style={styles.float1} activeOpacity={0.7}>
            <Ionicons name='trash-outline' size={20} color='white'/>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => toggleLike(item.id)} >
               <Ionicons name={item.liked ?  'checkbox' : 'square-outline'} size={20} color={item.liked ? '#E2725B' : '#555'}/>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={[styles.starsRow,{position:'absolute',bottom:20}]}>
        <Pressable style={styles.float1}>
            <Ionicons name='add' size={20} color='white'/>
        </Pressable>
        <TextInput 
        placeholder='Input'
        placeholderTextColor={'#ccc'}
        style={styles.inputcontainer}
        />
        <Pressable style={styles.float1}>
            <Ionicons name='trash-outline' size={20} color='white'/>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container1:{
    flex: 1,
      backgroundColor: '#fff',
      padding: 15,
  },
  bigtext:{
    color: '#555',
      fontSize: 24,
      fontWeight: 'bold',
  },
  starsRow: {
    flexDirection: 'row',
    marginBottom: 5,
    gap:5,
    borderColor:'#ccc',
    borderRadius:10,
    borderWidth:2,
    padding:5
  },
  float1:{
    height:30,
    width:30,
    borderRadius:25,
    backgroundColor:'#E2725B',
    justifyContent:'center',
    alignItems:'center',
    elevation:3
   },
   inputcontainer:{
    padding:10,
    width:'80%'
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
  },
})