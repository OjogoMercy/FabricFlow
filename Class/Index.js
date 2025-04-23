import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Data from '../const/Database';

const Index = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={Data}
        numColumns={3}
        keyExtractor={(item) => item.letter}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: '#000' }]}>
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
    width: '28%',
    padding: 20,
    borderRadius: 100,
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'black',
    height:90,
    width:90
  },
  letter: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
