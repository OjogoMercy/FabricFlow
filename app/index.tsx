import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Data from '../const/Database'

const Index = () => {
  return (
    <View style={{ flex: 1,backgroundColor:'#fff'}}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.letter}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor:'#fff' }]}>
            <Text style={[styles.letter,{color:item.color}]}>{item.letter}  </Text>
            <Text style={[styles.description,{color:item.color}]}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  card: {
    width: '95%',
    padding: 20,
    borderRadius: 16,
    margin: 10,
    alignItems: 'center',
    flexDirection:'row'
    // elevation: 3,
  },
  letter: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
});
