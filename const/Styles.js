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
    margin:20
},
header:{
    color:'white',
    fontSize:23,
    fontWeight:'bold'
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
    borderRadius: 20,
    height: 50,
    width:'100%'
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
    alignItems: 'center',
    marginTop: 20,
  },
  rememberText: {
    color: '#fff',
    marginLeft: 10,
  },
  con:{
    width:'100%'
  },
  button:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#63A70A'
  },

});
export default styles