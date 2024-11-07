import { Button, StyleSheet, Text, View } from 'react-native';
import useSound from 'use-sound';
import song from "assets/betteroffalone.mp3"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.redbox}></View>
      <View style={styles.bluebox}></View>
      <View style={styles.blackbox}></View>
      <View style={styles.yellowbox}></View>
      <Button title="Play" onPress={() => {

      }}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: '#3b0400',
    alignItems: 'center',
    justifyContent: 'center',
    height: 800
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 100
  },
  bluebox: {
    width: 250,
    height: 100,
    backgroundColor: "blue"
  },
  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: "black"
  },
  yellowbox: {
    width: 250,
    height: 150,
    backgroundColor: "yellow",
    borderColor: "#ad1",
    borderWidth: 10
  }
});
