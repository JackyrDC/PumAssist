import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Dimensiones dinámicas para que las tarjetas sean responsivas
const screenWidth = Dimensions.get('window').width;
const numColumns = screenWidth < 600 ? 1 : 2; // 1 columna en móvil, 2 en pantallas grandes
const cardWidth = screenWidth < 600 ? screenWidth - 40 : (screenWidth - 60) / 2; // Ajusta el ancho dinámicamente

const clases = [
  { id: '1', nombre: 'Base de Datos II', seccion: 'A1', facultad: 'Facultad de Ingeniería' },
  { id: '2', nombre: 'Contabilidad I', seccion: 'B2', facultad: 'Facultad de Ingeniería' },
  { id: '3', nombre: 'Circuitos Eléctricos', seccion: 'C3', facultad: 'Facultad de Ingeniería' },
  { id: '4', nombre: 'Ingeniería de Software', seccion: 'D4', facultad: 'Facultad de Ingeniería' },
  { id: '5', nombre: 'Inteligencia Artificial', seccion: 'E5', facultad: 'Facultad de Ingeniería' },
  { id: '6', nombre: 'Redes y Comunicaciones', seccion: 'F6', facultad: 'Facultad de Ingeniería' },
  { id: '7', nombre: 'Sistemas Embebidos', seccion: 'G7', facultad: 'Facultad de Ingeniería' },
];

export default function VerClases() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* ENCABEZADO UNIVERSITARIO */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>CLASES ASIGNADAS</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="close" size={28} color="white" />
        </TouchableOpacity>
      </View>

      {/* LISTA DE CLASES CON EL NUEVO DISEÑO */}
      <FlatList
        data={clases}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <View style={[styles.card, { width: cardWidth }]}>
            <Text style={styles.facultad}>{item.facultad}</Text>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.seccion}>Sección: {item.seccion}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Fondo completamente blanco
    alignItems: 'center',
    paddingHorizontal: 0, // Eliminamos cualquier padding lateral
    paddingTop: 0, // Eliminamos cualquier padding superior
  },
  // ENCABEZADO UNIVERSITARIO FINAL (SIN BORDES BLANCOS)
  header: {
    backgroundColor: '#1E3766', // Azul UNAH
    width: '100%',
    height: 120, // Se aumentó para que coincida con la imagen
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#FFC72C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: StatusBar.currentHeight ? -StatusBar.currentHeight : 0, // Elimina el espacio arriba del header
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 15,
  },
  title: {
    color: '#FFC72C',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  // BOTÓN DE REGRESAR (X)
  backButton: {
    padding: 10,
  },

  // LISTA DE CLASES - ESTILO ORDENADO Y UNIFORME
  listContainer: {
    justifyContent: 'center',
    paddingBottom: 20,
    alignItems: 'center', // Para que las tarjetas queden bien alineadas
  },
  card: {
    margin: 8,
    borderRadius: 12,
    padding: 20,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', // Fondo blanco
    borderWidth: 2,
    borderColor: '#1E3766', // Azul oscuro UNAH
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  facultad: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#1E3766',
    textAlign: 'center',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3766',
    textAlign: 'center',
  },
  seccion: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
    textAlign: 'center',
  },
});
