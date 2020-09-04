import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Home({navigation}) {

  return(
    <View>
        <Text>Home Page</Text>
        <Button
          title="Ir para tela de Login"
          onPress={() => navigation.navigate('Login')}
        />
    </View>
  );
}
