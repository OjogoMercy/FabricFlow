import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
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