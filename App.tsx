import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa a tipagem do Stack Navigator
import { RootStackParamList } from './src/types';

// Importação das telas
import LoginScreen from './src/screens/LoginScreen';
import MainMenuScreen from './src/screens/MainMenuScreen';
import QuizScreen from './src/screens/QuizScreen';
import DoubtsScreen from './src/screens/DoubtsScreen';
import AlarmScreen from './src/screens/AlarmScreen';

// Criação do Stack Navigator tipado corretamente
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="DoubtsScreen" component={DoubtsScreen} />
        <Stack.Screen name="AlarmScreen" component={AlarmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
