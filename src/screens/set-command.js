import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors } from 'trading-portal-common';
import DropdownMenu from '../components/common/dropdown';

const { width, height } = Dimensions.get('window');

export default class SetCommand extends Component {

    constructor(props){
        super(props);
        this.state={
            text: ''
        }
    }
    render() {
        var data = [["C", "Java", "JavaScript", "PHP"]];
        return (
            <View style={{flex: 1, backgroundColor: '#666666'}}>
            <View style={{height: 64}} />
            <DropdownMenu
              style={{width: 100}}
              bgColor={'white'}
              tintColor={'#666666'}
              height={40}
              width={100}
              activityTintColor={'green'}
              handler={(selection, row) => this.setState({text: data[selection][row]})}
              data={data}
            >
    
            </DropdownMenu>
          </View>
        )
    }
}
