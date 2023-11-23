<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="buttonAcesso-container">
      <button class="botaoADM" @click="acessoAdm">ACESSO ADM</button>
      <br>
      <button class="botaoPublico" @click="acessoPublico">ACESSO PÚBLICO</button>
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

/* Você pode manter estilos personalizados aqui, mas muitos deles podem ser substituídos pelas classes do Bootstrap */

.buttonAcesso-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  max-width: 250px; /* Limita a largura máxima dos botões */
}
.botaoADM, .botaoPublico {
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
