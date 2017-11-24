
import React from 'react';
import { AppRegistry,StyleSheet, Text, View, Button, } from 'react-native';

export default class App extends React.Component {
  


  render() {
    return (
      <View style={styles.conteiner}>
      <Text style={styles.title}>Biohacking App</Text>
      
      </View>
      );
  }
}

const styles = StyleSheet.create({
  title:{
    fontSize:30,
    margin:10,
    textAlign:'center',
    fontWeight: 'bold',
    color: 'blue',
  },
  conteiner :{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
