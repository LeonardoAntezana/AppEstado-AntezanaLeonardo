import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { FONTS } from '../constants/fonts'

const CharacterDetails = ({ route }) => {
  const { name, description, price, weight } = route.params
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>      
      <Text>${price}</Text>      
      <Text>{weight}</Text>      
    </View>
  )
}

export default CharacterDetails

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.OPSANSBOLD,
    marginBottom: 10
  },
  description: {
    maxWidth: '70%',
    textAlign: 'center'
  }
})