<template>
  <div class="selecionarTipo-container">
    <div class="button-container">
      <button class="buttonPesquisa" @click="pesquisa">PESQUISA</button>
      <button class="buttonGerenciamento" @click="gerenciamento">
        GERENCIAMENTO
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcessoView",
  methods: {
    pesquisa() {
      this.$router.push("publico");
    },
    gerenciamento() {
      this.$router.push("gerenciamentoArmario");
    },
  },
};
</script>

<style scoped>
.selecionarTipo-container {
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

.buttonPesquisa {
  width: 400px;
  height: 80px;
  background-color: #17b8be;
  color: #000000;
  font-size: 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
.buttonGerenciamento {
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
