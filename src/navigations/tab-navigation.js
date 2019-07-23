import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Home } from '../screens/home'
import SetCommand from '../screens/set-command'
const routeConfig = {
    News: { screen: Home },
    Markets: { screen: SetCommand },
    Trades: { screen: Home },
    Funds: { screen: Home },
    Account: { screen: Home },
}

const TabNavigator = createBottomTabNavigator(routeConfig,
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = MaterialIcons;
                let iconName;
                if (routeName === 'News') {
                    iconName = 'home';
                    return <MaterialIcons name={iconName} size={25} color={tintColor} />;
                } else if (routeName === 'Markets') {
                    iconName = `chart-bar`;
                    return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
                } else if (routeName === 'Trades') {
                    return <MaterialCommunityIcons name={'trademark'} size={25} color={tintColor} />;
                } else if (routeName === 'Funds') {
                    iconName = `credit-card-refund`;
                    return <MaterialCommunityIcons name={'credit-card-refund'} size={25} color={tintColor} />;
                } else if (routeName === 'Account') {
                    iconName = `person`;
                    return <MaterialIcons name={iconName} size={25} color={tintColor} />;
                }
            },
        }),
        tabBarOptions: {
            style: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.5,
                shadowRadius: 3.84,

                elevation: 5,
                backgroundColor: '#17202A',
            },
            activeTintColor: '#F4D03F',
            inactiveTintColor: '#F4F6F7',
        },
    });

export default TabNavigator;
