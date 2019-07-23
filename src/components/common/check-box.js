import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Icon } from './icon'
import { Colors } from 'trading-portal-common'

type Props = {
  checkedInitially: Boolean,
  onChange: Function
};

export class CheckBox extends Component<Props> {
  static defaultProps = {
    onChange: () => {},
    checkedInitially: false
  };

  constructor (props) {
    super(props)
    const { checkedInitially } = props

    this.state = {
      checked: checkedInitially || false
    }
  }

  switchState () {
    const { checked } = this.state
    const { onChange } = this.props
    this.setState({ checked: !checked }, () => onChange(this.state.checked))
  }

  render () {
    const { checked } = this.state

    return (
      <RectButton onPress={() => this.switchState()}>
        <View style={[styles.container, checked ? styles.checked : {}]}>
          <Icon size={26} name='check' color={Colors.WHITE} />
        </View>
      </RectButton>
    )
  }
}

const SIZE = 26

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.GRAY_LIGHT,
    backgroundColor: Colors.WHITE
  },
  checked: {
    backgroundColor: Colors.YELLOW_DARK,
    borderWidth: 0
  }
})
