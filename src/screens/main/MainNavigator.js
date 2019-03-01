import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './HomeScreen';

import colors from 'res/colors';
import fonts from 'res/fonts';

const BottomNavigator = createMaterialBottomTabNavigator({
	Home: { screen: HomeScreen}
}, {
	defaultNavigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, horizontal, tintColor }) => {
			const { routeName } = navigation.state;
			let IconComponent = FontAwesome5;
			let iconName;
			if (routeName === 'Home') {
				iconName = 'Home';
			}
			return <IconComponent name={iconName} size={23} color={tintColorolor} />
		}
	}),
	initialRouteName: 'Home',
	shifting: true,
	activeColor: 'black',
	inactiveColor: 'grey',
	barStyle: { backgroundColor: 'white' }
})

const MainNavigator = createStackNavigator({
	Home: {
		screen: BottomNavigator,
		navigationOptions: {
			header: null
		}
	}	
}, {
	headerMode: 'none'
})

export default createAppContainer(MainNavigator);