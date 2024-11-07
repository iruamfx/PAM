import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const[nome, setNome] = useState("");
  const[nomeDigitado,setNomeDigitado] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome: </Text>
      <TextInput 
        style={styles.input} 
        underlineColorAndroid="F0f" 
        placeholder="Digite seu nome"
        onChangeText={(nome) => setNome(nome)}
      >
      </TextInput>
      <Button title="Exibir nome" onPress={() => {alert(nome)}}></Button>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {

  }
});