import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ListCharacters = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>ListCharacters</Text>
      <Button title='Detail Character' onPress={() => navigation.navigate('Character')}/>
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