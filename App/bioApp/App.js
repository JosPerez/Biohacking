import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/pages/login';
import TableViewData from './src/pages/TableViewData';

export const StackNav = StackNavigator({
  Home: { screen: Login },
  BLE: {screen: TableViewData}
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
      barStyle="dark-content"
      />
      <StackNav/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },  
  tableView:{
    flex:1,
    paddingTop:15,
  }
});
