import React, {Component} from 'react';
import { TextInput, StyleSheet } from 'react-native';


export default class CustomInput extends Component {
  render(){
    return (
      <TextInput style={styles.input}/>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DEE2E6',
    padding: 15,
    width: 300,
    fontSize: 20,
    marginBottom: 10,
    color: 'red'
  }
});
