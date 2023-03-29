import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import TabsNavigator from './TabsNavigator'
import AuthNavigator from './AuthNavigator'

const MainNavigator = () => {
  return (
    <NavigationContainer>
        <AuthNavigator/>
    </NavigationContainer>
  )
}

export default MainNavigator;