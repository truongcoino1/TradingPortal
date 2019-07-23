import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, Alert } from 'react-native'
import { Colors } from 'trading-portal-common'
import { connect } from 'react-redux'
import { DrawerItem } from './drawer-item'
import { Icon } from '../common/icon'
import { ScrollView, BorderlessButton } from 'react-native-gesture-handler'
import { toggleDrawer, MainAppNavigator } from '../../utils/navigation-helper'
import { navigate, push } from '../../actions/actions-navigation'
import { setAccessToken } from '../../api/api'
import { clearUserData } from '../../actions/actions-user'

class CustomDrawer extends Component {
  constructor (props) {
    super(props)

    this.SECTIONS = [
      {
        label: 'News',
        action: () => MainAppNavigator.dispatch(navigate('News')),
        icon: 'newspaper'
      },
      {
        label: 'Rooms',
        action: () => MainAppNavigator.dispatch(navigate('News')),
        icon: 'room',
        size: 21
      },
      {
        label: 'Coachs',
        action: () => MainAppNavigator.dispatch(push('News')),
        auth: false,
        icon: 'coach',
        size: 23
      },
      {
        label: 'My Info',
        action: () => MainAppNavigator.dispatch(push('News')),
        auth: false,
        icon: 'tranning',
        size: 22
      },
      {
        label: 'Students',
        action: () => MainAppNavigator.dispatch(push('News')),
        auth: false,
        icon: 'students',
        size: 24
      },
      {
        label: 'Courses',
        action: () => MainAppNavigator.dispatch(push('News')),
        auth: false,
        icon: 'service',
        size: 24
      },
      // {
      //   label: 'Lesson Type',
      //   action: () => MainAppNavigator.dispatch(push('ServiceList')),
      //   auth: false,
      //   icon: 'tranning',
      //   size: 24
      // },
      {
        label: 'Contact us',
        action: () => MainAppNavigator.dispatch(navigate('News')),
        icon: 'contact-us'
      },
      {
        label: 'Feedback',
        action: () => MainAppNavigator.dispatch(navigate('News')),
        icon: 'chat'
      },
      {
        label: 'Setting',
        action: () => MainAppNavigator.dispatch(navigate('News')),
        icon: 'setting',
        size: 22
      }
    ]

    this.state = {
      activeIndex: 0
    }
  }

  onClick (item) {
    item.action()
    toggleDrawer(false)
  }

  onLoginLogout () {
    const { user, dispatch } = this.props
    if (user) {
      Alert.alert(
        'Are you sure you want to logout?',
        '',
        [
          { text: 'Cancel', onPress: () => {}, style: 'destructive' },
          {
            text: 'OK',
            onPress: () => {
              // Do further here...
              toggleDrawer(false)
              setAccessToken(null)
              dispatch(clearUserData())
              MainAppNavigator.dispatch(navigate('Auth'))
            },
            style: 'default'
          }
        ],
        { cancelable: false }
      )
    } else {
      toggleDrawer(false)
      MainAppNavigator.dispatch(navigate('Auth'))
    }
  }

  render () {
    const { activeIndex } = this.state
    const { user } = this.props

    return (
      <ScrollView
        stickyHeaderIndices={[0]}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.drawerHeader}>
          <View style={styles.sec}>
            <BorderlessButton
              style={{ flexDirection: 'row', alignItems:'center'}}
              onPress={() => {
                MainAppNavigator.dispatch(navigate('Profile'))
                toggleDrawer(false)
              }}
            >
              <Image
                style={styles.avatar}
                source={require('../../assets/default-avatar.png')}
              />
              <Text style={{ marginLeft: 8, color: Colors.WHITE}}>{user && user.profile && user.profile.name}</Text>
            </BorderlessButton>
            <Text style={styles.username}>
              Guest
            </Text>
            <Icon
              name='close'
              color={Colors.WHITE}
              onPress={() => toggleDrawer(false)}
            />
          </View>

          <BorderlessButton
            onPress={() => this.onLoginLogout()}
            style={[styles.sec, styles.bottom]}
          >
            <Icon size={15} name='logout' color={Colors.WHITE} />
            <Text style={styles.logout}>
              Login
            </Text>
          </BorderlessButton>
        </View>
        {this.SECTIONS.map((item, idx) => (
          <DrawerItem
            size={item.size ? item.size : null}
            key={Math.random()}
            label={item.label}
            iconName={item.icon}
            onPress={() => this.onClick(item)}
            active={idx === activeIndex}
          />
        ))}
        <View style={{ flex: 1 }} />
      </ScrollView>
    )
  }
}

const AVATAR_SIZE = 34 

const styles = StyleSheet.create({
  container: {
    flexGrow: 2,
    backgroundColor: Colors.WHITE
  },
  drawerHeader: {
    backgroundColor: Colors.BLACK,
    paddingTop: 42,
    paddingBottom: 16,
    paddingHorizontal: 20
  },
  sec: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bottom: {
    marginTop: 20
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2
  },
  username: {
    marginLeft: 14,
    color: Colors.WHITE,
    flexGrow: 2
  },
  logout: {
    marginLeft: 32,
    color: Colors.WHITE
  },
  section: {
    flexDirection: 'row',
    backgroundColor: Colors.GRAY_LIGHT,
    paddingVertical: 8,
    paddingHorizontal: 8
  },
  sectionTitle: {
    color: Colors.GRAY,
    fontSize: 12
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderColor: Colors.GRAY_LIGHT
  },
  itemName: {
    color: Colors.GRAY
  }
})

const mapStateToProps = ({ user }) => ({ user })

exports.CustomDrawer = connect(mapStateToProps)(CustomDrawer)
