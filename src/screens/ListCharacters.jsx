import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { COLORS } from '../constants/colors'

const ListCharacters = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Button title='Detail Character' color={COLORS.primary} onPress={() => navigation.navigate('Character')}/>
    </View>
  )
}

export default ListCharacters

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})