import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'trading-portal-common'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Icon } from '../common/icon'

export const HeaderButton = ({ onPress, blank, name, badgeCount }) => {
  return (
    <BorderlessButton onPress={onPress} style={styles.container}>
      {blank ? (
        <View style={styles.blank} />
      ) : (
        <Icon name={name} color={Colors.WHITE} />
      )}
      {badgeCount > 0 && (
        <View style={styles.badgeWrapper}>
          <Text style={styles.badgeCount}>{badgeCount}</Text>
        </View>
      )}
    </BorderlessButton>
  )
}

HeaderButton.defaultProps = {
  name: 'menu'
}

const BADGE_SIZE = 16

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 6,
    padding: 8
  },
  blank: {
    width: 42
  },
  badgeWrapper: {
    position: 'absolute',
    right: 0,
    width: BADGE_SIZE,
    height: BADGE_SIZE,
    backgroundColor: Colors.GREEN_HIGH,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BADGE_SIZE / 2
  },
  badgeCount: {
    fontSize: 11,
    color: Colors.WHITE
  }
})
