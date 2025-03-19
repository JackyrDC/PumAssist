import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Switch,
  Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberUser, setRememberUser] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  useEffect(() => {
    loadSavedCredentials();
  }, []);

  const loadSavedCredentials = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem('savedEmail');
      if (savedEmail) {
        setEmail(savedEmail);
        setRememberUser(true);
      }
    } catch (error) {
      console.error('Error al cargar las credenciales guardadas:', error);
    }
  };

  const saveCredentials = async () => {
    try {
      if (rememberUser) {
        await AsyncStorage.setItem('savedEmail', email);
      } else {
        await AsyncStorage.removeItem('savedEmail');
      }
    } catch (error) {
      console.error('Error al guardar las credenciales:', error);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor ingrese sus credenciales');
      return;
    }

    const DOCENTE_CREDENTIALS = { email: 'docente@unah.edu.hn', password: 'docente123' };
    const ESTUDIANTE_CREDENTIALS = { email: 'alumno@unah.edu.hn', password: 'alumno123' };

    if (email === DOCENTE_CREDENTIALS.email && password === DOCENTE_CREDENTIALS.password) {
      await saveCredentials();
      navigation.reset({ index: 0, routes: [{ name: 'MenuDocente' }] });
    } else if (email === ESTUDIANTE_CREDENTIALS.email && password === ESTUDIANTE_CREDENTIALS.password) {
      await saveCredentials();
      navigation.reset({ index: 0, routes: [{ name: 'MenuEstudiante' }] });
    } else {
      Alert.alert('Error', 'Credenciales inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('../assets/logo2.png')} style={styles.logo} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.university}>UNIVERSIDAD NACIONAL AUTONÓMA DE HONDURAS</Text>
            <Text style={styles.title}>SISTEMA DE ASISTENCIA</Text>
          </View>
        </View>
      </View>

      <View style={styles.formWrapper}>
        <View style={styles.formContainer}>
          <Text style={styles.loginText}>Iniciar Sesión</Text>

          <View style={[styles.inputContainer, focusedInput === 'email' || email ? styles.inputFilled : styles.inputDefault]}>
               
            <Ionicons name="person-outline" size={20} color="#6c757d" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Nombre de usuario"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholderTextColor="#6c757d"
              autoCapitalize="none"
              onFocus={() => setFocusedInput('email')}
              onBlur={() => setFocusedInput(null)}
            />
          </View>

          <View style={[styles.inputContainer, focusedInput === 'password' || password ? styles.inputFilled : styles.inputDefault]}>
  <Ionicons name="key-outline" size={20} color="#6c757d" style={styles.icon} />
  <TextInput
    style={styles.input}
    placeholder="Contraseña"
    value={password}
    onChangeText={setPassword}
    secureTextEntry
    placeholderTextColor="#6c757d"
    onFocus={() => setFocusedInput('password')} // Mueve onFocus aquí
    onBlur={() => setFocusedInput(null)} // Mueve onBlur aquí
  />
</View>

          <TouchableOpacity>
            <Text style={styles.forgotText}>¿Olvidó su nombre de usuario o contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Acceder</Text>
          </TouchableOpacity>

          <View style={styles.rememberContainer}>
            <Switch
              value={rememberUser}
              onValueChange={setRememberUser}
              thumbColor={rememberUser ? '#ffffff' : '#ffffff'}
              trackColor={{ false: '#ced4da', true: '#00C851' }}
            />
            <Text style={styles.rememberText}>Recordar nombre de usuario</Text>
          </View>
        </View>
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
    padding: 30,
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: '#FFC72C',
  },
  headerTextContainer: {
    justifyContent: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  logo: {
    width: 300, // Aumenta el tamaño si es necesario
    height: 125, // Ajusta proporcionalmente
    resizeMode: 'contain', // Asegura que la imagen no se corte
    marginRight: 20,
  },
  university: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  title: {
    color: '#FFC72C',
    fontSize: 28,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#495057',
    borderWidth: 0,
    backgroundColor: 'transparent',
  },

  formWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
  },
  formContainer: {
    width: '90%',
    maxWidth: 380,
    backgroundColor: '#f8f9fa',
    padding: 30,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#212529',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15,
    width: '100%',
  },
  inputDefault: {
    borderColor: '#ced4da',
    backgroundColor: '#fff',
  },
  inputFocused: {
    borderColor: '#007bff',
    backgroundColor: '#e7f1ff',
  },
  inputFilled: {
    borderColor: '#007bff',
    backgroundColor: '#e7f1ff',
  },
  icon: {
    marginRight: 8,
  },

  forgotText: {
    color: '#6c757d',
    fontSize: 13,
    marginBottom: 15,
    textAlign: 'right',
    width: '100%',
  },
  button: {
    backgroundColor: '#0056b3',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
  },
  rememberText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#212529',
  },
});



