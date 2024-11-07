import React, {useState} from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import List from "./src/List";

const App = () => {
  return(
    <View style={[styles.container, {backgroundColor: "#ffffff", height: 1000}]}>
      <Image source={require("./src/iruamvarejo.png")} style={{height: 200, resizeMode: "contain"}}></Image>
      <Text style={[styles.header, {marginBottom: -30}]}>Iruam Market</Text>
      <List></List>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  }
});

export default App