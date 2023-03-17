import React from 'react'
import { FlatList, View, StyleSheet, Button } from 'react-native'
import { BREADS } from '../../data/breads';
import { BreadItem } from '../components';

const ListCharacters = ({ navigation, route }) => {
  const { categoryId } = route.params
  const breads = BREADS.filter(bread => bread.category === categoryId) 
  
  const handleSelected = bread => {
    navigation.navigate('Details', {
      ...bread
    })
  }

  return (
    <View style={styles.screen}>
      <FlatList
      data={breads}
      renderItem={({item}) => <BreadItem bread={item} onSelected={handleSelected}/>}
      keyExtractor={(bread) => bread.id}
    />
    </View>
  )
}

export default ListCharacters


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 80,
    backgroundColor: '#D9D9D9',
  },
})