import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Colors } from 'trading-portal-common'
import { Icon } from './icon'

type Props = {
  onChange: Function,
  checkedInitially: Boolean,
  text: string
};

export class CheckBoxText extends Component<Props> {
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
    const { text } = this.props

    return (
      <RectButton
        underlayColor={Colors.WHITE}
        activeOpacity={0.1}
        style={styles.wrapper}
        onPress={() => this.switchState()}
      >
        <View style={[styles.container, checked ? styles.checked : {}]}>
          <Icon size={26} name='check' color={Colors.WHITE} />
        </View>
        <Text style={styles.text}>{text}</Text>
      </RectButton>
    )
  }
}

const SIZE = 26

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.6,
    borderColor: Colors.DIAMOND,
    width: SIZE,
    height: SIZE
  },
  checked: {
    backgroundColor: Colors.YELLOW_DARK,
    borderColor: Colors.YELLOW_DARK
  },
  text: {
    maxWidth: '85%',
    flexGrow: 2,
    color: Colors.GRAY,
    fontSize: 12,
    marginLeft: 12,
    paddingVertical: 12
  }
})
