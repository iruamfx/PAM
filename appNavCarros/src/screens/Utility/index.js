import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, Touchable, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';

export default function Utility({navigation})
{
  const[tel, setTel] = useState('');

  return(  
    <ImageBackground style={styles.container} source={{uri : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FWCg101ftfjw%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=70672117486b7de1abf59a9c1b5f41c1531e8bdc161820e869058caebcafa112&ipo=images"}}>
      <Image style={styles.image} source={{uri : "https://wiki.beamng.com/images/thumb/6/63/BeamNG-logo-2016.svg/744px-BeamNG-logo-2016.svg.png"}} ></Image>
      <Text style={styles.header}>Utility QuadTorque V8</Text>
      <Text style={styles.subheader}>Conheça o novo D Series:</Text>
      <Image style={styles.clickCardImg} source={{uri: "https://www.modhub.us/uploads/images/photos/2023_3/cover_dfa-pack-for-beamngdrive-d-series-addon_0NHNftv9A9z8Ag.webp"}}/>
      <View style={styles.clickCard}>
        <Text style={[styles.clickCardText, {fontWeight: "bold", fontStyle: "italic", marginBottom: 10}]}>"Quad the Range, Quad the Power"</Text>
        <Text style={[styles.clickCardText, { backgroundColor: "#fff", color: "black", letterSpacing: .1, lineHeight: 20}]}>
          Nenhum destino é impossivel para o novo D Series QuadTorque V8. Com 600 cavalos de potencia (600hp) produzido por seu motor Marauder 6.9L V8, tração integral nas quatro rodas e modularidade de fabrica, permitindo 
          infinitas adaptações e personalizações para a situação, como encaixes adaptaveis para rodas de off-road, é seguro constatar que o unico limite para o novo D Series é a sua imaginação.
        </Text>
      </View>
      <Text style={styles.text}>Numero de telefone para contato: </Text>
      <TextInput 
        placeholder='Digite aqui' 
        style={{backgroundColor: "#4f4f4f", height: 25, width: 120, color: "white", textAlign: "center", marginVertical: 10, borderRadius: 5}}
        onChangeText={(text) => {setTel("Seu numero de telefone foi registrado em nosso sistema:" + text)}}
      ></TextInput>
      <Button 
        title='Contate vendas agora!'
        onPress={() => {alert(tel)}}
        style={{backgroundColor: "#edae25"}}
      ></Button>
    </ImageBackground>
  )    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center"
    },
    image: {
      height: 100,
      width: 400,
      backgroundColor: '#000000c0',
      marginTop: 20,
      tintColor: "#ffffff",
    },
    header: {
      color: 'white',
      fontSize: 22,
      lineHeight: 44,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
      marginBottom: 10,
      width: 400
    },
    subheader: {
      color: 'white',
      fontSize: 22,
      lineHeight: 44,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#edae25c0',
      marginBottom: 20,
      width: 400
    },
    text: {
      color: "white"
    },
    clickCardImg: {
      resizeMode: "cover",
      height: 140,
      width: 340,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginBottom: 10
    },
    clickCard: {
      backgroundColor: "#fff",
      alignItems: "center",
      borderRadius: 10,
      marginBottom: 15
    },
    clickCardText: {
      color: "white",
      backgroundColor: '#262626',
      width: 340,
      textAlign: "center",
      lineHeight: 30,
      borderRadius: 10
    },
  });