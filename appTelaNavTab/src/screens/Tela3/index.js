import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Tela3({navigation})
{
  return(
    <View style={styles.container}>
      <Text>Tela 3</Text>
      <Button
        title="Ir para Principal"
        onPress={() => {navigation.navigate("Principal")}}
      ></Button>
    </View>
  )    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff0f',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });