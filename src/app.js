import React, { Component, Fragment } from 'react'
import {
  StatusBar,
  DeviceEventEmitter,
  StyleSheet,
  View,
  ActivityIndicator,
  Platform
} from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import DrawerLayout from 'react-native-drawer-layout-polyfill'
import { Colors } from 'trading-portal-common'
import { CustomDrawer } from './components/drawer/custom-drawer-layout'

// import KeyboardManager from 'react-native-keyboard-manager'

import { configureStore } from './stores/custom-store'
import { push } from './actions/actions-navigation'
import StackNavigator from './navigations/stack-navigator'
import { setAppNavigator } from './utils/navigation-helper'
import { updateAuthData } from './actions/actions-auth'
import { StaticData } from './common/static-data'
import moment from 'moment'

const { store, persistor } = configureStore()
export { store }

/* Platform.OS === 'ios' &&
  KeyboardManager.setToolbarPreviousNextButtonEnable(true) */

type Props = {};

class App extends Component<Props> {
  constructor (props) {
    super(props)
    this.loaded = false
    this.state = {
      loading: false
    }
  }

  componentDidMount () {
    var now = new Date ();
    console.log('moment1: ', now.toDateString())
    DeviceEventEmitter.addListener('DRAWER_TOGGLE', isOpen =>
      isOpen ? this.drawer.openDrawer() : this.drawer.closeDrawer()
    )

    DeviceEventEmitter.addListener(
      StaticData.EVENT_SET_LOADING_OVERLAY,
      isLoading => this.setState({ loading: isLoading })
    )

    // this.refreshInterval = setInterval(() => this.refreshAuth(), 600000)
  }

  componentWillUnmount () {
    DeviceEventEmitter.removeListener('DRAWER_TOGGLE')
    DeviceEventEmitter.removeListener(StaticData.EVENT_SET_LOADING_OVERLAY)
    this.refreshInterval && clearInterval(this.refreshInterval)
  }

  onBeforeLift () {
    this.refreshAuth()
  }

  refreshAuth () {
    const { user, auth } = store.getState()
    if (user) {
      store.dispatch(updateAuthData(auth, user.username))
    }
    setTimeout(() => {
      this.loaded = true
      this.forceUpdate()
    }, 1000)
  }

  render () {
    const { loading } = this.state
    const { user, auth } = store.getState()
    return (
      <Fragment>
        <StatusBar backgroundColor="black" barStyle='light-content' />
        {loading && (
          <View style={StyleSheet.absoluteFill}>
            <ActivityIndicator />
          </View>
        )}
        <Provider store={store}>
          <PersistGate
            persistor={persistor}
            onBeforeLift={() => this.onBeforeLift()}
          >
            {this.loaded && (
              <DrawerLayout
                ref={ref => (this.drawer = ref)}
                drawerWidth={260}
                drawerPosition={DrawerLayout.positions.Left}
                drawerType='front'
                useNativeAnimations
                drawerLockMode='locked-closed'
                drawerBackgroundColor={Colors.GRAY_LIGHT}
                renderNavigationView={() => <CustomDrawer />}
              >
                <StackNavigator
                  ref={ref => {
                    if (user && auth) {
                      ref.dispatch(push('News'))
                    }
                   
                    setAppNavigator(ref)
                  }}
                />
              </DrawerLayout>
            )}
          </PersistGate>
        </Provider>
      </Fragment>
    )
  }
}

export default App
