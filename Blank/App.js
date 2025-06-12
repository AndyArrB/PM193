/* ZONA 1: IMPORTACIONES */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

// Texto que cambia de Hola Mundo a Estado Cambiado
const Texto = () => {
  const [contenido, setContenido] = useState('Hola mundo')
  const actualizaTexto = () => {setContenido('Estado modificado')}
  return (
    <Text onPress={actualizaTexto}> {contenido} </Text>
  )
}

// Boton con cambio de estado de un Presionar a Presionado
const PresionarBoton = () => {
  const [titulo, setTitulo] = useState('Presionar');
  const actualizarAhora = () => {
    setTitulo('¡Presionado!');
  };
  return (
      <Button title={titulo} onPress={actualizarAhora} />
  );
}

/* ZONA 2: MAIN */
export default function App() {
  return (
    /* Todos los componentes deben ir dentro de un view */
    <View style={styles.container}>

      <Texto> </Texto>
      <Texto> </Texto>
      <Texto> </Texto>
      <PresionarBoton></PresionarBoton>
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
