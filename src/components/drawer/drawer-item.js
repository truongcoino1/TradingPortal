import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Colors } from 'trading-portal-common'
import { Icon } from '../common/icon'

export const DrawerItem = ({
  label,
  iconName,
  active,
  badgeCount,
  onPress,
  size
}) => {
  return (
    <RectButton onPress={onPress}>
      <View style={[styles.container, active ? styles.active : {}]}>
        <View
          style={{ width: 22, alignItems: 'center', justifyContent: 'center' }}
        >
          <Icon
            color={active ? Colors.WHITE : Colors.GRAY}
            size={size || 20}
            name={iconName}
          />
        </View>
        <Text
          style={[
            styles.label,
            { color: active ? Colors.WHITE : Colors.BLACK }
          ]}
        >
          {label}
        </Text>
      </View>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  label: {
    marginLeft: 14,
    fontSize: 14
  },
  active: {
    backgroundColor: Colors.ORANGE
  }
})
