import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors } from 'trading-portal-common';
import { InputCustom } from '../components/common/input';
const { width, height } = Dimensions.get('window');

export default class Login extends Component {

  static navigationOptions = ({ navigation }) => {
      return {
        header: null
      }
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>
          MPBank Trading Portal
        </Text>
        <InputCustom icon={'user'} />
        <InputCustom icon={'lock'} />
        <Button onPress={()=>{
          navigation.push('News')
        }} title={'Buton'} buttonStyle={styles.button} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',

  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    marginTop: 10
  },
  button: {
    width: 100,
    height: 40,
    marginTop: 15,
    backgroundColor: Colors.ORANGE
  },

  logo: {
    marginBottom: 50,
    color: '#fff',
    fontSize: 25
  }
});
