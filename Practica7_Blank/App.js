/*ZONA 1: Importaciones */
import React from "react";
import { useRef } from "react";
import { ScrollView, StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-web";


const App = () => {

  const ScrollViewRef = useRef(null);

  return (


  <SafeAreaProvider>

    <SafeAreaView style={styles.container} edges={['top']}>

      <ScrollView style={styles.scrollview} ref={ScrollViewRef} horizontal={false}>

        <Text style={styles.text}>

          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio
          Texto que habrá en el espacio

        </Text>

      </ScrollView>

    </SafeAreaView>

  </SafeAreaProvider>
  );
};

// Definimos estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,                            
    paddingTop: StatusBar.currentHeight 
  },
  scrollview: {
    backgroundColor: 'green',         
  },
  text: {
    fontSize: 40,                       
    padding: 12,                         
  },
});


// Exportamos 
export default App;