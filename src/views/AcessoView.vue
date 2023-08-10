<template>
  <div class="acesso-container">
    <div class="button-container">
      <button class="buttonAdm" @click="acessoAdm">ACESSO ADM</button>
      <button class="buttonPublico" @click="acessoPublico">
        ACESSO PÚBLICO
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcessoView",
  methods: {
    acessoAdm() {
      this.$router.push("login");
    },
    acessoPublico() {
      this.$router.push("publico");
    },
  },
};
</script>

<style scoped>
.acesso-container {
  display: grid;
  height: 80vh;
  justify-items: center;
}

.button-container {
  display: grid;
  gap: 100px;
  justify-items: center;
  align-content: center;
}

.buttonAdm {
  width: 400px;
  height: 80px;
  background-color: #17b8be;
  color: #000000;
  font-size: 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
.buttonPublico {
  width: 500px;
  height: 80px;
  background-color: #17b8be;
  color: #000000;
  font-size: 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>
