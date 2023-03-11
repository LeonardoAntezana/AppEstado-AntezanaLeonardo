import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { COLORS } from '../constants/colors'

const CharacterDetails = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Button title='go to home' color={COLORS.primary} onPress={() => navigation.popToTop()}/>
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