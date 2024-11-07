import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Tela2({navigation})
{
  return(
    <View style={styles.container}>
      <Text>Tela 2</Text>
      <Button
        title="Ir para Tela3"
        onPress={() => {navigation.navigate("Tela3")}}
      ></Button>
    </View>
  )    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00cfff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });