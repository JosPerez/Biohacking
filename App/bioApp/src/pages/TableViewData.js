import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import DeviceTableView from '../components/DeviceTableView';

export default class TableViewData extends Component<{}> {
  render() {
    return (
    	<DeviceTableView info={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}/>
    	);
	}
}


