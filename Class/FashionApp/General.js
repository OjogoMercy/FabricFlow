import  { StyleSheet } from 'react-native';

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
        color:'#E2725B',
        marginBottom:15 
      },
      text:{
        color:'white',
        fontSize:12,
        marginBottom:5
      },
      button:{
        backgroundColor:'#E2725B',
        width:'35%',
        justifyContent:'center',
        borderRadius:20,
        height:35
      },
      buttontext:{
        textAlign:'center',
        color:'white'           
      },
  });

  export default general 
