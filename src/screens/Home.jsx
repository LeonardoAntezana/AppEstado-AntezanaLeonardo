import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Home</Text>
      <Button title='Go to Categories' onPress={() => navigation.navigate('Categories')}/>
    </View>
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