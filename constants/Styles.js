import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
Container:{
    backgroundColor:'black',
    padding:15,
    flex:1,
},
logo:{
    height:70,
    width:70,
    marginTop:50
},
header:{
    color:'white',
    fontSize:23,
    fontWeight:'bold',
    marginVertical:20
},
label: {
    color: '#fff',
    marginBottom: 6,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingHorizontal: 10,
    borderRadius: 30,
    height: 50,
    width:'100%',
    borderWidth:1,
    borderColor:'#444',
    marginBottom:10
  },
  input: {
    flex: 1,
    color: '#fff',
    marginLeft: 8,
  },
  icon: {
    marginRight: 4,
  },
  rememberContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft:-150,
    marginBottom:30
  },
  rememberText: {
    color: '#fff',
    marginLeft: 10,
    opacity:0.7
  },
  con:{
    width:'100%'
  },
  button:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#63A70A',
    borderWidth:1,
    borderColor:'#63A70A',
    height:50,
    margin:10,
    borderRadius:30,
    opacity:0.7
  },
  buttontext:{
    color:'white',
    fontWeight:'bold',
    opacity:0.9,
    fontSize:16
  },
  line:{
    color:'#63a70a',
    marginTop:30,
    textDecorationLine:'underline'
  },
  lin:{
    width:'24%',
    height:2,
    backgroundColor:'#63a70a',
    borderRadius:5
  },
  Whatsapp:{
    fontSize:25,
    fontWeight:'bold',
    color:'green',
  },
  lay:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'35%'
  },
  top:{
    justifyContent:'space-between',
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    marginBottom:20
  },
  tabButton:{
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeTab:{
    backgroundColor: '#ccffd9',
  },
  tabText:{
    fontSize:14,
    color:'black',
  },
  activetext:{
    color:'black',
    fontWeight:'bold',
  },
  chatContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',    
    alignItems: 'center', 
  },
  chatProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatContent: {            
    paddingHorizontal:5   
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatTime: {
    fontSize: 12,
    color: 'gray',
  },
  chatBody: {
    marginTop: 5,
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between'
   
  },
  chatMessage: {
    fontSize: 13,
    color: 'gray',
  },
  chatDate: {
    fontSize: 12,
    color: 'gray',
  },
  tag:{
    color:'white',
    fontSize:12,
    textAlign:'center'
  },
  float:{
    backgroundColor:'green',
    borderRadius:15,
    height:55,
    width:55,
    position:'absolute',
    bottom:20,
    right:20,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'flex-end'
    
  },
  

});
export default styles