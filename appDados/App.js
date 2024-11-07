import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [team, setTeam] = useState('');
  const [showTeam, setShowTeam] = useState('Aguardando');
  const [driver, setDriver] = useState('');
  const [showDriver, setShowDriver] = useState('Aguardando');
  const [lap, setLap] = useState('');
  const [showLap, setShowLap] = useState('Aguardando');
  const [pit, setPit] = useState('');
  const [showPit, setShowPit] = useState('Aguardando');

  function showInfo()
  {
    if(team == '' || driver == '' || lap == '' || pit == '')
    {
      alert("Preencha todos os campos e tente novamente!");
    }
    else
    {
      alert("Voto enviado!");
      setShowTeam(team);
      setShowDriver(driver);
      setShowLap(lap);
      setShowPit(pit);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Time do dia: </Text>
      <TextInput placeholder="Digite aqui" style={styles.textbox} onChangeText={(input) => {setTeam(input)}}></TextInput>
      <Text style={styles.text}>Piloto do dia: </Text>
      <TextInput placeholder="Digite aqui" style={styles.textbox} onChangeText={(input) => {setDriver(input)}}></TextInput>
      <Text style={styles.text}>Volta do dia: : </Text>
      <TextInput placeholder="Digite aqui" style={styles.textbox} onChangeText={(input) => {setLap(input)}}></TextInput>
      <Text style={styles.text}>Pit do dia: </Text>
      <TextInput placeholder="Digite aqui" style={styles.textbox} onChangeText={(input) => {setPit(input)}}></TextInput>
      <Button title='Votar' onPress={showInfo}></Button>
      <Text style={styles.text}>Dados do voto: </Text>
      <Text style={styles.text}>Time do dia: {showTeam}</Text>
      <Text style={styles.text}>Piloto do dia: {showDriver}</Text>
      <Text style={styles.text}>Lap do dia: {showLap}</Text>
      <Text style={styles.text}>Pit do dia: {showPit}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    color: "white",
    margin: 5
  },
  textbox: {
    borderBottomWidth: 2,
    borderColor: "red",
    fontSize: 15,
    width: 150,
    textAlign: "left",
    margin: 15,
    color: "white"
  }
});
