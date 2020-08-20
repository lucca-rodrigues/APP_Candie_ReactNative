import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Register({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Ja tenho uma conta?</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')}/>
    </View> 
  );
}
