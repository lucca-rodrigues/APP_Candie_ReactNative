import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

function CustomInput({props}) {
  const [place, setPlace] = useState(props.placeholder);

  return <TextInput style={styles.input} placeholder={place} />;
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
    color: 'red',
  },
});

export default CustomInput();
