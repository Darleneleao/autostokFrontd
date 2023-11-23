<template>
  <div class="login-container">
    <div class="form-container">
      <div class="input-container">
        <input
          type="text"
          class="input"
          v-model="usuario"
          placeholder="Nome de usuário"
        />
        <i class="icon el-icon-user"></i>
      </div>
      <div class="input-container">
        <input
          type="password"
          class="input"
          v-model="senha"
          placeholder="Senha"
        />
        <i class="icon el-icon-lock"></i>
      </div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
    <div class="buttonLogin-container">
      <button class="buttonLogin" @click="login">LOGIN</button>
    </div>
  </div>
</template>

<script>
import autheticationService from "../services/authenticationService";
export default {
  name: "LoginView",
  data() {
    return {
      usuario: "",
      senha: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await autheticationService.login({ login: this.usuario, password: this.senha });
        console.log(response);
        this.$router.push("/selecionarTipo");
        location.reload();
      } catch (error) {
        console.log(error);
        this.errorMessage = "Usuário ou senha inválidos.";
        
      }
    },
    
  },
  
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  gap: 2rem;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 300px; /* Limita a largura máxima do contêiner do formulário */
}

.input-container {
  position: relative;
  width: 100%;
}

.input {
  width: 100%;
  height: 3rem; /* tamanho relativo */
  padding-left: 3rem; /* espaço para o ícone */
  border: 2px solid #17b8be;
  border-radius: 10px;
  font-size: 1rem; /* tamanho relativo */
}

.icon {
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  color: #ffffff;
  border: none;
  border-radius: 50px;
  background-color: #17b8be;
  font-size: 2rem; /* tamanho relativo */
  padding: 0.5rem; /* tamanho relativo */
}

.buttonLogin-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  max-width: 250px; /* Limita a largura máxima dos botões */
}

.buttonLogin {
  width: 100%;
  height: 3rem; /* tamanho relativo */
  background-color: #17b8be;
  color: #000000;
  font-size: 1.5rem; /* tamanho relativo */
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.error-message {
  color: red;
  font-size: 1rem; /* tamanho relativo */
}

</style>
