import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View, Switch, Button, ImageBackground, Image } from 'react-native'; //importo componenetes que usaré

export default function App() { //inicio la app

  const [nombre, setNombre] = useState(''); //declaro los cambios de estado que tendre en nombre, correo y terminos
  const [correo, setCorreo] = useState(''); //inician vacios 
  const [terminos, setTerminos] = useState(false); //y los terminos como "apagados o en rechazo"

//hago la funcion de lo que pasará cuando se oprima el botón
  const registrarUsuario = () => {

    //si no hay nada en el nombre
    if (!nombre) {
      Alert.alert('Error', 'Todos los campos son súper obligatorios'); //mandará una alerta de error y pedirá llenar todos los campos
      return;
    }

    if (!correo) { //lo mismo con correo, si no hay nada
      Alert.alert('Error', 'Todos los campos son súper obligatorios'); //entonces mandará la alerta de error
      return;
    }

    if (!terminos) { //en caso de que los terminos no sean aceptados
      Alert.alert('Error', 'Debes aceptar los términos, caramba'); //igual habrá una alerta para que el usuario los acepte
      return;
    }

    Alert.alert('Se ha realizado el registro', `Nombre: ${nombre} \nCorreo: ${correo}` ) //si todo está bien, realiza el registro y lo muestra al usuario
  }

  return (

    //mostrará una imagen de fondo
    <ImageBackground source={require('C:/Users/arred/OneDrive/Documentos/Andrea/UPQ/9no CUATRI/9no Progra móvil/PM193/Blank-adicional/assets/fondo.jpg')} style={styles.fondo}>

      {/* Esto es lo principal que muestro a mi usuario */}
      <View style={styles.contenedor}>
        {/* Pongo una imagen de logo (que igual es una imagen muy random) */}
        <Image source={require('C:/Users/arred/OneDrive/Documentos/Andrea/UPQ/9no CUATRI/9no Progra móvil/PM193/Blank-adicional/assets/logo.jpg')} style={styles.logo} />

        {/* Este es el titulo principal, osea el registro */}
        <Text style={styles.titulo}>Registro: </Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo:"
          placeholderTextColor="#999"
          value={nombre} //inicia como un nombre vacio
          onChangeText={setNombre} //y cambiará cuando el usuario ingrese alguno
        />

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#999"
          value={correo} //igual inicia vacio pq así lo declaré antes
          onChangeText={setCorreo} //y cambiará cuando el usuario ingrese algo
          keyboardType="email-address" //esto permite que el teclado del usuario sea predeterminado a un correo (le pone el .com en una esquina y el arroba en la otra)
        />

        <View style={styles.switchContenedor}>
          <Text style={styles.switchText}>Aceptar términos y condiciones</Text>
          <Switch //esto es el botoncito que cambia entre aceptar y no aceptar los terminos
            value={terminos}
            onValueChange={setTerminos}
          />
        </View>

        {/* Al hacer click en el botón se ejecuta mi funcion de registrar al usuario que se escribió arriba */}
        <Button title="Registrar" onPress={registrarUsuario} color="#4CAF50" /> 
      </View>
    </ImageBackground>
  )

};

//los estilos que usé para titulo, el contenedor, la imagen de logo, la fondo y los textos
const styles = StyleSheet.create({

  fondo: {
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },

  contenedor: {
    backgroundColor: '#fff',
    margin:20,
    borderRadius:15,
    padding:20,
    alignItems:'center'
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain'
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },

  input: {
    width: '100%',
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff'
  },

  switchContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
    width: '100%'
  },

  switchText: {
    fontSize: 16,
    color: '#333'
  }

});