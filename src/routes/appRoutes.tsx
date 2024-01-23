import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { TabRoutes } from './tabRoutes'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName='TabRoutes'
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='TabRoutes' component={TabRoutes} />
    </Navigator>
  )
}
