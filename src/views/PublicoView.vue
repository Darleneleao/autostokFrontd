<template>
  <div>
    <div class="grid-container">
      <div class="item">
        <div class="search-input row">
          <!-- Adicione a classe 'row' do Bootstrap -->
          <input
            type="text"
            id="search"
            placeholder="Pesquisar item"
            class="search-field form-control col"
            v-model="busca"
          />
          <i
            class="search-icon el-icon-search col-auto"
            @click="botaoBusca"
          ></i>
          <!-- Adicione a classe 'col-auto' do Bootstrap -->
        </div>
      </div>
    </div>
    <el-table :data="retorno" v-if="retorno.length > 0" style="width: 100%">
        <el-table-column prop="armario" label="Ármario"></el-table-column>
        <el-table-column prop="caixa" label="Caixa"></el-table-column>
        <el-table-column prop="nome" label="Nome"></el-table-column>
        <el-table-column prop="quantidade" label="Quantidade"></el-table-column>
        <el-table-column prop="descricao" label="Descrição"></el-table-column>

      </el-table>
  </div>
</template>

<script>
import componenteServices from "@/services/componenteService";
export default {
  name: "AcessoView",
  components: {},
  data() {
    return {
      armario: 0,
      box: 0,
      busca: "",
      retorno: [],
    };
  },
  methods: {
    async botaoBusca() {
      this.retorno = await componenteServices.pesquisaComponente({
        nome: this.busca,
      });
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-wrap: wrap; /* Permite que os itens se ajustem em várias linhas conforme necessário */
  justify-content: center;
  align-content: start;
  gap: 1rem; /* Espaçamento entre os itens */
  margin-top: 1rem;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem; /* tamanho relativo */
  font-weight: bold;
  width: 50%; /* Ocupa toda a largura disponível */
}
.search-input {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* Ocupa toda a largura disponível */}

.search-field {
  border: 2px solid #17b8be;
  background-color: #ffffff;
  color: black;
  border-radius: 10px;
  padding: 0.5rem; /* tamanho relativo */
  font-size: 1rem; /* tamanho relativo */
  width: 100%; /* Ocupa toda a largura disponível */
}

.search-icon {
  font-size: 1.5rem; /* tamanho relativo */
  color: #17b8be;
  padding: 0.5rem; /* Adiciona um pouco de padding para alinhar o ícone verticalmente */
  cursor: pointer; /* Faz o ícone parecer clicável */
  font-weight: bold;
}

label {
  text-align: center;
  margin-bottom: 0.5rem; /* tamanho relativo */
}

.el-table {
  margin: 1rem 1rem; /* Ajuste conforme necessário */


}
</style>
