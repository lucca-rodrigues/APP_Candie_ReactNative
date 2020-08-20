import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login(){
    alert(`Login Realizado com Sucesso! Email: ${email} Password: ${password}`);
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.logo}>Candie</Text>
      <Text>Faça o seu login</Text>
      <TextInput 
        placeholder="E-mail"
        onChangeText={email => setEmail(email)}
        defaultValue={email}
        />
      <TextInput 
        placeholder="Senha"
        onChangeText={password => setPassword(password)}
        defaultValue={password}
      />
      <Button title="Entrar" onPress={login}/>
      <Text
        style={styles.createAccount} 
        onPress={() => navigation.navigate('Home')}>
          Não tenho uma conta?
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  logo:{
    color: '#000',
    fontSize: 30,
  },
  createAccount: {
    marginTop: 20
  }
});
