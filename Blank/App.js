/* ZONA 1: IMPORTACIONES */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto = (props) => {
  const {children} = props
  return (
    <Text> {children} </Text>
  )
}

/* ZONA 2: MAIN */
export default function App() {
  return (
    /* Todos los componentes deben ir dentro de un view */
    <View style={styles.container}>

      <Texto > Hola </Texto>
      <Texto > Mundo, </Texto>
      <Texto > lol </Texto>
      <button title="Presionar"> Presionar </button>
      <StatusBar style="auto" />

    </View>
  );
}


/* ZONA 3: ESTILOS Y ESTÉTICA */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
