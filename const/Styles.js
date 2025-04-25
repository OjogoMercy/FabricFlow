import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
Container:{
    backgroundColor:'black',
    padding:20,
    flex:1,
    alignItems:'center'
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

});
export default styles