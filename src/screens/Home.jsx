import React from 'react'
import { StyleSheet, View, Button} from 'react-native'
import { COLORS } from '../constants/colors'

const Home = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Button title='Go to Categories' color={COLORS.primary} onPress={() => navigation.navigate('Categories')}/>
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