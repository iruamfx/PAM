import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, Touchable, TouchableOpacity } from 'react-native';

export default function Home({navigation})
{
  return(
    <ImageBackground style={styles.container} source={{uri : "https://images.hdqwalls.com/download/beamng-drive-8k-ev-2048x2048.jpg"}}>
      <Image style={styles.image} source={{uri : "https://wiki.beamng.com/images/thumb/6/63/BeamNG-logo-2016.svg/744px-BeamNG-logo-2016.svg.png"}} ></Image>
      <Text style={styles.header}>STORE</Text>
      <Text style={styles.subheader}>Confira nossas linhas:</Text>
      <View>
        <TouchableOpacity style={styles.clickCard} onPress={() => {navigation.navigate("Comfort")}}>
          <Image style={styles.clickCardImg} source={{uri: "https://static.wikia.nocookie.net/beamng/images/a/a9/Default_%2841%29.jpg/revision/latest?cb=20221024080814"}}/>
          <Text style={styles.clickCardText}>Tograc - Comfort Line+ 2.0</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.clickCard} onPress={() => {navigation.navigate("Utility")}}>
          <Image style={styles.clickCardImg} source={{uri: "https://static.wikia.nocookie.net/beamng/images/9/90/D15_4wd_M.jpg/revision/latest?cb=20221230225736"}}/>
          <Text style={[styles.clickCardText, {backgroundColor: "#fca105c0"}]}>D Series - Util QuadTorque</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.clickCard} onPress={() => {navigation.navigate("Sport")}}>
          <Image style={styles.clickCardImg} source={{uri: "https://static.wikia.nocookie.net/beamng/images/1/1d/ETKremaster.png/revision/latest/scale-to-width-down/1000?cb=20230307204221"}}/>
          <Text style={[styles.clickCardText, {backgroundColor: "#fc0505c0"}]}>ttSport K Series - PurePower V8</Text>
        </TouchableOpacity>
      </View>
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
    },
    clickCard: {
      backgroundColor: "#000",
      alignItems: "center",
      borderRadius: 10,
      marginBottom: 15
    },
    clickCardText: {
      color: "white",
      position: "absolute",
      backgroundColor: '#000000c0',
      width: 340,
      textAlign: "center",
      marginTop: 100,
      lineHeight: 30,
      zIndex: 2
    },
  });