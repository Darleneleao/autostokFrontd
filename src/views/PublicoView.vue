<template>
  <div class="grid-container ">
    <div class="item">
      
      <select id="select1" class="select-field" v-model="armario" >
        <option value="0" disabled selected>Selecione um armário</option> <!-- Placeholder -->
        <option value="1">Opção 1</option>
        <option value="2">Opção 2</option>
        <option value="3">Opção 3</option>
      </select>
    </div>
    <div class="item">
      <select id="select2" class="select-field" v-model="box">
        <option value="0" disabled selected>Selecione uma box</option> <!-- Placeholder -->
        <option value="1">Opção A</option>
        <option value="2">Opção B</option>
        <option value="3">Opção C</option>
      </select>
    </div>
    <div class="item">
      <div class="search-input row"> <!-- Adicione a classe 'row' do Bootstrap -->
        <input
          type="text"
          id="search"
          placeholder="Pesquisar item"
          class="search-field form-control col" 
          v-model="busca"
        />
        <i class="search-icon el-icon-search col-auto" @click="botaoBusca"></i> <!-- Adicione a classe 'col-auto' do Bootstrap -->
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AcessoView",
  components: {},
  data() {
    return {
      armario: 0,
      box: 0,
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
  display: flex;
  flex-wrap: wrap; /* Permite que os itens se ajustem em várias linhas conforme necessário */
  justify-content: center;
  align-content:start ;
  gap:1rem; /* Espaçamento entre os itens */
  margin-top: 1rem;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem; /* tamanho relativo */
  font-weight: bold;
  width: 100%; /* Ocupa toda a largura disponível */
  max-width: 300px; /* Limita a largura máxima do item */
}

.select-field, .search-field {
  border: 2px solid #17b8be;
  background-color: #ffffff;
  color: black;
  border-radius: 10px;
  padding: 0.5rem; /* tamanho relativo */
  font-size: 1rem; /* tamanho relativo */
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



</style>
