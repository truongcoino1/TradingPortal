import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from 'trading-portal-common'

export const SectionHeader = ({ title }) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: 'bold',
    color: Colors.GRAY
  },
  sectionHeader: {
    padding: 10,
    width: '100%',
    backgroundColor: Colors.DIAMOND_LIGHT
  }
})
