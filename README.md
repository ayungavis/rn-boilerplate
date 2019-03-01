
🚀 React Native Boilerplate - March 2019
===========================================

[![React Native](https://img.shields.io/badge/React%20Native-v0.58.3-blue.svg)](https://facebook.github.io/react-native/)
[![React Navigation V2](https://img.shields.io/badge/React%20Navigation-v3.1-blue.svg)](https://reactnavigation.org/)


React Native Boilerplate is a starting point for React Native application. This project is configured with redux, redux promise middleware 
and redux persist. Latest version of react-navigation.


## Features

* [Redux](http://redux.js.org/)
* [Redux Thunk](https://github.com/reduxjs/redux-thunk)
* [React Navigation](https://reactnavigation.org/) 
* [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) 


## Prerequisites

* [Node](https://nodejs.org) v8.10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
* [Yarn](https://yarnpkg.com/)
* A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)


## Getting Started

1. Clone this repo, `git clone https://git.arkademy.com/ayungavis/boilerplate.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder, `rm -rf .git`
4. Open `package.json` and change the `name` property with your project name
5. Open `index.js` and replace `'Boilerplate'` by your project name
6. Open `app.json` and replace `'Boilerplate'` by your project name 
7. Run `yarn` or `npm install` to install dependencies
8. Run `react-native upgrade` to upgrade and add iOS & Android Folders.
9. Run `react-native link`
10. Start the packager with `npm start`
11. Connect a mobile device to your development machine
12. Run the test application:
  * On Android:
    * Run `react-native run-android`
  * On iOS:
    * Open `ios/YourReactProject.xcodeproj` in Xcode
    * Hit `Run` after selecting the desired device
13. Enjoy!!!