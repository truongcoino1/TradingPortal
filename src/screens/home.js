import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native';
import { StockItem } from '../components/home/stock-item';
import { Colors } from 'trading-portal-common';
import { StocksChart } from '../components/home/stocks-chart';

const { width, height } = Dimensions.get('window');

export class Home extends Component {

  componentDidMount(){
    console.log('hihi: ', navigator.languages)
  }

  data = [
    {
      content1: { name: 'Pair', style: { fontSize: 13, color: Colors.LIGHT_GREY } },
      content2: { name: 'Last Price', style: { fontSize: 13, color: Colors.LIGHT_GREY } },
      content3: { name: 'Volume(BTC)', style: { fontSize: 13, color: Colors.LIGHT_GREY } },
    },
    {
      content1: { name: 'LINK', subtitle: 'BTC', style: {} },
      content2: { name: 0.00003224, style: { color: Colors.PINK } },
      content3: { name: 11.288333, style: {} },
    },
    {
      content1: { name: 'ETH', subtitle: 'BTC', style: {} },
      content2: { name: 0.000032, style: { color: Colors.GREEN } },
      content3: { name: 11.28823, style: {} },
    },
    {
      content1: { name: 'BNB', subtitle: 'BTC', style: {} },
      content2: { name: 0.00003224, style: { color: Colors.WHITE } },
      content3: { name: 11.288333, style: {} },
    },
    {
      content1: { name: 'LCT', subtitle: 'BTC', style: {} },
      content2: { name: 0.00003224, style: { color: Colors.PINK } },
      content3: { name: 11.288333, style: {} },
    },
  ]
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={{height: 1, backgroundColor: '#fff', width: '100%'}}/> */}
        <StocksChart />
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={this.data}
          renderItem={({ item }) => <StockItem content1={item.content1} content2={item.content2} content3={item.content3} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e'
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    marginTop: 10
  }
});
