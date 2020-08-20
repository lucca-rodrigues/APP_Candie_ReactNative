import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Faça o seu login</Text>
      <TextInput placeholder="E-mail"/>
      <TextInput placeholder="Senha"/>
      <Button title="Entrar" onPress={() => navigation.navigate('Home')}/>
      <Text onPress={() => navigation.navigate('Home')}>Não tenho uma conta?</Text>
    </View> 
  );
}
