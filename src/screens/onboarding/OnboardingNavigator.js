import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import MainNavigator from '../main/MainNavigator';
import AuthNavigator from '../auth/AuthNavigator';

import SplashScreen from './SplashScreen';

const OnboardingNavigator = createStackNavigator({
	Splash: { screen: SplashScreen }
}, {
	initialRouteName: 'Splash',
	headerMode: 'none'
})

const SwitchNavigator = createSwitchNavigator({
	Splash: { screen: OnboardingNavigator },
	Register: { screen: AuthNavigator },
	Home: { screen: MainNavigator }
}, {
	initialRouteName: 'Splash'
})

export default createAppContainer(SwitchNavigator)