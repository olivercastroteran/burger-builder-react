import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-9ddaf.firebaseio.com/',
});

export default instance;
