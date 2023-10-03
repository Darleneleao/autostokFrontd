<template>
  <div>
    <el-table :data="tabelaData" style="width: 100%">
      <el-table-column prop="nome" label="Nome"></el-table-column>
      <el-table-column prop="quantidade" label="Quantidade"></el-table-column>

      <el-table-column label="Ações">
        <template slot-scope="scope">
          <el-dropdown trigger="click">
            <el-button type="text" size="small" class="actions-button px-4" title="Clique para mais ações">
              <i class="el-icon-arrow-down"></i> Ações
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="editarItem(scope.row)"><i class="el-icon-edit"></i>
                Editar</el-dropdown-item>
              <el-dropdown-item @click.native="excluirItem(scope.row)">
                <i class="el-icon-delete"></i> Deletar
              </el-dropdown-item>
              <el-dropdown-item @click.native="vizualizarItem(scope.row)">
                <i class="el-icon-view"></i> Vizualizar
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="Confirmar Exclusão" :visible="exclusaoModalVisible" width="400px"
      @close="exclusaoModalVisible = false">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <span class="message-text">Tem certeza de que deseja excluir este item?</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="exclusaoModalVisible = false">Cancelar</el-button>
              <el-button type="danger" @click="confirmarExclusaoItem">Confirmar</el-button>
            </span>
          </div>
        </div>
      </div>
    </el-dialog>

    <el-dialog title="Adicionar Item" :visible="adicaoModalVisible" width="400px" @close="adicaoModalVisible = false">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <el-form label-width="120px">
              <el-form-item label="Nome">
                <el-input v-model="novoItem.nome"></el-input>
              </el-form-item>
              <el-form-item label="Observações">
                <el-input v-model="novoItem.descricao"></el-input>
              </el-form-item>
              <el-form-item label="Quantidade">
                <el-input v-model="novoItem.quantidade"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="adicaoModalVisible = false">Cancelar</el-button>
              <el-button type="primary" @click="confirmarAdicaoItem">Adicionar</el-button>
            </span>
          </div>
        </div>
      </div>
    </el-dialog>

    <el-dialog title="Editar Item" :visible="edicaoModalVisible" width="400px" @close="edicaoModalVisible = false">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <el-form label-width="120px">
              <el-form-item label="Nome">
                <el-input v-model="itemEdicao.nome"></el-input>
              </el-form-item>
              <el-form-item label="Observações">
                <el-input v-model="itemEdicao.descricao"></el-input>
              </el-form-item>
              <el-form-item label="Quantidade">
                <el-input v-model="itemEdicao.quantidade"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="edicaoModalVisible = false">Cancelar</el-button>
              <el-button type="primary" @click="confirmarEdicaoItem">Confirmar</el-button>
            </span>
          </div>
        </div>
      </div>
    </el-dialog>

    <el-dialog title="Visualizar Item" :visible="visualizacaoModalVisible" width="400px"
      @close="visualizacaoModalVisible = false">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <el-form label-width="120px">
              <el-form-item label="Nome">
                <el-input v-model="itemVisualizacao.nome" readonly></el-input>
              </el-form-item>
              <el-form-item label="Observações">
                <el-input v-model="itemVisualizacao.descricao" readonly></el-input>
              </el-form-item>
              <el-form-item label="Quantidade">
                <el-input v-model="itemVisualizacao.quantidade" readonly></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="visualizacaoModalVisible = false">Fechar</el-button>
            </span>
          </div>
        </div>
      </div>
    </el-dialog>


    <el-button class="btn-add add" icon="el-icon-plus" @click="exibirModalAdicao"></el-button>
  </div>
</template>

<script>
import componenteServices from '@/services/componenteService';

export default {
  name: "ListaView",
  data() {
    return {
      tabelaData: [],
      idCaixa: this.$route.params.id,
      exclusaoModalVisible: false,
      itemExclusao: null,
      adicaoModalVisible: false,
      edicaoModalVisible: false,
      novoItem: {
        nome: "",
        descricao: "",
        boxId: parseInt(this.$route.params.id),
        quantidade: 0,
      },
      itemEdicao: {
        nome: "",
        descricao: "",
        quantidade: 0,
      },
      visualizacaoModalVisible: false,
      itemVisualizacao: {
        nome: "",
        descricao: "",
        quantidade: 0,
      },
    };
  },
  created () {
    this.getComponentes()
  },
  methods: {
    excluirItem(item) {
      console.log("Excluir item:", item);
      this.exclusaoModalVisible = true;
    },
    confirmarExclusaoItem() {
      console.log("Excluir item:", this.itemExclusao);
      // Lógica para excluir o item da tabela
      this.exclusaoModalVisible = false;
    },
    editarItem(item) {
      console.log("Editar item:", item);
      this.itemEdicao = { ...item };
      this.edicaoModalVisible = true;
    },
    exibirModalAdicao() {
      this.novoItem = { nome: "", descricao: "", quantidade: 0,  boxId: parseInt(this.$route.params.id) };
      this.adicaoModalVisible = true;
    },
    confirmarAdicaoItem() {
      componenteServices.cadastraComponente(this.novoItem ).then(resp=>{
        componenteServices.getComponente(this.idCaixa)
        console.log(resp);
      })
      this.adicaoModalVisible = false;
    },
    confirmarEdicaoItem() {
      // Lógica para confirmar a edição do item
      this.edicaoModalVisible = false;
    },
    vizualizarItem(item) {
      this.itemVisualizacao = { ...item };
      this.visualizacaoModalVisible = true;
    },
    async getComponentes (){
      this.tabelaData = await componenteServices.getComponente(this.idCaixa)
    }
  },
};
</script>

<style scoped>
.add {
  font-size: 30px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  height: 70px;
  width: 70px;
  border-radius: 100px;
  border: none;
  background-color: rgb(14, 231, 14);
  color: #fff;
}

.actions-button {
  background-color: #17b8be;
  /* Cor do texto */
  color: #fff;
  transition: color 0.3s;
  /* Efeito de transição */
}

.actions-button:hover {
  color: #0d6efd;
  /* Cor do texto ao passar o mouse */
}

.message-text {
  display: block;
  /* Para garantir que o span se comporte como um bloco e respeite a margem inferior */
  margin-bottom: 20px;
  /* Espaço desejado entre o texto e os botões */
}
</style>
