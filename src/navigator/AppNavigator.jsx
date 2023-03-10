import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import ListCharacters from '../screens/ListCharacters'
import CharactersDetails from '../screens/CharacterDetails'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Categories' component={ListCharacters}/>
        <Stack.Screen name='Character' component={CharactersDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
