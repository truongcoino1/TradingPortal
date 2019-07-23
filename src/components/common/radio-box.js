import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Colors } from 'trading-portal-common'

type Props = {
  checked: Boolean,
  onPress: Function
};

export class RadioBox extends Component<Props> {
  static defaultProps = {
    checked: false,
    onPress: () => {}
  };

  render () {
    const { checked, onPress } = this.props

    return (
      <BorderlessButton onPress={onPress} style={styles.container}>
        <View
          style={[
            styles.innerDot,
            { backgroundColor: checked ? Colors.YELLOW_DARK : Colors.WHITE }
          ]}
        />
      </BorderlessButton>
    )
  }
}

const SIZE = 24

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.GRAY_LIGHT,
    backgroundColor: Colors.WHITE
  },
  innerDot: {
    width: SIZE - 8,
    height: SIZE - 8,
    borderRadius: (SIZE - 8) / 2,
    backgroundColor: Colors.YELLOW_DARK
  }
})
