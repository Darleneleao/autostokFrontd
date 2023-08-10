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
          v-model="usuario"
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
      width="30%"
    >
      <p>Você tem certeza que deseja cadastrar?</p>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showModal = false">Cancelar</el-button>
        <el-button type="primary" @click="cadastrar">Confirmar</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "CadastroView",
  data() {
    return {
      usuario: "",
      senha: "",
      showModal: false, // Variável para controlar a exibição da modal
    };
  },
  methods: {
    cadastrar() {
      // Lógica de cadastro aqui
      this.$router.push("login");
    },
  },
};
</script>

<style scoped>
.cadastro-container {
  display: grid;
  align-content: center;
  justify-content: center;
  height: 80vh;
  gap: 40px;
}

.form-container {
  display: grid;
  gap: 50px;
}

.input-container {
  position: relative;
}

.input {
  width: 100%;
  height: 60px;
  padding-left: 30px;
  border: 3px solid #17b8be;
  border-radius: 10px;
  font-size: 20px;
}

.icon {
  position: absolute;
  top: 50%;
  left: -50px;
  transform: translateY(-50%);
  color: #ffffff;
  border: none;
  border-radius: 50px;
  background-color: #17b8be;
  font-size: 60px;
  padding: 5px;
}

.buttonLogin-container {
  display: grid;
  gap: 50px;
  justify-items: center;
  align-content: center;
}

.buttonCadastrar {
  width: 350px;
  height: 80px;
  background-color: #17b8be;
  color: #000000;
  font-size: 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>
