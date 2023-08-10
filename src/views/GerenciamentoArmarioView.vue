<template>
  <div class="gereciamentoArmario-container">
    <button
      v-for="armario in armarios"
      :key="armario.id"
      class="card"
      @click="goToBox(armario.id)"
    >
      <div class="card-img">
        <div class="img"><img src="../assets/armarios.png" alt="" /></div>
      </div>
      <div class="card-text">{{ armario.nome }}</div>
    </button>
    <el-button
      class="add"
      icon="el-icon-plus"
      @click="showModal = true"
    ></el-button>
    <el-button
      class="delete"
      icon="el-icon-delete"
      @click="showModalDelete = true"
    ></el-button>
    <el-button
      class="editar"
      icon="el-icon-edit"
      @click="showModalEdit = true"
    ></el-button>
    <el-dialog
      title="Novo Armário"
      :visible.sync="showModal"
      width="30%"
      @close="resetForm"
    >
      <el-form ref="armarioForm" :model="novoArmario" label-width="120px">
        <el-form-item label="Nome do Armário">
          <el-input v-model="novoArmario.nome"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="showModal = false">Cancelar</el-button>
        <el-button type="primary" @click="criarArmario">Criar</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="Editar Armário"
      :visible.sync="showModalEdit"
      width="30%"
      @close="resetEditForm"
    >
      <el-form ref="editForm" :model="armarioEdicao" label-width="130px">
        <el-form-item label="Selecionar Armário">
          <el-select
            v-model="armarioSelecionado"
            placeholder="Selecione um armário"
          >
            <el-option
              v-for="armario in armarios"
              :key="armario.id"
              :label="armario.nome"
              :value="armario.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Nome do Armário">
          <el-input v-model="armarioEdicao.nome"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="showModalEdit = false">Cancelar</el-button>
        <el-button type="primary" @click="confirmarEdicaoArmario"
          >Confirmar</el-button
        >
      </div>
    </el-dialog>
    <el-dialog
      title="Excluir Armário"
      :visible.sync="showModalDelete"
      width="30%"
      @close="resetDeleteForm"
    >
      <el-form ref="deleteForm" :model="armarioExclusao" label-width="130px">
        <el-form-item label="Selecionar Armário">
          <el-select
            v-model="armarioSelecionadoExclusao"
            placeholder="Selecione um armário"
          >
            <el-option
              v-for="armario in armarios"
              :key="armario.id"
              :label="armario.nome"
              :value="armario.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="showModalDelete = false">Cancelar</el-button>
        <el-button type="danger" @click="confirmarExclusaoArmario"
          >Excluir</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "GerenciamentoArmario",
  components: {},
  data() {
    return {
      armarios: [
        {
          id: 1,
          nome: "Armario1",
        },
        {
          id: 2,
          nome: "Armario2",
        },
        {
          id: 3,
          nome: "Armario3",
        },
        {
          id: 4,
          nome: "Armario3",
        },
      ],
      showModal: false,
      showModalEdit: false,
      showModalDelete: false,
      novoArmario: {
        nome: "",
      },
      armarioEdicao: {
        nome: "",
      },
      armarioSelecionado: null,
      armarioExclusao: {
        id: null,
      },
      armarioSelecionadoExclusao: null,
    };
  },
  methods: {
    goToBox(idArmario) {
      console.log(idArmario);
      this.$router.push("gerenciamentoBox");
    },
    resetForm() {
      this.$refs.armarioForm.resetFields();
    },
    criarArmario() {
      // Lógica para criar um novo armário usando this.novoArmario.nome
      // Exemplo:
      const novoId = this.armarios.length + 1;
      const novoArmario = {
        id: novoId,
        nome: this.novoArmario.nome,
      };
      this.armarios.push(novoArmario);
      this.showModal = false;
      this.resetForm();
    },
    resetEditForm() {
      this.$refs.editForm.resetFields();
    },
    confirmarEdicaoArmario() {
      this.armarioSelecionado = this.armarios.find(
        (a) => (a.id = this.armarioSelecionado)
      );
      console.log(this.armarios);
      if (this.armarioSelecionado) {
        // Lógica para confirmar a edição do armário usando this.armarioEdicao.nome
        // Exemplo:
        this.armarioSelecionado.nome = this.armarioEdicao.nome;
        this.showModalEdit = false;
        this.resetEditForm();
      }
    },
    resetDeleteForm() {
      this.$refs.deleteForm.resetFields();
    },
    confirmarExclusaoArmario() {
      if (this.armarioSelecionadoExclusao) {
        // Lógica para confirmar a exclusão do armário
        const index = this.armarios.findIndex(
          (armario) => armario.id === this.armarioSelecionadoExclusao
        );
        if (index !== -1) {
          this.armarios.splice(index, 1);
          this.showModalDelete = false;
          this.resetDeleteForm();
        }
      }
    },
  },
};
</script>

<style>
.gereciamentoArmario-container {
  display: grid;
  grid-template-columns: 20vw 20vw 20vw;
  margin-top: 20px;
  justify-content: center;
  align-content: center;
  gap: 5vw;
}
.card {
  height: 40vh;
  border-radius: 10px;
  width: 20vw;
  background: #17b8be;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img img {
  height: 150px;
}
.img {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 220px;
  border-radius: 200px;
}
.card-text {
  margin-top: 50px;
  font-size: 3rem;
  width: 100%;
  border-top: 2px solid black;
}
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
.delete {
  font-size: 30px;
  position: fixed;
  bottom: 10px;
  right: 200px;
  height: 70px;
  width: 70px;
  border-radius: 100px;
  border: none;
  background-color: rgb(231, 14, 61);
  color: #fff;
}
.editar {
  font-size: 30px;
  position: fixed;
  bottom: 10px;
  right: 100px;
  height: 70px;
  width: 70px;
  border-radius: 100px;
  border: none;
  background-color: #0382f8;
  color: #fff;
}
</style>
