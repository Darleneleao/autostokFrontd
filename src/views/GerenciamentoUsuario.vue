<template>
    <div>
      <el-table :data="tabelaData" style="width: 100%">
      <el-table-column prop="nome" label="Nome"></el-table-column>
      <el-table-column prop="login" label="E-mail"></el-table-column>
      <el-table-column label="Deletar">
        <template slot-scope="scope">
          <el-button type="text" size="small" class="btn-delete px-4" @click="excluirCadastro(scope.row)">
            <i class="el-icon-delete"></i> Delete
          </el-button>
        </template>
      </el-table-column>
      </el-table>

      <el-dialog title="Confirmar Exclusão" :visible="exclusaoModalVisible" width="400px"
      @close="exclusaoModalVisible = false">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <span class="message-text">Tem certeza de que deseja excluir este cadastro?</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="exclusaoModalVisible = false">Cancelar</el-button>
              <el-button type="danger" @click="confirmarExclusaoCadastro">Confirmar</el-button>
            </span>
          </div>
        </div>
      </div>
    </el-dialog>

        <el-button class="btn-add add" icon="el-icon-plus" @click.native="cadastro"></el-button>
    </div>
  </template>

<script>
import authenticationService from "@/services/authenticationService";
export default {
  name: "GerenciamentoUsuario",
  data() {
    return {
      tabelaData: [],
      exclusaoModalVisible: false,
      cadastroExclusao: null,
    };
  },
  async created() {
    this.gerenciamentoCadastrados();
  },
  methods: {
    cadastro() {
      this.$router.push("cadastro");
    },
    excluirCadastro(cadastro) {
      this.cadastroExclusao = { ...cadastro };
      console.log("Excluir cadastro:", cadastro);
      this.exclusaoModalVisible = true;
    },
    confirmarExclusaoCadastro() {
      this.delete(this.cadastroExclusao.id);
      this.exclusaoModalVisible = false;
      this.gerenciamentoCadastrados();
    },
    async gerenciamentoCadastrados() {
      this.tabelaData = await authenticationService.gerenciamentoCadastrados();
    },
    async delete(id) {
      await authenticationService.delete(id).then(() => {
        this.gerenciamentoCadastrados();
      });
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
.btn-delete {
  background-color: #ff0000;
  color: #fff;
  transition: color 0.3s;
}
.btn-delete:hover {
  color: #000;
}
.message-text {
  display: block;
  /* Para garantir que o span se comporte como um bloco e respeite a margem inferior */
  margin-bottom: 20px;
  /* Espaço desejado entre o texto e os botões */
}



</style>