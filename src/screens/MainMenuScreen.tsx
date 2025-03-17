import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Importa o tipo do stack navigator
import { RootStackParamList } from '../types';

const MainMenuScreen = () => {
  // Define a tipagem correta da navegação
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/img.png')} style={styles.logo} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuizScreen')}>
        <Text style={styles.buttonText}>Quizzes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DoubtsScreen')}>
        <Text style={styles.buttonText}>Dúvidas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AlarmScreen')}>
        <Text style={styles.buttonText}>Alarmes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  logo: { width: 150, height: 150, marginBottom: 100 },
  button: { backgroundColor: 'red', padding: 15, margin: 10, borderRadius: 5 },
  buttonText: { color: 'white', fontSize: 18 },
});

export default MainMenuScreen;
