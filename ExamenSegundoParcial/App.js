import React, { useState } from 'react';
import {
  View, Text, TextInput, Button, ActivityIndicator,
  FlatList, ScrollView, StyleSheet, Alert,
} from 'react-native';

const BEARER_TOKEN = 'D0FCG41BRVXQI22XPXDAVIRX1QIO0O1BKZCR4SOCTMDLTXUR';
const API_VERSION = '2025-06-17';

export default function App() {
  const [food, setFood] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);

  const searchPlaces = async () => {
    if (!food.trim() || !city.trim()) {
      Alert.alert('Error', 'Por favor ingresa comida y ciudad');
      return;
    }

    setLoading(true);
    setPlaces([]);

    try {
      const SEARCH_URL = `https://places-api.foursquare.com/places/search?query=${encodeURIComponent(food)}&near=${encodeURIComponent(city)}&limit=10`;
      const res = await fetch(SEARCH_URL, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${BEARER_TOKEN}`,
          'X-Places-Api-Version': API_VERSION,
        },
      });

      if (!res.ok) throw new Error(`Error en la API: ${res.status}`);
      const { results } = await res.json();

      if (!results || results.length === 0) {
        Alert.alert('Sin resultados', 'No se encontraron lugares para esa búsqueda.');
        return;
      }

      const detailedPlaces = await Promise.all(
        results.map(async (place) => {
          const id = place.fsq_id;
          if (!id) return place;

          try {
            const detailRes = await fetch(
              `https://places-api.foursquare.com/places/${id}?fields=fsq_id,location,phone,rating,tips`,
              {
                headers: {
                  Accept: 'application/json',
                  Authorization: `Bearer ${BEARER_TOKEN}`,
                  'X-Places-Api-Version': API_VERSION,
                },
              }
            );

            const detail = detailRes.ok ? await detailRes.json() : {};
            return { ...place, ...detail };
          } catch (err) {
            console.error('Error al obtener detalles:', err.message);
            return place;
          }
        })
      );

      setPlaces(detailedPlaces);
    } catch (e) {
      console.error(e);
      Alert.alert('Error', e.message);
    } finally {
      setLoading(false);
    }
  };

  const renderPlace = ({ item }) => {
    const name = item.name || '—';
    const distance = item.distance ? `${item.distance} m` : '—';
    const rating = item.rating != null ? item.rating : '—';
    const addr = item.location?.formatted_address || 'No disponible';
    const phone = item.phone || 'No disponible';
    const reviews = item.tips?.map(t => t.text).slice(0, 3) || [];

    return (
      <View style={styles.card}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtext}>⭐ {rating} • 📍 {distance}</Text>
        <Text style={styles.label}>Dirección:</Text>
        <Text style={styles.text}>{addr}</Text>
        <Text style={styles.label}>Teléfono:</Text>
        <Text style={styles.text}>{phone}</Text>
        {reviews.length > 0 && <Text style={styles.label}>Reseñas:</Text>}
        <ScrollView style={styles.reviews}>
          {reviews.map((rev, i) => (
            <Text key={i} style={styles.review}>• {rev}</Text>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Buscar Lugares para Comer</Text>

      <TextInput
        style={styles.input}
        placeholder="Comida (ej: pizza)"
        value={food}
        onChangeText={setFood}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Ciudad (ej: Guadalajara)"
        value={city}
        onChangeText={setCity}
        autoCapitalize="none"
      />
      <Button title="Buscar" onPress={searchPlaces} disabled={loading} />

      {loading && <ActivityIndicator size="large" style={styles.loader} />}

      <FlatList
        data={places}
        keyExtractor={item => item.fsq_id || Math.random().toString()}
        renderItem={renderPlace}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={!loading && <Text style={styles.empty}>No hay resultados</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f7fa' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 12, textAlign: 'center', color: '#333' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#fff',
  },
  loader: { marginVertical: 20 },
  empty: { marginTop: 40, textAlign: 'center', color: '#999' },
  card: {
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 4, color: '#222' },
  subtext: { fontSize: 14, color: '#666', marginBottom: 8 },
  label: { fontWeight: 'bold', color: '#444', marginTop: 6 },
  text: { color: '#333' },
  reviews: { marginTop: 6, maxHeight: 100 },
  review: { fontStyle: 'italic', color: '#555', marginVertical: 2 },
});
