import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, Touchable, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';

export default function Comfort({navigation})
{
  const[tel, setTel] = useState('');

  return(
    <ImageBackground style={styles.container} source={{uri : "https://i.ytimg.com/vi/q8KS6nuyR0I/maxresdefault.jpg"}}>
      <Image style={styles.image} source={{uri : "https://wiki.beamng.com/images/thumb/6/63/BeamNG-logo-2016.svg/744px-BeamNG-logo-2016.svg.png"}} ></Image>
      <Text style={styles.header}>Comfort+ Line 2.0 SPECIAL</Text>
      <Text style={styles.subheader}>Conheça o novo Tograc:</Text>
      <Image style={styles.clickCardImg} source={{uri: "https://i.ytimg.com/vi/bvlQYBZ45T4/maxresdefault.jpg"}}/>
      <View style={styles.clickCard}>
        <Text style={[styles.clickCardText, {fontWeight: "bold", fontStyle: "italic", marginBottom: 10}]}>"vive la vida a toda velocidad"</Text>
        <Text style={[styles.clickCardText, { backgroundColor: "#fff", color: "black", letterSpacing: .1, lineHeight: 20}]}>
          Vá à qualquer lugar com conforto, segurança e eficiência. Isto garantido pelo motor híbrido 2.5L NeoI5, que reduz as emissões de CO2 em até 60% comparado a concorrentes, ademais pareado com dois motores eletricos
          para que a locomoção caiba no seu bolso, quando e onde quiser.
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
      backgroundColor: '#3289e5c0',
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