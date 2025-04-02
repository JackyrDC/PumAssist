import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth < 600 ? screenWidth - 40 : (screenWidth - 80) / 2; // Diseño adaptable

export default function TomaDeAsistencia() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* ENCABEZADO */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>Toma de Asistencia</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="close" size={28} color="white" />
        </TouchableOpacity>
      </View>

      {/* MÉTODOS DE ASISTENCIA */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Selecciona un método</Text>

        <View style={styles.cardsContainer}>
          <TouchableOpacity style={[styles.card, { width: cardWidth }]}>
            <Ionicons name="qr-code-outline" size={50} color="#1E3766" />
            <Text style={styles.cardTitle}>Generar QR + OTP</Text>
            <Text style={styles.cardSubtitle}>Permite a los alumnos marcar asistencia con un código QR y OTP.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, { width: cardWidth }]}>
            <Ionicons name="key-outline" size={50} color="#1E3766" />
            <Text style={styles.cardTitle}>Código de Clase + OTP</Text>
            <Text style={styles.cardSubtitle}>Los alumnos ingresan manualmente un código y OTP para registrarse.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, { width: cardWidth }]}>
            <Ionicons name="list-outline" size={50} color="#1E3766" />
            <Text style={styles.cardTitle}>Paso de Lista Manual</Text>
            <Text style={styles.cardSubtitle}>Marca asistencia manualmente para cada alumno en la lista.</Text>
          </TouchableOpacity>
          
        </View>
        <TouchableOpacity style={styles.exitButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="white" />
        <Text style={styles.exitButtonText}>Regresar</Text>
      </TouchableOpacity>
    
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#1E3766',
    width: '100%',
    height: 120,
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#FFC72C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  backButton: {
    padding: 15,
  },

  // CONTENIDO
  content: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3766',
    marginBottom: 15,
  },

  // TARJETAS DE MÉTODOS DE ASISTENCIA
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
    borderColor: '#1E3766',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E3766',
    marginTop: 10,
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
    textAlign: 'center',
  },

  // BOTÓN DE REPORTES
  reportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0056b3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 8,
    width: '100%',
    maxWidth: 350,
    marginTop: 10,
  },
  reportButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  // BOTÓN DE REGRESAR
  exitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6C757D',
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 8,
    width: '100%',
    maxWidth: 350,
    marginTop: 10,
  },
  exitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

