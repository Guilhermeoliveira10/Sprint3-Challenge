import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import apiAdvice from '../services/apiAdvice';

const DoubtsScreen = () => {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const loadAdvice = async (category: string) => {
    setLoading(true);
    try {
      const response = await apiAdvice.get(`/advice/${category}`);
      setAdvice(response.data.advice || 'Nenhum conselho disponível.');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar o conselho.');
      setAdvice('Erro ao carregar conselho.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/img.png')} style={styles.logo} />
      <Text style={styles.text}>Selecione sua dúvida, que o Super Dentinho irá ajudar!</Text>

      <TouchableOpacity style={styles.button} onPress={() => loadAdvice('toothCare')}>
        <Text style={styles.buttonText}>Escovação</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => loadAdvice('goodHabits')}>
        <Text style={styles.buttonText}>Bons Hábitos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => loadAdvice('dentalFloss')}>
        <Text style={styles.buttonText}>Fio Dental</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => loadAdvice('toothache')}>
        <Text style={styles.buttonText}>Dor de Dente</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="red" style={styles.loadingIndicator} />
      ) : (
        <Text style={styles.adviceText}>{advice}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  logo: { width: 150, height: 150, marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10, fontWeight: 'bold', textAlign: 'center' },
  button: { backgroundColor: 'red', padding: 10, marginVertical: 5, borderRadius: 5, width: '80%', alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 16 },
  adviceText: { marginTop: 20, fontSize: 16, fontStyle: 'italic', textAlign: 'center' },
  loadingIndicator: { marginTop: 20 },
});

export default DoubtsScreen;
