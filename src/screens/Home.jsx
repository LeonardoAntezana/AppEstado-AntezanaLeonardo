import React from 'react'
import { FlatList, StyleSheet} from 'react-native'
import { GridItem } from '../components';
import {CATEGORIES} from '../../data/categories';

const Home = ({ navigation }) => {
  
  const handleSelected = category => {
    navigation.navigate('Categories', {
      categoryId: category.id,
      name: category.title
    })
  }

  return (
    <FlatList
    data={CATEGORIES}
    renderItem={({item}) => <GridItem category={item} onSelected={handleSelected}/>}
    keyExtractor={(category) => category.id}
    numColumns={2}
    />
  )
}

export default Home

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})