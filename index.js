/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import App from './src/App' ;
import {name as appName} from './app.json';
import TaskList from './src/Screens/TaskList';

AppRegistry.registerComponent(appName, () => TaskList);
