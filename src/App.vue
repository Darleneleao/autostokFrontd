<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="logo">
          <h1>{{ nomeEmpresa }}</h1>
          <img src="./assets/AUTOBOTS.png" alt="Logo da Empresa" />
        </div>
        <div class="user-info">
          <h1>{{ nomeUsuario }}</h1>
          <button class="back-button" @click="voltar">
            <i class="el-icon-arrow-right"></i>
          </button>
        </div>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nomeEmpresa: "AUTOSTOCK",
      nomeUsuario: "Matheus",
    };
  },
  methods: {
    voltar() {
      history.back();
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #17b8be;
  padding: 5px;
  text-align: center;
  margin: 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}

.user-info {
  display: flex;
  align-items: center;
}

.back-button {
  background-color: #000000;
  color: #17b8be;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
}

.logo h1 {
  margin-right: 10px;
}

.user-info h1 {
  margin-right: 10px;
}
main {
  height: 80vh;
  background-image: url("./assets/autostock_transparente.png");
  background-repeat: no-repeat;
  background-position: center;
}
@media screen and (max-width: 600px) {
  .logo img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
}
</style>
