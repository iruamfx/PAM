import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {

  const [time, setTime] = useState(0);
  const [dist, setDist] = useState(0);
  const [speed, setSpeed] = useState(0);

  function calcSpeed(){
    if(time > 0 && dist > 0){
      setSpeed((parseFloat(dist) * 1000) / (parseFloat(time) * 60));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculo Velocidade M/S</Text>
      <Text>Digite o tempo em horas:</Text>
      <TextInput placeholder='Digite o valor aqui' style={styles.textbox} keyboardType='numeric' onChangeText={(input) => {setTime(input)}}></TextInput>
      <Text>Digite a distancia em KM:</Text>
      <TextInput placeholder='Digite o valor aqui' style={styles.textbox} keyboardType='numeric' onChangeText={(input) => {setDist(input)}}></TextInput>
      <Button onPress={calcSpeed} title='Calcular'></Button>
      <Text style={styles.result}>{speed ? `A velocidade é: ${speed}m/s` : ""}</Text>
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
  },
  result: {
    color: "green",
    fontSize: 15
  }
});
