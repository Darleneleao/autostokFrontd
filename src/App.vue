<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark color-navbar">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="../img/AUTOBOTS.png" alt="Logo da Empresa" class="img-fluid logo-img mr-2">
          {{ nomeEmpresa }}
        </a>
        <button class="back-button btn btn-dark ml-2" @click="voltar">
                <i class="el-icon-arrow-right"></i>
        </button>
      </div>
    </nav>
    
      <router-view class="main-content" />
    
  </div>
</template>




<script>
export default {
  data() {
    return {
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
.logo-img {
  max-width: 200px;
  height: auto;
}


.back-button {
  color: #17b8be;
  font-size: 30px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}

.main-content {
  height: 80vh;
  width: 100vw;
  background-image: url("./assets/autostock_transparente.png");
  background-size: cover;            /* A imagem cobrirá todo o elemento */
  background-position: center;       /* A imagem será centralizada */
  background-repeat: no-repeat;      /* A imagem não se repetirá */
}


.color-navbar{
  background-color: #17b8be;
}



@media (max-width: 600px) {
  .main-content {
    background-image: url("../img/autostock_transparente_pequeno.png");
  }
}

</style>
