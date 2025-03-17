import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, Image, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Importa a tipagem do stack navigator
import { RootStackParamList } from '../types';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('MainMenuScreen');
    } else {
      alert('Preencha todos os campos');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/img.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.row}>
        <Switch value={rememberPassword} onValueChange={setRememberPassword} />
        <Text>   Lembrar minha senha</Text>
      </View>

      <TouchableOpacity onPress={() => alert('Esqueci minha senha')} style={styles.forgotPassword}>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.grayButton} onPress={() => alert('Cadastro simulado')}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.redButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  logo: { width: 200, height: 200, marginBottom: 100 },
  title: { fontSize: 18, fontWeight: 'bold' },
  input: { width: '80%', padding: 10, marginVertical: 5, borderBottomWidth: 1 },
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  forgotPassword: { marginBottom: 10 },
  link: { color: 'blue' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '80%' },
  grayButton: { backgroundColor: 'gray', padding: 10, borderRadius: 5, flex: 1, margin: 5, alignItems: 'center' },
  redButton: { backgroundColor: 'red', padding: 10, borderRadius: 5, flex: 1, margin: 5, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 16 },
});

export default LoginScreen;
