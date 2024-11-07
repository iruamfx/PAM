import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function App() {

  const[nome,setNome] = useState('');
  const[carro,setCarro] = useState('');
  const[placa,setPlaca] = useState('');
  const[modelo, setModelo] = useState(0);
  const[valor,setValor] = useState(15000);
  const[utilitario, setUtilitario] = useState(false);
  const[checked, setChecked] = useState('Masculino');

  const modelos=[
    {modeloNome: "Hatch", valor: 1},
    {modeloNome: "Pickup", valor: 2},
    {modeloNome: "Sedan", valor: 3},
    {modeloNome: "SUV", valor: 4},
    {modeloNome: "Coupe", valor: 5},
  ]

  function enviarDados() {
    if(nome == "" || carro == "")
    {
      alert("Preencha todos os campos corretamente")
    }
    else
    {
      alert("Informações do carro: \n\n" +
      "Nome Proprietário: " + nome + "\n" +
      "Sexo: " + checked + "\n" +
      "Placa:" + placa +
      "Carro:" + carro + "\n" +
      "Modelo:" + modelos[modelo].modeloNome + "\n" +
      "Valor:" + valor.toFixed(2) + "\n" +
      "Carro Utilitário: " + (utilitario ? "Sim" : "Não")
    )
    }
  }

  let modeloItems = modelos.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.modeloNome}></Picker.Item>
  })


  return (
    <View style={styles.container}>
      <Text style={styles.textoNome}>Informações do Carro Particular</Text>
      <View style={styles.areaformulario}>
        <Text style={styles.textoNome}>Nome do propietário: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(nome) => {setNome(nome)}}
          placeholder='Digite aqui'
        >
        </TextInput>
        <View style={styles.areaRadio}>
          <RadioButton
            value="Masculino"
            status={checked == "Masculino" ? "checked" : "unchecked"}
            onPress={() => {setChecked("Masculino")}}
          ></RadioButton>
          <Text>Masculino</Text>
          <RadioButton
            value="Feminino"
            status={checked == "Feminino" ? "checked" : "unchecked"}
            onPress={() => {setChecked("Feminino")}}
          ></RadioButton>
          <Text>Feminino</Text>
        </View>
        <Text style={styles.textoNome}>Nome do carro: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(carro) => {setCarro(carro)}}
          placeholder='Digite aqui'
        >
        </TextInput>
        <Text style={styles.textoNome}>Numero da placa: </Text>
        <TextInput
          style={styles.input}
          onChangeText={(placa) => {setPlaca(placa)}}
          placeholder='Digite aqui'
        >
        </TextInput>
        <View style={styles.areaModelo}>
          <Text style={styles.textoNome}>Modelo:</Text>
          <Picker
            style={styles.pickerModelo}
            selectedValue={modelo}
            onValueChange={(itemValue, itemIndex) => {setModelo(itemValue)}}
          >
            {modeloItems}
          </Picker>
        </View>
        <View style={styles.valorCarro}>
          <Text style={styles.textoNome}>Valor do Carro:</Text>
          <Text style={styles.carroTexto}>R${valor.toFixed(0)}</Text>
        </View>
        <View style={styles.areaslider}>
          <Slider
            minimumTrackTintColor='red'
            minimumValue={15000}
            maximumValue={300000}
            onValueChange={(valor) => setValor(valor)}
            value={valor}
          >
          </Slider>
        </View>
        <View style={styles.areaUtilitario}>
          <Text style={styles.textoNome}>Utilitário</Text>
          <Switch
            style={{paddingTop: 15}}
            onValueChange={(utilitario) => {setUtilitario(utilitario)}}
            value={utilitario}
          >
          </Switch>
        </View>
        <TouchableOpacity
          style={styles.botao}
          onPress={enviarDados}
        >
          <Text style={styles.botaoTexto}>Mostrar Dados do Carro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#32B76C',
  
  },
  areaformulario:
  {
    flexDirection: 'column',
    margin: 10
  },
  textoNome:{
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },

  areaModelo:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
},
pickerModelo:{
  flex:1
},
valorArea:{
  flexDirection:'row',
  paddingBottom: 5,
},
valorTexto:{
  color: '#FF0000',
  fontSize: 17,
  fontWeight: 'bold',
  paddingLeft: 5,
},
areaUtilitario:{
  flexDirection: 'column', 
  alignItems: 'center'
},
areaRadio:{
  flexDirection: 'row', 
  alignItems: 'center',
 
},
botao:{
  backgroundColor: 'green',
  width: '60%',
  alignSelf: "center",
  height: 50,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  marginTop: 20,
  marginBottom: 20,
},
botaoTexto:{
  fontSize: 20,
  fontWeight: 'bold',
  color: '#FFFFFF'
},
input:{
borderWidth: 0.5,
borderColor: '#000',
width: '90%',
borderRadius: 5,
padding: 10,
marginBottom: 5,
justifyContent: "center",
marginHorizontal: 5,
alignSelf: "center",
backgroundColor: '#fff',
height: 45,
},
titulo:
{
  fontSize: 22,
  color: "#000",
  marginLeft: 23,
  marginTop: 15,
  fontWeight: 'bold'
}
});
