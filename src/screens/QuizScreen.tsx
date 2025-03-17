import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

interface Question {
  question: string;
  options: string[];
  correct_answer: string;
}

const QuizScreen = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ answer: string; correct: boolean }[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const response = await axios.get('https://api-quiz-6a27.onrender.com/questions');

      if (response.data && response.data.length > 0) {
        setQuestions(response.data);
      } else {
        Alert.alert('Erro', 'Nenhuma pergunta disponível.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as perguntas.');
      console.error('Erro ao buscar perguntas:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkAnswer = (answer: string) => {
    if (!questions.length) return;

    const isCorrect = answer === questions[currentQuestionIndex].correct_answer;
    setUserAnswers([...userAnswers, { answer, correct: isCorrect }]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      Alert.alert('Fim do Quiz', `Você acertou ${userAnswers.filter(a => a.correct).length} de ${questions.length} perguntas!`);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="red" />
        <Text>Carregando perguntas...</Text>
      </View>
    );
  }

  if (!questions.length) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>Nenhuma pergunta disponível.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/img_mascot.png')} style={styles.logo} />

      <Text style={styles.question}>{questions[currentQuestionIndex].question}</Text>

      <FlatList
        data={questions[currentQuestionIndex].options}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.optionButton, selectedAnswer === item && styles.selectedOption]}
            onPress={() => setSelectedAnswer(item)}
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => selectedAnswer && checkAnswer(selectedAnswer)}
        disabled={!selectedAnswer}
      >
        <Text style={styles.submitText}>Enviar Resposta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  loadingContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  errorText: { fontSize: 18, fontWeight: 'bold', color: 'red' },
  logo: { width: 100, height: 100, marginBottom: 20 },
  question: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  optionButton: { backgroundColor: '#f0f0f0', padding: 10, marginVertical: 5, borderRadius: 5, width: '100%', alignItems: 'center' },
  selectedOption: { backgroundColor: '#ddd' },
  optionText: { fontSize: 16 },
  submitButton: { backgroundColor: 'purple', padding: 10, borderRadius: 5, marginTop: 20, width: '100%', alignItems: 'center' },
  submitText: { color: 'white', fontSize: 16 },
});

export default QuizScreen;
