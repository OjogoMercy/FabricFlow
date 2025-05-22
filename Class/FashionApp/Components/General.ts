import  { StyleSheet } from 'react-native';
import Colors from './Colors';

const general = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    logo:{
        width:200,
        height:200,
        resizeMode:'contain'
    },
    general:{
        justifyContent: 'center',
        opacity:0.8,
        resizeMode:'cover'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, 
        backgroundColor: 'black', 
        opacity:0.6,
        justifyContent:'flex-end',
        padding:10
      },
      down:{
        fontSize:30,
        fontWeight:'bold',
        color:Colors.primary,
        marginBottom:15 
      },
      text:{
        color:'white',
        fontSize:12,
        marginBottom:5
      },
      button:{
        backgroundColor:Colors.primary,
        width:'35%',
        justifyContent:'center',
        borderRadius:20,
        height:35
      },
      buttontext:{
        textAlign:'center',
        color:'white'           
      },
      input: {
        height: 45,
        backgroundColor:'#ddd',
        paddingHorizontal: 10,
        borderRadius: 10,
        width:'100%',
        marginTop:8   
      },
      inputcontainer:{
        padding:10,
        width:'95%'
      },
      google:{
        height:30,
        width:30,
        borderRadius:30 
      },
  });

  export default general 
