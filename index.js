/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import CadastroScreen from './src/screens/CadastroScreen';
import HomeScreen from './src/screens/HomeScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomeScreen);
