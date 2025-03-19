import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function AgregarClase() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* ENCABEZADO */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('../assets/logo2.png')} style={styles.logo} />
          <Text style={styles.title}>Agregar Nueva Clase</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="close" size={28} color="white" />
        </TouchableOpacity>
      </View>

      {/* FORMULARIO */}
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Código de la clase (Ej: MAT101)" />
        <TextInput style={styles.input} placeholder="Nombre de la clase (Ej: Matemáticas I)" />
        <TextInput style={styles.input} placeholder="Sección (Ej: 0701)" />
        <TextInput style={styles.input} placeholder="Carrera (Ej: Ingeniería en Sistemas)" />
        <TextInput style={styles.input} placeholder="Periodo Académico (Ej: I PAC 2025)" />
        <TextInput style={styles.input} placeholder="Horario (Ej: Lunes y Miércoles 10:00 AM - 12:00 PM)" />
        <TextInput style={styles.input} placeholder="Edificio y Aula (Ej: Edificio A, Aula 101)" />

        {/* BOTÓN DE REGISTRAR */}
        <TouchableOpacity style={styles.button}>
          <Ionicons name="checkmark-circle-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Registrar Clase</Text>
        </TouchableOpacity>

        {/* BOTÓN DE REGRESAR */}
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
  // ENCABEZADO
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
    padding: 10,
  },

  // FORMULARIO
  form: {
    width: '90%',
    marginTop: 20,
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#1E3766',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },

  // BOTÓN DE REGISTRAR
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0056b3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 8,
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
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
    marginTop: 10,
  },
  exitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

