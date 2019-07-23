import { DeviceEventEmitter } from 'react-native'

export let MainAppNavigator = null

export function toggleDrawer (isOpen: true) {
  DeviceEventEmitter.emit('DRAWER_TOGGLE', isOpen)
}

export function setAppNavigator (nav) {
  MainAppNavigator = nav
}
