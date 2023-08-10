<template>
  <div class="grid-container">
    <div class="item">
      <label for="select1">Selecione o armário</label>
      <select id="select1" class="select-field" v-model="armario">
        <option value="1">Opção 1</option>
        <option value="2">Opção 2</option>
        <option value="3">Opção 3</option>
      </select>
    </div>
    <div class="item">
      <label for="search">Buscar</label>
      <div class="search-input">
        <input
          type="text"
          id="search"
          placeholder="Pesquisar item"
          class="search-field"
          v-model="busca"
        />
        <i class="search-icon el-icon-search" @click="botaoBusca"></i>
      </div>
    </div>
    <div class="item">
      <label for="select2">Selecione a box</label>
      <select id="select2" class="select-field" v-model="box">
        <option value="1">Opção A</option>
        <option value="2">Opção B</option>
        <option value="3">Opção C</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcessoView",
  components: {},
  data() {
    return {
      armario: 1,
      box: 1,
      busca: "",
    };
  },
  methods: {
    botaoBusca() {},
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 20vw 20vw; /* Duas colunas */
  grid-template-rows: auto auto; /* Duas linhas */
  grid-gap: 20px; /* Espaçamento entre os elementos */
  justify-items: center; /* Alinhar horizontalmente ao centro */
  align-items: center; /* Alinhar verticalmente ao centro */
  justify-content: center;
  margin-top: 10px;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
}

.select-field {
  border: 3px solid #17b8be;
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  font-size: 20px;
}

.search-container {
  grid-column: 2; /* Posicionar na segunda coluna */
  grid-row: 2; /* Posicionar na segunda linha */
  text-align: right; /* Alinhar o conteúdo à direita */
}

.search-field {
  border: 3px solid #17b8be;
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  font-size: 20px;
}

.search-icon {
  font-size: 30px;
  color: #17b8be;

  margin-left: 5px;
}

label {
  text-align: center;
}
</style>
