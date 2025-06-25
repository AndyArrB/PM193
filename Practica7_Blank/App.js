/*ZONA 1: Importaciones */
import React, {useEffect, useState} from "react";
import {View, StatusBar} from 'react-native';
import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";



//ZONA 2: Main 
export default function App() {

  const [isLoading, setLoading] = useState(true);

  useEffect( () => {

    const timer = setTimeout( () => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [] );

  return (
    <View style={{flex:1}}>

      <StatusBar hidden></StatusBar>
      {isLoading ? <SplashScreen/> : <HomeScreen/>}
    </View>
  )

};


//ZONA 3: Estilos- Estética