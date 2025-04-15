import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flexbox = () => {
  return (
    <View style={{flex:1, backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
    <View style={{backgroundColor:'yellow',borderRadius:200,height:320,width:320,borderWidth:5,alignItems:"center"}}>
        <View style={{height:220,width:220,borderWidth:5,backgroundColor:'green',flexDirection:'row',marginTop:45}}>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
            <View style={styles.circle}></View>
        </View>
        </View>
    </View>
  )
}

export default Flexbox

const styles = StyleSheet.create({
 circle:{height: 60,
        width:60,
        borderRadius:90,
        borderWidth:3,
        backgroundColor:'white',
        marginLeft:7
    },
})