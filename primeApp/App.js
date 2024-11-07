import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  function msg()
  {
    alert("Em breve...");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SpeedTime</Text>
      <Text style={styles.text2}>F1 - 2024</Text>
      <Button title="Clique aqui" onPress={msg}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#ffffff",
    fontSize: 34,
    fontWeight: "bold",
  },
  text2: {
    color: "#db0b00",
    
  }
});
