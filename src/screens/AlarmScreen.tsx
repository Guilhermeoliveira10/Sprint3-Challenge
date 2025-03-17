import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

const AlarmScreen = () => {
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [currentTime, setCurrentTime] = useState('');

  const fetchCurrentTime = async () => {
    try {
      const response = await axios.get('https://www.timeapi.io/api/Time/current/zone?timeZone=America/Sao_Paulo');
      const { hour, minute, seconds } = response.data;
      const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      setCurrentTime(formattedTime);
    } catch (error) {
      console.error('Erro ao buscar horário:', error);
      alert('Erro ao obter horário da API. Pegando horário do dispositivo.');

      const localTime = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setCurrentTime(localTime);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Defina o horário do alarme</Text>
      
      <DateTimePicker
        value={selectedTime}
        mode="time"
        display="spinner"
        onChange={(_, date) => setSelectedTime(date || selectedTime)}
      />

      <TouchableOpacity style={styles.button} onPress={() => alert(`Alarme definido para: ${selectedTime.toLocaleTimeString()}`)}>
        <Text style={styles.buttonText}>Definir Alarme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.blueButton} onPress={fetchCurrentTime}>
        <Text style={styles.buttonText}>Obter Horário Atual</Text>
      </TouchableOpacity>

      {currentTime ? <Text style={styles.timeText}>Horário atual: {currentTime}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 18, marginBottom: 20 },
  button: { backgroundColor: 'red', padding: 10, borderRadius: 5, marginTop: 20 },
  blueButton: { backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 10 },
  buttonText: { color: 'white', fontSize: 16 },
  timeText: { marginTop: 10, fontSize: 16, fontWeight: 'bold' },
});

export default AlarmScreen;
