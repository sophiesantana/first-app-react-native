import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { Home } from '../screens/Tab/Home'
import { Cart } from '../screens/Tab/Cart'
import { Wallet } from '../screens/Tab/Wallet'
import { Settings } from '../screens/Tab/Settings'

const { Navigator, Screen } = createBottomTabNavigator()

export const TabRoutes = () => {
  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: '#FFCB40',
          borderRadius: 25,
          marginBottom: 50,
          marginTop: 50,
          marginLeft: 20,
          marginRight: 20

        },
        tabBarLabelStyle: {
          fontSize: 12,
          shadowOpacity: 0.2
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          title:'Home',
          tabBarIcon: ({ color, focused }) => (
            <View>
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                size={20}
                color={color}
              />
            </View>
          )
        }}
      />
      <Screen name="Cart" component={Cart} />
      <Screen name="Wallet" component={Wallet} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  )
}
