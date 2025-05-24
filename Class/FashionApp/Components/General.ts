import  { StyleSheet } from 'react-native';
import Colors from './Colors';

const general = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical:10
    },
    container1: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
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
        opacity:0.7,
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
      row:{justifyContent:'space-between',
      width:'100%',
      flexDirection:'row',
      padding:20,
    },
    search:{
      backgroundColor:'#ccc',
      width:'100%',
      height:40,
      flexDirection:'row',
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center'
    },
    display:{
      backgroundColor:Colors.primary,
      height:180,
      borderRadius:20,
      width:'100%',
      marginVertical:20,
      padding:20,
      flexDirection:'row'
    },
    tabText:{
      // backgroundColor:'gray',
    },
    tabButton:{
      paddingHorizontal: 15,
      paddingVertical: 7,
      backgroundColor: '#f0f0f0',
      borderRadius: 25,
      marginHorizontal: 10,
    },
    activeTab:{
      backgroundColor:Colors.primary,
      borderRadius:25
    },
    activeText:{
      color:'white',
      fontWeight:'bold'
    },
    card: {
      backgroundColor: '#fff',
      padding: 15,
      marginBottom: 15,
      borderRadius: 10,
      elevation: 3,
      flexGrow:1
    },
    image: {
      width: '100%',
      height: 180,
      borderRadius: 10,
      marginBottom: 10,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    description: {
      color: '#555',
      marginTop: 5,
    },
  });

  export default general 
