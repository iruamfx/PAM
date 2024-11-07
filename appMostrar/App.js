import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {

  const [email, setEmail] = useState('');
  const [mostraEmail, setMostraEmail] = useState('');

  function showEmail() {
    if(email == '')
    {
      alert("Por favor, preencha todos os campos");
    }
    setMostraEmail(email);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Digite seu E-mail:</Text>
      <TextInput 
        style={styles.textbox}
        placeholder='Digite seu E-mail:'
        onChangeText={(email) => setEmail(email)}
      >
      </TextInput>
      <Button
        title='Exibir E-mail'
        onPress={showEmail} 
      >
      </Button>
      <Text style={styles.textshow}>E-mail do usuario: {mostraEmail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    width: 165,
    borderBottomWidth: 2,
    borderColor: '#8c0010',
    height: 25,
    fontSize: 15,
    margin: 20,
  },
  textshow: {
    textAlign:'center',
    fontSize: 25,
    color: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  }
});
