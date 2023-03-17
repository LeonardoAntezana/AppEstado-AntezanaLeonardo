import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
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
    <View style={styles.screen}>
      <FlatList
      data={CATEGORIES}
      renderItem={({item}) => <GridItem category={item} onSelected={handleSelected}/>}
      keyExtractor={(category) => category.id}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 80,
    backgroundColor: '#D9D9D9',
  }
})