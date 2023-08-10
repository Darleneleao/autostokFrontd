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
    </div>
    <div class="buttonLogin-container">
      <button class="buttonLogin" @click="login">LOGIN</button>
      <button class="buttonCadastrar" @click="cadastrar">CADASTRAR</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      usuario: "",
      senha: "",
    };
  },
  methods: {
    login() {
      this.$router.push("selecionarTipo");
    },
    cadastrar() {
      this.$router.push("cadastro");
    },
  },
};
</script>

<style scoped>
.login-container {
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

.buttonLogin {
  width: 200px;
  height: 80px;
  background-color: #17b8be;
  color: #000000;
  font-size: 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
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
