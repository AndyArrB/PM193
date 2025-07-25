import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name='person-outline' size={28} color="green" />
                <Text style={styles.title}> Perfil de usuario: Andy </Text>
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
        color: 'green',
        fontWeight: 'bold',
    },
});