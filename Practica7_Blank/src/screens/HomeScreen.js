import React from "react";
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from "react-native";

const HomeScreen = () => {
    return (
        <ImageBackground source={require('C:/Users/arred/OneDrive/Documentos/Andrea/UPQ/9no CUATRI/9no Progra móvil/PM193/Practica7_Blank/src/assets/blue1.jpg')}
        style={styles.background}>

        <SafeAreaView style={styles.content}>

            <Text style={styles.text}>
                Pantalla Principal
            </Text>
            
        </SafeAreaView>

        </ImageBackground>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    background: {
        flex:1,
        justifyContent: 'center'
    },

    text: {
        marginTop:20,
        color: '#fff',
        fontSize:28,
        fontWeight:'bold'
    },

    content: {
        alignItems:'center'
    }
});