/*ZONA 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-web';


//ZONA 2: Main 
export default function App() {

  const alertaBasica =() => {
    window.alert('Hola, esta es una alerta básica'); //declaro la alerta basica 
  };

  const alertaConfirmacion = () => {
    const confirmacion = window.confirm('¿Lista para una nueva aventura?') //creo una alerta de confirmacion
    if (confirmacion) { // si la confirmacion se cumple
      window.alert('Que tengas un buen viaje Andy, nos vemos en 6 meses'); //mostraré este mensaje
    } else { //en caso de que no se cumpla
      window.alert('¿Por? De miedo no se vive, tu date'); //mostraré esta otra alerta
    }
  };

  const alertaTexto = () => {
    const confirmacion = window.prompt('¿Lista para conocer Bogotá?', 'ysi') //con prompt el usuario podrá ingresar texto, predefino uno
    if (confirmacion) { //si la confirmacion se cumple, osea ingresar un texto
      window.alert(`Nos vemos en 6 meses entonces? ${confirmacion}` ); //entonces se muestra esta alerta con el texto ingresado
    } else { // en caso de que no se cumpla
      window.alert('¿Por? De miedo no se vive, tu date'); // me mostrará esta otra alerta
    }
  };
  
  const alertaCondicional = () => {
    const condicion = window.prompt('¿Qué edad tienes?'); //aca lo que haré será una condicional, primero hago una pregunta al usuario
    const numero = parseInt(condicion); //en este caso, el numero que ingrese, lo volveré un int, osea numero entero
    if (numero >= 1 && numero <= 30) { //si se cumple la condicion (ser mayor de 1 año pero menor de 30)
      window.alert(`Lol, apenas ${condicion}? Estás jóven aún` ); //entonces le mostraré esta alerta con un mensaje
    } else { //en caso de no cumplir con la condicion
      window.alert('Zaz, fuerza'); //entonces le mostraré ottra alerta con otro texto diferente
    }
  };
  
  const alertaTiempo = () => { //esta alrte se ejecutará despues de cierto tiempo
    setTimeout( () => { //cuando el usuario haga click en el botón, se ejecuta un settimeout
      window.alert('Ya pasaron 3 segundos, enfa'); //y esta alerta aparecerá con dicho mensaje
    }, 3000) //siempre y cuando hayan pasado 3 segundos
  };

  const [defaultText, onChangeDefault] = useState('');

  const [numberPadText, setNumberPadText] = useState('');

  const [decimalPadText, setDecimalPadText] = useState('');

  const [numericText, setNumericText] = useState('');

  const [emailText, setEmailText] = useState('');

  const [phoneText, setPhoneText] = useState('');

  const [urlText, setUrlText] = useState('');

  const [visiblePassword, setVisiblePassword] = useState('');

  // Validaciones 
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); //realiza una validacion de email

  const isValidPhone = (phone) => /^[0-9]{7,15}$/.test(phone); //realiza una validacion de telefono para solo aceptar los numeros

  const isValidUrl = (url) => /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/[\w.-])\/?$/.test(url); //lo mismo pero para una URL

  const isNumeric = (value) => /^[0-9]+$/.test(value);

  const isDecimal = (value) => /^[0-9]*\.?[0-9]+$/.test(value);

  return (
    // Componente principal que renderiza la pantalla
    <ScrollView contentContainerStyle={styles.container}>


    <View style={styles.container}>
      <Button title='Alerta basica' onPress={alertaBasica}></Button>
    </View>

    <View style={styles.container}>
      <Button title='Alerta de confirmación' onPress={alertaConfirmacion}></Button>
    </View>
      
    <View style={styles.container}>
      <Button title='Alerta de texto' onPress={alertaTexto}></Button>
    </View>

    <View style={styles.container}>
      <Button title='Alerta de edad' onPress={alertaCondicional}></Button>
    </View>

    <View style={styles.container}>
      <Button title='Alerta de tiempo' onPress={alertaTiempo}></Button>
    </View>

      <Text style={styles.label}>default: </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeDefault}
        value={defaultText}
        placeholder="Escribe solo texto"
        keyboardType="default"
      />

      <Text style={styles.label}>number-pad: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa solo números"
        keyboardType="number-pad"
        value={numberPadText}
        onChangeText={(text) => {
          if (isNumeric(text) || text === '') setNumberPadText(text);
        }}
      />

      <Text style={styles.label}>decimal-pad: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa números decimales"
        keyboardType="decimal-pad"
        value={decimalPadText}
        onChangeText={(text) => {
          if (isDecimal(text) || text === '') setDecimalPadText(text);
        }}
      />

      <Text style={styles.label}>numeric: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa números"
        keyboardType="numeric"
        value={numericText}
        onChangeText={(text) => {
          if (isNumeric(text) || text === '') setNumericText(text);
        }}
      />

      <Text style={styles.label}>email-address: </Text>
      <TextInput
        style={[styles.input, !isValidEmail(emailText) && emailText ? styles.errorInput : null]}
        placeholder="Ingresa correo electrónico"
        keyboardType="email-address"
        value={emailText}
        onChangeText={setEmailText}
        autoCapitalize="none"
      />
      {!isValidEmail(emailText) && emailText !== '' && (
        <Text style={styles.errorText}>Correo inválido</Text>
      )}

      <Text style={styles.label}>phone-pad: </Text>
      <TextInput
        style={[styles.input, !isValidPhone(phoneText) && phoneText ? styles.errorInput : null]}
        placeholder="Ingresa teléfono"
        keyboardType="phone-pad"
        value={phoneText}
        onChangeText={setPhoneText}
      />
      {!isValidPhone(phoneText) && phoneText !== '' && (
        <Text style={styles.errorText}>Teléfono inválido</Text>
      )}

      <Text style={styles.label}>url:</Text>
      <TextInput
        style={[styles.input, !isValidUrl(urlText) && urlText ? styles.errorInput : null]}
        placeholder="Ingresa URL"
        keyboardType="url"
        value={urlText}
        onChangeText={setUrlText}
        autoCapitalize="none"
      />
      {!isValidUrl(urlText) && urlText !== '' && (
        <Text style={styles.errorText}>URL inválida</Text>
      )}

      <Text style={styles.label}>visible-password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa Contraseña"
        keyboardType="visible-password"
        value={visiblePassword}
        onChangeText={setVisiblePassword}
        secureTextEntry={false}
        autoCapitalize="none"
      />

      <StatusBar style="auto" />
    </ScrollView>
  );
}


//ZONA 3: Estilos- Estética
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 4,
  },
});