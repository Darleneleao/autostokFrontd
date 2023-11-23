<template>
  <div class="cadastro-container">
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
          type="text"
          class="input"
          v-model="login"
          placeholder="Seu e-mail"
        />
        <i class="icon el-icon-message"></i>
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
    </div>
    <div class="buttonLogin-container">
      <button class="buttonCadastrar" @click="showModal = true">
        CADASTRAR
      </button>
    </div>

<!-- Modal de confirmação de cadastro -->
<el-dialog
  title="Confirmação de Cadastro"
  :visible.sync="showModal"
  width="400px"  
>
  <p>Você tem certeza que deseja cadastrar?</p>
  <div slot="footer" class="dialog-footer row"> <!-- Use a classe 'row' do Bootstrap -->
    <div class="col-6"> <!-- Use as colunas do Bootstrap para dividir o espaço -->
      <el-button @click="showModal = false" class="w-100">Cancelar</el-button> <!-- w-100 faz o botão ocupar toda a largura da coluna -->
    </div>
    <div class="col-6">
      <el-button type="primary" @click="cadastrar" class="w-100">Confirmar</el-button>
    </div>
  </div>
</el-dialog>

  </div>
</template>

<script>
import autheticationService from '@/services/authenticationService';

export default {
  name: "CadastroView",
  data() {
    return {
      usuario: "",
      login: "",
      senha: "",
      showModal: false, // Variável para controlar a exibição da modal
    };
  },
  methods: {
    async cadastrar() {
      await autheticationService.register({
        nome: this.usuario,
        login: this.login,
        password: this.senha,
      });
      this.$router.push("GerenciamentoUsuario");
    },
  },
};
</script>

<style scoped>
.cadastro-container {
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
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  max-width: 250px; /* Limita a largura máxima dos botões */
}

.buttonCadastrar {
  width: 100%;
  height: 3rem; /* tamanho relativo */
  background-color: #17b8be;
  color: #000000;
  font-size: 1.5rem; /* tamanho relativo */
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

</style>
