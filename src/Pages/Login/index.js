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
      <View style={styles.div}>
        <TextInput
          type="email"
          placeholder="E-mail"
          onChangeText={email => setEmail(email)}
          defaultValue={email}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          onChangeText={password => setPassword(password)}
          defaultValue={password}
          style={styles.input}
        />
      </View>
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
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DEE2E6',
    padding: 15,
    width: 300,
    fontSize: 20,
    marginBottom: 10,
    color: 'red'
  },
  div: {
    marginTop: 15
  }
});


