import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {

  const [dol, setDol] = useState(0);
  const [real, setReal] = useState(0);

  function USDtoBRL(){
    if(dol){
      setReal(dol * 4.98);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cambio Calc</Text>
      <Text>Digite o valor em dolar:</Text>
      <TextInput placeholder='Digite o valor aqui' style={styles.textbox} keyboardType='numeric' onChangeText={(dol) => {setDol(dol)}}></TextInput>
      <Button onPress={USDtoBRL} title='Calcular'></Button>
      <Text>{real ? `USD -> BRL: ${real}` : ""}</Text>
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
  title: {
    fontSize: 20,
    color: "orange"
  },
  textbox: {
    borderBottomWidth: 2,
    borderColor: "red",
    marginBottom: 10
  }
});
