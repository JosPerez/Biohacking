import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';


import DeviceTableView from '../components/DeviceTableView';


export default class TableViewData extends Component<{}> {
  render() {
    return (
    	<DeviceTableView info={[]}/>
    	);
	}
}

const styles = StyleSheet.create({
  container: {
    padding:10,
  },
})
