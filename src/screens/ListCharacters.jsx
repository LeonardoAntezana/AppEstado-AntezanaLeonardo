import React, { useEffect } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { BreadItem } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { breadSelected, filteredBreads } from '../redux/actions/bread.actions';

const ListCharacters = ({ navigation }) => {
  
  const dispatch = useDispatch()
  const categoryBreads = useSelector(state => state.breads.filteredBreads)
  const categorySelected = useSelector(state => state.categories.selectedCategory)

  useEffect(() => {
    dispatch(filteredBreads(categorySelected.id))
  }, [])

  const handleSelected = bread => {
    dispatch(breadSelected(bread.id))
    navigation.navigate('Details', { name: bread.name })
  }

  return (
    <View style={styles.screen}>
      <FlatList
      data={categoryBreads}
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