import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [area, setArea] = useState(null);

  function calcArea()
  {
    if(base > 0 && height > 0)
    {
      setArea((parseFloat(base) * parseFloat(height)) / 2);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Triangle Area Calculator</Text>
      <Text style={styles.text}>Digite a base do triangulo:</Text>
      <TextInput 
        style={styles.textbox} 
        placeholder='Base' 
        keyboardType={'numeric'} 
        onChangeText={(base) => {setBase(base)}}
      ></TextInput>
      <Text style={styles.text}>Digite a altura do triangulo:</Text>
      <TextInput 
        style={styles.textbox}
        placeholder='Altura' 
        keyboardType={'numeric'} 
        onChangeText={(height) => {setHeight(height)}}
      ></TextInput>
      <Button style={styles.button} title='Calcular' onPress={calcArea}></Button>
      <Text style={styles.result}>{area ? `Área do triângulo: ${area}` : ''}</Text>
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
    color: "orange",
    fontSize: 25,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  },
  textbox: {
    borderWidth: 1,
    width: 200,
    height: 30,
    fontSize: 15,
    borderRadius: 10,
    paddingLeft: 10,
    margin: 20
  },
  result: {
    color: "orange",
    fontSize: 20,
    marginTop: 10
  }
});
