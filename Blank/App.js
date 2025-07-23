// Importamos React para poder usar JSX y crear componentes funcionales
import React, { useState } from 'react';

// Importamos componentes de la librería 'react-native' que usaremos en la interfaz
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Button,
  Pressable
} from 'react-native';

// Componente principal de la app
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Botón para abrir el modal */}
      <Button title="Abrir Modal" onPress={handleOpenModal} />

      {/* Modal con contenido */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
        onShow={() => console.log("Aquí anda el modal")}
        onDismiss={() => console.log("Ya no anda aquí el modal")}
      >
        {/* Fondo oscurecido y centrado */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Acá anda el modal.</Text>

            <Pressable
              style={styles.buttonClose}
              onPress={handleCloseModal}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
