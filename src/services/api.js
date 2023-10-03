const axios = require('axios');

// Configuração padrão do Axios
const instance = axios.create({
  baseURL: 'http://localhost:9000'
});
export default instance