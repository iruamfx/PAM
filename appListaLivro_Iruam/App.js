import React, {useState} from "react";
import { View, Image, StyleSheet } from "react-native";
import List from "./src/List";

const App = () => {
  return(
    <View style={[styles.container, {backgroundColor: "#ffffff", height: 1000}]}>
      <Image source={require("./src/amazonia.png")} style={{height: 70, width: 320, resizeMode: "contain", marginTop: 35}}></Image>
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
});

export default App