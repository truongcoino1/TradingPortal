import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Colors } from 'trading-portal-common'

import { HeaderButton } from '../components/header/header-button'

import { Home } from '../screens/home'
import  Login  from '../screens/login'
import TabNavigator from './tab-navigation'

const routeConfig = {
  Login: Login,
  News: TabNavigator
}

const stackNavigatorConfig = {
  initialRouteName: 'Login',
  mode: 'card',
  headerMode: 'screen',
  defaultNavigationOptions: {
    headerRight: <HeaderButton blank />,
    gesturesEnabled: false,
    headerTintColor: Colors.WHITE,
    headerStyle: {
      backgroundColor: '#32363c',
      borderWidth: 0,
      borderBottomColor: 'transparent',
      shadowColor: 'transparent'
    },
    headerTitleStyle: {
      alignSelf: 'center',
      textAlign: 'center',
      width: '90%'
    }
  }
}

const StackNavigator = createStackNavigator(routeConfig, stackNavigatorConfig)

export default createAppContainer(StackNavigator)
