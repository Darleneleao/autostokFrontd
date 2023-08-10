<template>
  <div class="gereciamentoBox-container">
    <button
      v-for="box in boxes"
      :key="box.id"
      class="card"
      @click="goToList(box.id)"
    >
      <div class="card-img">
        <div class="img"><img src="../assets/caixa.png" alt="" /></div>
      </div>
      <div class="card-text">{{ box.nome }}</div>
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
      title="Novo Box"
      :visible.sync="showModal"
      width="30%"
      @close="resetForm"
    >
      <el-form ref="boxForm" :model="novoBox" label-width="120px">
        <el-form-item label="Nome do Box">
          <el-input v-model="novoBox.nome"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="showModal = false">Cancelar</el-button>
        <el-button type="primary" @click="criarBox">Criar</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="Editar Box"
      :visible.sync="showModalEdit"
      width="30%"
      @close="resetEditForm"
    >
      <el-form ref="editForm" :model="boxEdicao" label-width="130px">
        <el-form-item label="Selecionar Box">
          <el-select v-model="boxSelecionado" placeholder="Selecione um box">
            <el-option
              v-for="box in boxes"
              :key="box.id"
              :label="box.nome"
              :value="box.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Nome do Box">
          <el-input v-model="boxEdicao.nome"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="showModalEdit = false">Cancelar</el-button>
        <el-button type="primary" @click="confirmarEdicaoBox"
          >Confirmar</el-button
        >
      </div>
    </el-dialog>
    <el-dialog
      title="Excluir Box"
      :visible.sync="showModalDelete"
      width="30%"
      @close="resetDeleteForm"
    >
      <el-form ref="deleteForm" :model="boxExclusao" label-width="130px">
        <el-form-item label="Selecionar Box">
          <el-select
            v-model="boxSelecionadoExclusao"
            placeholder="Selecione um box"
          >
            <el-option
              v-for="box in boxes"
              :key="box.id"
              :label="box.nome"
              :value="box.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="showModalDelete = false">Cancelar</el-button>
        <el-button type="danger" @click="confirmarExclusaoBox"
          >Excluir</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "GerenciamentoBox",
  components: {},
  data() {
    return {
      boxes: [
        {
          id: 1,
          nome: "Box 1",
        },
        {
          id: 2,
          nome: "Box 2",
        },
        {
          id: 3,
          nome: "Box 3",
        },
        {
          id: 4,
          nome: "Box 4",
        },
        {
          id: 5,
          nome: "Box 5",
        },
        {
          id: 6,
          nome: "Box Baixa 1",
        },
        {
          id: 7,
          nome: "Box Baixa 2",
        },
        {
          id: 8,
          nome: "Box Baixa 3",
        },
        {
          id: 9,
          nome: "Box divisoria 1",
        },
        {
          id: 10,
          nome: "Caixa Papelão 1",
        },
        {
          id: 11,
          nome: "Caixa Papelão 2",
        },
        {
          id: 12,
          nome: "Embrapi",
        },
      ],
      showModal: false,
      showModalEdit: false,
      showModalDelete: false,
      novoBox: {
        nome: "",
      },
      boxEdicao: {
        nome: "",
      },
      boxSelecionado: null,
      boxExclusao: {
        id: null,
      },
      boxSelecionadoExclusao: null,
    };
  },
  methods: {
    goToList(idBox) {
      console.log(idBox);
      this.$router.push({ name: "lista", params: { id: idBox } });
    },
    resetForm() {
      this.$refs.boxForm.resetFields();
    },
    criarBox() {
      // Lógica para criar um novo box usando this.novoBox.nome
      // Exemplo:
      const novoId = this.boxes.length + 1;
      const novoBox = {
        id: novoId,
        nome: this.novoBox.nome,
      };
      this.boxes.push(novoBox);
      this.showModal = false;
      this.resetForm();
    },
    resetEditForm() {
      this.$refs.editForm.resetFields();
    },
    confirmarEdicaoBox() {
      this.boxSelecionado = this.boxes.find(
        (a) => (a.id = this.boxSelecionado)
      );
      console.log(this.boxes);
      if (this.boxSelecionado) {
        // Lógica para confirmar a edição do box usando this.boxEdicao.nome
        // Exemplo:
        this.boxSelecionado.nome = this.boxEdicao.nome;
        this.showModalEdit = false;
        this.resetEditForm();
      }
    },
    resetDeleteForm() {
      this.$refs.deleteForm.resetFields();
    },
    confirmarExclusaoBox() {
      if (this.boxSelecionadoExclusao) {
        // Lógica para confirmar a exclusão do box
        const index = this.boxes.findIndex(
          (box) => box.id === this.boxSelecionadoExclusao
        );
        if (index !== -1) {
          this.boxes.splice(index, 1);
          this.showModalDelete = false;
          this.resetDeleteForm();
        }
      }
    },
  },
};
</script>

<style>
.gereciamentoBox-container {
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
</style>
