import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button as ButtonPaper, Provider as ProveedorPaper} from 'react-native-paper';
import { Button as BotonElements } from 'react-native-elements';

/* ZONA 2: MAIN */
export default function App() {
    
  const [modoOscuro, setModoOscuro] = useState(false); //declaro que el botón cambiará a modo oscuro, por eso comienza como false
  const alternarModoOscuro = () => setModoOscuro(previo => !previo); //es un operador lógico, true para a false y false a true

    return (
      <ProveedorPaper>
        <ScrollView contentContainerStyle={styles.ScrollContainer}> 

        <View style={[ styles.container, {backgroundColor: modoOscuro ? '#111' : '#fff'} ]}> </View>

        <View style={styles.container}>
          <Text style={styles.title}> Modo de pantalla: {modoOscuro ? 'oscuro' : 'claro'} </Text>
          <Switch value={modoOscuro} onValueChange={alternarModoOscuro}> </Switch>
        </View>



        </ScrollView>

      </ProveedorPaper>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 50,
  },

  title: {
    fontSize: 16,
    marginVertical: 6,
    textAlign: 'center',
    color: '#000'
  },

  section: {
    marginVertical: 15,
    alignItems: 'center',
    width: '100%'
  }
  
});