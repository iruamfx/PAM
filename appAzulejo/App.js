import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {

  const [wallHgt, setWallHgt] = useState(0);
  const [wallWdt, setWallWdt] = useState(0);
  const [tileHgt, setTileHgt] = useState(0);
  const [tileWdt, setTileWdt] = useState(0);
  const [tileQty, setTileQty] = useState(0);

  function calcTileQty(){
    if(wallHgt && wallWdt && tileHgt && tileWdt){
        let wallArea = wallHgt * wallWdt;
        let tileArea = tileHgt * tileWdt;
        setTileQty(wallArea / tileArea);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qtd de Azulejos</Text>
      <Text>Digite a altura da parede:</Text>
      <TextInput placeholder='Digite o valor aqui' style={styles.textbox} keyboardType='numeric' onChangeText={(input) => {setWallHgt(input)}}></TextInput>
      <Text>Digite a largura da parede:</Text>
      <TextInput placeholder='Digite o valor aqui' style={styles.textbox} keyboardType='numeric' onChangeText={(input) => {setWallWdt(input)}}></TextInput>
      <Text>Digite a altura do azulejo:</Text>
      <TextInput placeholder='Digite o valor aqui' style={styles.textbox} keyboardType='numeric' onChangeText={(input) => {setTileHgt(input)}}></TextInput>
      <Text>Digite a largura do azulejo:</Text>
      <TextInput placeholder='Digite o valor aqui' style={styles.textbox} keyboardType='numeric' onChangeText={(input) => {setTileWdt(input)}}></TextInput>
      <Button onPress={calcTileQty} title='Calcular'></Button>
      <Text>{tileQty ? `Quantidade de azulejos necessária: ${tileQty}` : ""}</Text>
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
