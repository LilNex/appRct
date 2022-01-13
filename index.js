/* eslint-disable prettier/prettier */
/**
 * @format
 */

//  import { AppRegistry, Platform } from 'react-native';
//  import App from './App';
 
//  AppRegistry.registerComponent('main', () => App);
//  AppRegistry.registerComponent('appRct', () => App);
 
//  if (Platform.OS === 'web') {
//      const rootTag = document.getElementById('root') || document.getElementById('X');
//      AppRegistry.runApplication('X', { rootTag });
//  }

import { registerRootComponent } from 'expo';
import App from './App';

registerRootComponent(App);