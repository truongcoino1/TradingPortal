import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
// import Octicons from 'react-native-vector-icons/Octicons'
// import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import EvilIcons from 'react-native-vector-icons/EvilIcons'

export const Icon = ({ name, size, color, ...rest }) => {
  switch (name) {
    case 'people':
      return <Ionicons name='ios-people' {...{ size, color, ...rest }} />
    case 'truck':
      return <FontAwesome name='truck' {...{ size, color, ...rest }} />
    case 'package':
      return (
        <MaterialCommunityIcons
          name='package-up'
          {...{ size, color, ...rest }}
        />
      )

    // human-greeting
    case 'cart':
      return (
        <MaterialCommunityIcons name='cart' {...{ size, color, ...rest }} />
      )
    case 'service':
      return (
        <MaterialCommunityIcons
          name='cube-outline'
          {...{ size, color, ...rest }}
        />
      )
    case 'students':
      return (
        <MaterialCommunityIcons
          name='human-handsdown'
          {...{ size, color, ...rest }}
        />
      )
    case 'time':
      return (
        <MaterialCommunityIcons name='timer' {...{ size, color, ...rest }} />
      )
    case 'coach':
      return (
        <MaterialCommunityIcons
          name='human-greeting'
          {...{ size, color, ...rest }}
        />
      )
    case 'room':
      return <MaterialIcons name='grid-on' {...{ size, color, ...rest }} />
    case 'tranning':
      return (
        <MaterialCommunityIcons
          name='book-open-variant'
          {...{ size, color, ...rest }}
        />
      )
    case 'email':
      return <Entypo name='email' {...{ size, color, ...rest }} />
    case 'facebook':
      return <FontAwesome name='facebook' {...{ size, color, ...rest }} />
    case 'chat':
      return <MaterialCommunityIcons name='message-alert' {...{ size, color, ...rest }} />
    case 'contact-us':
      return (
        <SimpleLineIcons name='earphones-alt' {...{ size, color, ...rest }} />
      )
    case 'setting':
      return <AntDesign name='setting' {...{ size, color, ...rest }} />
    case 'newspaper':
      return <FontAwesome name='newspaper-o' {...{ size, color, ...rest }} />
    case 'info':
      return (
        <Ionicons
          name='ios-information-circle-outline'
          {...{ size, color, ...rest }}
        />
      )
    case 'basket':
      return <Ionicons name='ios-basket' {...{ size, color, ...rest }} />
    case 'pricetag':
      return (
        <MaterialCommunityIcons
          name='tag-text-outline'
          {...{ size, color, ...rest }}
        />
      )
    case 'left':
      return <AntDesign name='left' {...{ size, color, ...rest }} />
    case 'right':
      return <AntDesign name='right' {...{ size, color, ...rest }} />
    case 'plus':
      return <AntDesign name='plus' {...{ size, color, ...rest }} />
    case 'minus':
      return <AntDesign name='minus' {...{ size, color, ...rest }} />
    case 'notification':
      return (
        <MaterialCommunityIcons
          name='bell-outline'
          {...{ size, color, ...rest }}
        />
      )
    case 'menu':
      return <Entypo name='menu' {...{ size, color, ...rest }} />
    case 'close':
      return <AntDesign name='close' {...{ size, color, ...rest }} />
    case 'logout':
      return <SimpleLineIcons name='logout' {...{ size, color, ...rest }} />
  }
}

Icon.defaultProps = {
  size: 24
}
