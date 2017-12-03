import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Login extends Component<{}> {
  render() {
    return (

    	<View style={styles.container}>
    	<Text style={styles.title}>BioHacking</Text>
    	<Text style={styles.subtitle}>Termociclador</Text>
    	<TouchableOpacity style = {styles.button}>
    	<Text style={styles.buttonText}>Conectar Con Bluetooth</Text>
    	</TouchableOpacity>
    	<TouchableOpacity style = {styles.button}>
    	<Text style={styles.buttonText}>Conectar Con WiFi</Text>
    	</TouchableOpacity>
    	</View>
    	);
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40c4ff',
  },  
  title: {
  	color: 'white',
  	fontSize: 36,
  	fontWeight: 'bold',
  },
  subtitle: {
  	color: 'white',
  	fontSize: 26,
  	paddingVertical: 20
  },
  button : {
  	width: 300,
  	backgroundColor: '#0094cc',
  	borderRadius: 25,
  	marginVertical: 10,
  	paddingVertical: 16,
  },
  buttonText: {
  	color: "white",
  	fontSize: 16,
  	fontWeight: '500',
  	textAlign:'center',
  }
});