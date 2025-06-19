import  { StyleSheet } from 'react-native';
import Colors from './Colors.ts'
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
      padding: 15,
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
        color:'white' ,
        fontWeight:'bold',
        fontSize:15          
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
      justifyContent:'center',
      marginBottom:10
    },
    display:{
      backgroundColor:Colors.primary,
      height:180,
      borderRadius:20,
      width:'100%',
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
      borderRadius: 10,
      width:130,
      height:220,
      elevation:3
    },
    image: {
      width: '100%',
      height:130,
      borderRadius: 20,
      marginBottom: 10,
      resizeMode:'stretch'
    },
    name: {
      fontWeight: 'bold',
      fontSize: 11,
    },
    description: {
      color: '#555',
      marginTop: 5,
    },
    float:{
     height:30,
     width:30,
     borderRadius:25,
     backgroundColor:'white',
     position:'absolute',
     top:10,
     right:5,
     justifyContent:'center',
     alignItems:'center',
     elevation:3
    },
    con:{
      marginVertical:20,
      padding:20,
    },
    cover:{ 
      width: '100%',
       height:'50%',
       borderBottomRightRadius:20,
       borderBottomLeftRadius:20,
       },
       float1:{
        height:30,
        width:30,
        borderRadius:25,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        elevation:3
       },
       high:{
        flexDirection: "row",
         position: 'absolute', 
         top: 40,
        left: 0,
         right: 0, 
        justifyContent: 'space-between',
         paddingHorizontal: 10,
        alignItems:'center' 
       },
       contain: {
        alignItems: 'center',
      },
      starsRow: {
        flexDirection: 'row',
        marginBottom: 5,
        gap:5
      },
      reviewText: {
        fontSize: 14,
        color: 'gray',
        fontWeight: '500',
      },
      tabBox: {
        backgroundColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 13,
        borderRadius: 6,
      },
      activeBox: {
        backgroundColor: '#C23D3D',
      },
      bigtext:{fontSize:18,
        fontWeight:'bold',
        marginTop:10
      },
      space:{justifyContent:'space-between',
      alignSelf:'baseline',
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      paddingHorizontal:15
    },
    long: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      marginVertical: 8,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
    },
    img: {
      width: 70,
      height: 90,
      borderRadius: 8,
    },
    details: {
      flex: 1,
      paddingLeft: 10,
      justifyContent: 'space-between',
    },
    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6,
    },
    tit: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    meta: {
      fontSize: 13,
      color: '#555',
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'red',
    },
    counter: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    qty: {
      marginHorizontal: 8,
      fontSize: 16,
    },
    profile:{height:100,
      width:100,
      borderRadius:50,
      borderColor:Colors.primary,
      borderWidth:3,
      alignSelf:'center',
      marginLeft:20,
      marginTop:20
    },
  });

  export default general 
