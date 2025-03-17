import axios from 'axios';

const apiAdvice = axios.create({
  baseURL: 'https://api-higiene-bucal-2.onrender.com', // URL da API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiAdvice;
