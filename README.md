# 📌 Dentinho Feliz - Aplicativo de Conscientização sobre Higiene Bucal Infantil

O **Dentinho Feliz** é um aplicativo desenvolvido para conscientizar crianças de até 14 anos sobre a importância da higiene bucal, promovendo hábitos saudáveis de forma lúdica e interativa. O objetivo é reduzir a ocorrência de problemas dentários futuros, diminuindo assim a necessidade de sinistros dentais e promovendo a saúde bucal desde a infância.

## 🎯 Objetivos do Projeto

- **Educar:** Ensinar crianças sobre a importância da escovação adequada, uso do fio dental e visitas regulares ao dentista.
- **Prevenir:** Reduzir a incidência de cáries, mau hálito e outros problemas bucais através de acompanhamento e orientações constantes.
- **Engajar:** Utilizar quizzes e gamificação para tornar o aprendizado divertido e atrativo.
- **Incentivar:** Criar um sistema de recompensas que motive os usuários a manter práticas de higiene bucal corretas.

## 📱 Funcionalidades Principais

### 📖 **Quiz Interativo**
- O aplicativo oferece quizzes temáticos sobre higiene bucal.
- Perguntas abordam:
  - Técnica correta de escovação.
  - Importância do fio dental.
  - Alimentos que afetam a saúde bucal.
  - Visitas regulares ao dentista.
- Adaptado para diferentes faixas etárias.

### 🏆 **Sistema de Pontuação e Recompensas**
- Cada acerto nos quizzes gera pontos.
- Os usuários podem desbloquear:
  - **Emblemas**.
  - **Avatares personalizados**.
  - **Níveis de experiência**.
- Estímulo contínuo para manter a prática de bons hábitos.

### ❓ **Dúvidas sobre Higiene Bucal**
- Seção com dúvidas frequentes.
- Respostas sobre:
  - Uso correto do fio dental.
  - Quantidade ideal de escovação diária.
  - Primeira visita ao dentista.
- Linguagem simples e acessível para crianças.

### ⏰ **Sistema de Alarmes**
- Alertas configuráveis para lembrar a criança de escovar os dentes.
- Pais e responsáveis podem personalizar os horários.

## 🎨 Interface e Design

- **Visual atrativo:** Cores vibrantes, ícones amigáveis e animações.
- **Navegação simples:** Adaptado para crianças pequenas.

## 🎯 Público-Alvo

- **3 a 6 anos:** Conteúdo educativo inicial sobre cuidados com os dentes.
- **7 a 10 anos:** Técnicas detalhadas de escovação e introdução ao fio dental.
- **11 a 14 anos:** Prevenção de doenças bucais e hábitos saudáveis.

## 🌎 Impacto Esperado

O **Dentinho Feliz** visa reduzir a incidência de cáries e outros problemas bucais entre crianças, criando uma geração mais consciente sobre a saúde bucal.

---

## 🔗 **Uso de APIs no Projeto**

As APIs são essenciais para a comunicação entre os serviços do aplicativo, garantindo uma experiência interativa e fluida.

### 🔧 **APIs Implementadas**

1. **Dúvidas:** `https://api-higiene-bucal-2.onrender.com`
2. **Quizzes:** `https://api-quiz-6a27.onrender.com`
3. **Horário Atual:** `http://worldtimeapi.org/api/timezone/America/Sao_Paulo`

### 📌 **Tecnologias Utilizadas**
- **Axios**: Biblioteca para requisições HTTP.
- **React Native**: Framework para desenvolvimento do aplicativo móvel.
- **REST API**: Arquitetura para comunicação com o backend.

### 📡 **Exemplos de Uso das APIs**

#### 1️⃣ **DoubtsScreen.tsx - API de Dúvidas**
```tsx
const loadAdvice = async (category: string) => {
  try {
    const response = await axios.get(`https://api-higiene-bucal-2.onrender.com/advice/${category}`);
    setAdvice(response.data.advice || 'Nenhum conselho disponível');
  } catch (error) {
    setAdvice('Erro ao carregar conselho');
  }
};
```
- Obtém respostas sobre higiene bucal com base na categoria selecionada.

#### 2️⃣ **QuizScreen.tsx - API de Quizzes**
```tsx
const loadQuestions = async () => {
  try {
    const response = await axios.get('https://api-quiz-6a27.onrender.com/questions');
    setQuestions(response.data || []);
  } catch (error) {
    Alert.alert('Erro', 'Não foi possível carregar as perguntas.');
  }
};
```
- Busca perguntas da API e exibe no quiz.

#### 3️⃣ **AlarmScreen.tsx - API de Horário Atual**
```tsx
const fetchCurrentTime = async () => {
  try {
    const response = await axios.get('http://worldtimeapi.org/api/timezone/America/Sao_Paulo');
    setCurrentTime(response.data.datetime);
  } catch (error) {
    alert('Erro ao obter horário');
  }
};
```
- Obtém o horário atual e exibe no app.

---

## 📂 **Estrutura de Pastas do Projeto**

```plaintext
DentinhoFeliz/
│── src/
│   ├── screens/            # Telas do aplicativo
│   │   ├── LoginScreen.tsx
│   │   ├── MainMenuScreen.tsx
│   │   ├── QuizScreen.tsx
│   │   ├── DoubtsScreen.tsx
│   │   ├── AlarmScreen.tsx
│   ├── assets/             # Imagens e ícones
│   ├── navigation/         # Configuração de navegação
│   ├── services/           # Integração com APIs (futuro)
│   ├── components/         # Componentes reutilizáveis
│── package.json
│── app.json
│── README.md
```

---

## 📌 **Conclusão**

O **Dentinho Feliz** é um aplicativo educativo e gamificado que busca incentivar hábitos saudáveis de higiene bucal em crianças. Através de um design amigável e interativo, o app oferece quizzes, dúvidas frequentes e um sistema de alarmes personalizados. Com o uso de **APIs externas**, o aplicativo garante um fluxo dinâmico e atualizado de informações para os usuários.

### 🔥 **Seja bem-vindo ao Dentinho Feliz!** 🦷🎉

