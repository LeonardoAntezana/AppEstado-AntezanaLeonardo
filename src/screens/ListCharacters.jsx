import React from 'react'
import { FlatList } from 'react-native'
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
    <FlatList
    data={breads}
    renderItem={({item}) => <BreadItem bread={item} onSelected={handleSelected}/>}
    keyExtractor={(bread) => bread.id}
    />
  )
}

export default ListCharacters
