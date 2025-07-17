import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="person-circle-outline" size={28} color="#007BFF" />
      <Text style={styles.title}>Perfil del usuario</Text>
      <View style={styles.buttonContainer}>
        <Button title="Detalles de usuario" onPress={() => navigation.navigate('Detalle')} color="#007BFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    width: 200,
  },
});
