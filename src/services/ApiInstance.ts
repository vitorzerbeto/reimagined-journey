import axios from 'axios';

const ApiInstance = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
  timeout: 1000,
});

export default ApiInstance;
