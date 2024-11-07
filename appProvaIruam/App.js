import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView, ImageBackground, Image } from 'react-native';
//Atenção instale o axios na pasta dentro do Projeto appProvaSeuNome  
import axios from 'axios'; // npm install axios

import {Ionicons} from '@expo/vector-icons';

export default function App(){
  
  const mensagemDuplicidade = () =>
    Alert.alert(
      "Erro ao Salvar",
      "Nome Já Cadastrado",
      [
        { text: "OK", onPress: () => setAbrir(true) }
      ],
      { cancelable: true }
    ); 

  const api = 'http://10.68.36.103/provaIruam/';
  const [lista, setLista] = useState([]);
  const [navio, setNavio] = useState(''); //SUBSTITUA PELO ATRIBUTO CRIADO POR VOCÊ
  const [id, setId] = useState('');
  const [buscar, setBuscar] = useState('');
  {/* state para tela de cadastro modal */}
  const[abrir, setAbrir] = useState(false);

  useEffect(()=> {
    listarDados();
  },[])

   
  async function listarDados(){
    const res = await axios.get(api + 'listar.php?busca=' + buscar);
    setLista(res.data.result);
   
  }

  async function add(){
    const obj = {navio, id};   // NO LUGAR DO NOME COLOQUE O ATRIBUTO CRIADO POR VOCÊ 

      const res = await axios.post(api + 'add.php', obj);
       if(res.data.success === true){
      
         limparCampos();       
      }

      if(res.data.success === 'Navio já Cadastrado!'){  //TROQUE A MENSAGEM PELO ATRIBUTO CADASTRADO
        mensagemDuplicidade();
        
      }     
    
    
    listarDados();
    setAbrir(false);   
    }
 
  function limparCampos(){
        setNavio('');  //TROQUE PELO ATRIBUTO CRIADO POR VOCÊ  
        setId('0');
  }

  return (
    <View>
    <View style={estilos.navbar}>
    
    <Ionicons name="boat-outline" size={30} color="#FFF" style={{marginRight: 10}}></Ionicons>
    <Text style={estilos.textonavbar}>MARINE RADAR</Text>      
    
    <TouchableOpacity
      
      style={estilos.botao}
      onPress={ () => setAbrir(true)}
      >
        <Ionicons name="add" size={30} color="#FFF"></Ionicons>
        
      </TouchableOpacity>
    </View>


{/*lista os dados cadastro  */ }
      <ScrollView>
      <View style={estilos.grid}>
        {lista.map(item => (
          <View style={estilos.griditem} key={item.id}><Text style={{color: '#FFFFFF'}}> {item.id} - {item.navio} </Text>
        </View>
      ))}        
      </View>
      </ScrollView>

      <Image source={require("./src/vesselbg2.webp")} resizeMode='cover' style={{position: "absolute", elevation: -2, marginTop: 100, marginLeft: -50}}></Image>

{/*tela cadastro  */ }
     <Modal    
      transparent={false}
      visible={abrir}
      >
        <SafeAreaView style={estilos.modal}>

          <View style={estilos.modalHeader}>
          <TouchableOpacity
              onPress={ () => setAbrir(false)}
          >
           <Ionicons style={{marginLeft:5, marginRight:5}} name="arrow-back" size={35} color="#FFF"></Ionicons>
          </TouchableOpacity>
        <Text style={estilos.textoModal}>Inserir navio</Text>
        </View>


   <TextInput 
      type="text"
      style={estilos.input}
      placeholder="Digite o nome do navio a cadastrar"
      value={navio}
      onChangeText={ (navio) => setNavio(navio)} //TROQUE NOME PELO ATRIBUTO CRIADO 
      />

       
      <TouchableOpacity  
      style={estilos.botaoModal}
      onPress={add}
      >
        <Text  style={estilos.textoBotaoModal}>Salvar</Text>
      </TouchableOpacity>

      </SafeAreaView>
      </Modal>
 </View> 
    );
}


const estilos = StyleSheet.create({
  modal:{
    flex: 1,
    backgroundColor:'#22276e'
    
  },

  textoModal:{    
    color: '#FFF',    
    marginLeft: 15,
    fontSize:25,       
  },

  modalHeader:{    
   marginLeft:10,
   marginTop:20,
   alignItems:'center',
   flexDirection:'row',
   marginBottom:30,
    
  },

  input:{
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    margin: 8,
    padding: 8,
    color: '#000',
    fontSize:16
  },
  botaoModal:{
    backgroundColor: '#003115',
    borderRadius: 5,
    margin: 5,
    padding: 15,
    color: '#FFF',
    alignItems:'center',
    justifyContent:'center',
  },
  textoBotaoModal:{
    fontSize:16,
    color:'#FFF',

  },

  navbar:{
    backgroundColor: '#161b5c',
    padding: 12,
    color: '#FFF',
    flexDirection:'row',
    paddingTop: 45,
  },

  textonavbar:{
    fontSize:20,
    color:'#FFF',
    marginTop: 4,
    marginBottom: 2,
  },

  botao:{
    position: 'absolute', 
    right: 13,
    marginTop: 46,
  },


  grid:{
    //marginTop: 8,
    backgroundColor: '#00a8c9',   
  },

  griditem:{
    padding: 11,
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: StyleSheet.hairlineWidth,   
  },

});