import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const CharacterDetails = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>CharacterDetails</Text>
      <Button title='Volver al inicio' onPress={() => navigation.popToTop()}/>
    </View>
  )
}

export default CharacterDetails

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})