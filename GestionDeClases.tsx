import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

type NavigationProp = StackNavigationProp<RootStackParamList, 'GestionDeClases'>;

export default function GestionDeClases() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.university}>UNAH-COMAYAGUA</Text>
            <Text style={styles.title}>GESTIÓN DE CLASES</Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Ionicons name="school-outline" size={50} color="#1E3766" />
          <Text style={styles.name}>Mis Clases</Text>
          <Text style={styles.info}>Seleccione una clase para gestionarla</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VerClases')}>
  <Ionicons name="book-outline" size={24} color="white" />
  <Text style={styles.buttonText}>Ver Clases Asignadas</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AgregarClase')}>
          <Ionicons name="add-circle-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Agregar Nueva Clase</Text>
        </TouchableOpacity>

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
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1E3766',
    padding: 20,
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: '#FFC72C',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 10,
  },
  headerTextContainer: {
    justifyContent: 'center',
  },
  university: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    color: '#FFC72C',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#E9F4FF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E3766',
    marginTop: 10,
  },
  info: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0056b3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 8,
    width: '100%',
    maxWidth: 350,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
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
    marginTop: 20,
  },
  exitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});