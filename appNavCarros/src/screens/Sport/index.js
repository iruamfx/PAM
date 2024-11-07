import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, Touchable, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';

export default function Utility({navigation})
{
  const[tel, setTel] = useState('');

  return(  
    <ImageBackground style={styles.container} source={{uri : "https://traxion.gg/wp-content/uploads/2023/04/bng11.jpg"}}>
      <Image style={styles.image} source={{uri : "https://wiki.beamng.com/images/thumb/6/63/BeamNG-logo-2016.svg/744px-BeamNG-logo-2016.svg.png"}} ></Image>
      <Text style={styles.header}>ETK ttSport <Text style={{fontStyle: "italic", fontWeight: "black"}}>PurePower</Text> V8</Text>
      <Text style={styles.subheader}>Conheça o novo K Series:</Text>
      <Image style={styles.clickCardImg} source={{uri: "https://beamng.com/game/news/patch/beamng-drive-v0-28/etk-3.jpg"}}/>
      <View style={styles.clickCard}>
        <Text style={[styles.clickCardText, {fontWeight: "bold", fontStyle: "italic", marginBottom: 2}]}>"Excel with Excellence"</Text>
        <Text style={[styles.clickCardText, { backgroundColor: "#fff", color: "black", letterSpacing: .1, lineHeight: 17}]}>
          Domine as pistas como um rei com o novo Kc8x PurePower. O motor Javelin V8 4.6L, transmissão de corrida ttSport 6 marchas DCT sequencial, 
          tração variavel RWD & AWD e aerofólio de fabrica Nomi GTX Lowfly fazem do Kc8x uma força imparavel na pista. Seu baixo custo de aquisição
          e manutenção, junto com software de controle RaceLogic ETK ECS, especialmente desenvolvido para o K Series fazem dele uma opção viavel para desde
          corredores novos até os mais experientes automobilistas. "Excel with Excellence" com o novo Kc8x. 
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
      backgroundColor: '#d1041cc0',
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