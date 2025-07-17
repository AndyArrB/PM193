import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Ionicons name="settings-outline" size={28} color="#28a745" />
      <Text style={styles.title}> Pantalla de configuración </Text>
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
    marginTop: 10,
    color: '#28a745',
    fontWeight: 'bold',
  },
});
