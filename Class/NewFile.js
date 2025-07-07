import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react'

const NewFile = () => {
const endPoint = "https://reqres.in/api/users?page=1"
    const [user, setUser] = useState([])
    const fetchUsers = async () => {
        fetch.()
    }
  return (
    <View style={styles.page}>
          <Text>NewFile</Text>
          <FlatList
              data={user}
              renderItem={({ item }) => {
                  return (
                      <View>
                          <Text>{ item.first_name}</Text>
                      </View>
                  )
              }}
          />
    </View>
  )
}

export default NewFile

const styles = StyleSheet.create({
    page:{
        justifyContent:'center',
        flex:1,
    },
}))