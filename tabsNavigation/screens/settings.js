import { View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Settings() {
    return (
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name='settings-outline' size={28} color="blue" />
                <Text style={styles.title}> Configuración de usuario </Text>
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
        color: 'blue',
        fontWeight: 'bold',
    },
});