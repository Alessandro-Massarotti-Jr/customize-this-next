import axios from 'axios';

const ApiClient = () => {

  const token = localStorage.getItem('access_token');

  const instance = axios.create({
      baseURL: process.env.API_URL,
      headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
          'authorization': token as string
      }
  })

  return instance;
};

export default ApiClient();