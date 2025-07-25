import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name='home-outline' size={28} color="red" />
                <Text style={styles.title}> Bienvenido a la pantalla principal </Text>
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
        padding: 20,
    },

    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    title: {
        fontSize: 18,
        marginLeft: 10,
        color: 'red',
        fontWeight: 'bold',
    },
});
