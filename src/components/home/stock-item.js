import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Colors } from 'trading-portal-common';

export const StockItem = ({ content1, content2, content3 })=>{
    return (
        <TouchableOpacity style={styles.container}>
          <Text style={[styles.text, content1.style]}>{content1.name} 
            {content1.subtitle &&  <Text style={styles.subtitle}>
              {' '}/ {content1.subtitle}
            </Text>}
          </Text>
          <Text style={[styles.text, content2.style]}>{content2.name}</Text>
          <Text style={[styles.text, content3.style, { textAlign: 'right'}]}>{content3.name}</Text>
        </TouchableOpacity>
    )
}

const styles = {
  container: {
    width: '92%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    paddingVertical: 15,
    borderColor: '#4f5558',
    //borderTopWidth: 1,
    borderBottomWidth: 1,
    marginLeft: '4%',
    marginRight: '4%',
  },
  text: {
    flex: 1,
    color: Colors.WHITE
  },
  subtitle: {
    color: Colors.LIGHT_GREY,
    fontSize: 12,
  }
}