<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="text-center">
      <button class="btn btn-primary btn-lg mb-4" @click="acessoAdm">ACESSO ADM</button>
      <br>
      <button class="btn btn-primary btn-lg" @click="acessoPublico">ACESSO PÚBLICO</button>
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

.btn-primary {
  background-color: #17b8be;
  color: #000000;
  border: none;
  border-radius: 10px;
  max-width: 500px;
}

</style>
