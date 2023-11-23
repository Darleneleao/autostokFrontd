<template>
  <div class="selecionarTipo-container">
    <div class="button-container">
      <button class="buttonPesquisa" @click="pesquisa">PESQUISA</button>
      <button class="buttonGerenciamento" @click="gerenciamento">GERENCIAMENTO</button>
      <button class="buttonGerenciamento" @click="gerenciamentoUsuario">GERENCIAMENTO DE USUÁRIO</button>
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
    gerenciamentoUsuario() {
      this.$router.push("gerenciamentoUsuario");
    },
  },
};
</script>

<style scoped>
.selecionarTipo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  padding: 1rem; /* Adiciona um pouco de espaço ao redor */
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* tamanho relativo */
  align-items: center;
  width: 100%;
  max-width: 400px; /* Limita a largura máxima do contêiner do botão */
}

.buttonPesquisa, .buttonGerenciamento, .buttonGerenciamentoUsuario {
  width: 100%;
  height: 3rem; /* tamanho relativo */
  background-color: #17b8be;
  color: #000000;
  font-size: 1.5rem; /* tamanho relativo */
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
