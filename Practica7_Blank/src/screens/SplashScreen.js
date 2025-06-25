import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SplashScreen = () => {
    return (
        <View style={styles.container}>

            <Image source={require('C:/Users/arred/OneDrive/Documentos/Andrea/UPQ/9no CUATRI/9no Progra móvil/PM193/Practica7_Blank/src/assets/purple1.jpg')}
        style={StyleSheet.logo}
        resizeMode="contain">
        </Image>

        <Text style={styles.title}>
            Bienvenido a la App
        </Text>

        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        height: 200,
        width:200
    },

    title: {
        marginTop:20,
        color: '#eeeeee',
        fontSize:24,
        fontWeight:'bold'
    }
})