import axios from 'axios';
const request = axios.create({
  //baseURL: 'http://103.63.111.52:8080/',
  baseURL: 'http://localhost:8080/',
});

export default request;
