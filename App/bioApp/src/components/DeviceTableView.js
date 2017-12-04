import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class tableView extends Component<{}> {
  render() {
    return (
    	<View style={styles.container}>
    	<FlatList 
    	data = {this.props.info}
    	renderItem = {({item}) => <Text style= {styles.text}>{item.key}</Text>}
    	/>
    	</View>
    	);
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:22,
    backgroundColor:'white',
  },
  text: {
  	padding:10,
  	fontSize:18,
  	height:44,
  }
})