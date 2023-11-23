<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark color-navbar">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img
            src="../img/AUTOBOTS.png"
            alt="Logo da Empresa"
            class="img-fluid logo-img mr-2"
          />
        </a>
        <div class="user" v-if="usuarioLogado">
          <h1>{{ usuarioLogado }}</h1>
          <button class="logout-button btn btn-dark ml-2" data-toggle="modal" data-target="#myModal">
            <i class="el-icon-switch-button"></i>
          </button>
        </div>
      </div>
    </nav>

    <router-view class="main-content" />

    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Sair</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
            Tem certeza que deseja sair?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="logout">Logout</button>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
import router from './router';

export default {
  data() {
    return {};
  },
  computed: {
    usuarioLogado() {
      return localStorage.getItem("user");
    },
  },
  methods: {
    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        location.reload();
        router.push("/");
    },
  },
  
};
</script>

<style scoped>
.logo-img {
  max-width: 200px;
  height: auto;
}

.logout-button {
  color: #17b8be;
  font-size: 30px;
  border: none;
  border-radius: 30px;
  width: 60px;
  cursor: pointer;
}

.main-content {
  height: 80vh;
  width: 100vw;
  background-image: url("./assets/autostock_transparente.png");
  background-size: cover; /* A imagem cobrirá todo o elemento */
  background-position: center; /* A imagem será centralizada */
  background-repeat: no-repeat; /* A imagem não se repetirá */
}

.color-navbar {
  background-color: #17b8be;
}

@media (max-width: 600px) {
  .main-content {
    background-image: url("../img/autostock_transparente_pequeno.png");
  }
}

.user {
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 20px;
  font-family: "Roboto", sans-serif;
  align-items: center;
  }

.user h1 {
  color: #000000;
  font-weight: bold;
  font-size: 30px;
}
</style>

