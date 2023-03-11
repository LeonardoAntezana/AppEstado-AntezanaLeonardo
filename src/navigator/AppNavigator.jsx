import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { COLORS } from '../constants/colors'

import Home from '../screens/Home'
import ListCharacters from '../screens/ListCharacters'
import CharactersDetails from '../screens/CharacterDetails'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home' 
          component={Home}
          options={{
            headerTintColor: COLORS.primary,
          }}
          />
        <Stack.Screen 
          name='Categories' 
          component={ListCharacters}
          options={{
            headerTintColor: COLORS.primary,
          }}
          />
        <Stack.Screen 
          name='Character' 
          component={CharactersDetails}
          options={{
            headerTintColor: COLORS.primary,
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
