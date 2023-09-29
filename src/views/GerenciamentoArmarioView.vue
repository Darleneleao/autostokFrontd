<template>
  <div class="container mt-4">
  <div class="row justify-content-center">
    <button
      v-for="armario in armarios"
      :key="armario.id"
      class="card col-12 col-sm-6 col-md-4 col-lg-3 m-2"
      @click="goToBox(armario.id)"
    >
      <div class="card-img">
        <div class="img"><img src="../assets/armarios.png" alt="" class="img-fluid" /></div>
      </div>
      <div class="card-text text-center">{{ armario.nome }}</div>
    </button>
  </div>

   <!-- Botões -->
<div class="button-group">
  <el-button
    class="action-button add"
    icon="el-icon-plus"
    @click="showModal = true"
    title="Adicionar Armário" 
  ></el-button>
  <el-button
    class="action-button delete"
    icon="el-icon-delete"
    @click="showModalDelete = true"
    title="Excluir Armário"
  ></el-button>
  <el-button
    class="action-button editar"
    icon="el-icon-edit"
    @click="showModalEdit = true"
    title="Editar Armário"
  ></el-button>
</div>


    <el-dialog
  title="Novo Armário"
  :visible.sync="showModal"
  width="400px" 
  @close="resetForm"
>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <el-form ref="armarioForm" :model="novoArmario" label-width="130px" >
          <el-form-item label="Nome do Armário">
            <el-input v-model="novoArmario.nome"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>

  <div slot="footer" class="dialog-footer">
    <el-button @click="showModal = false">Cancelar</el-button>
    <el-button type="primary" @click="criarArmario">Criar</el-button>
  </div>
</el-dialog>


<el-dialog
  title="Editar Armário"
  :visible.sync="showModalEdit"
  width="400px" 
  @close="resetEditForm"
>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <el-form ref="editForm" :model="armarioEdicao" label-width="135px">
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
      </div>
    </div>
  </div>

  <div slot="footer" class="dialog-footer">
    <el-button @click="showModalEdit = false">Cancelar</el-button>
    <el-button type="primary" @click="confirmarEdicaoArmario">Confirmar</el-button>
  </div>
</el-dialog>


<el-dialog
  title="Excluir Armário"
  :visible.sync="showModalDelete"
  width="400px" 
  @close="resetDeleteForm"
>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <el-form ref="deleteForm" :model="armarioExclusao" label-width="135px">
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
      </div>
    </div>
  </div>

  <div slot="footer" class="dialog-footer">
    <el-button @click="showModalDelete = false">Cancelar</el-button>
    <el-button type="danger" @click="confirmarExclusaoArmario">Excluir</el-button>
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

<style scoped>
.card {
  height: auto;
  border-radius: 15px;
  padding: 20px;
  background: #17b8be;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s; /* Adiciona transição suave */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona sombra */
  margin: 10px; /* Espaçamento entre cards */
}

.card:hover {
  transform: translateY(-10px); /* Efeito de levantar o card ao passar o mouse */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Sombra mais profunda no hover */
}

.img img {
  width: 120px;
  height: auto;
  max-width: 100%;
  border-radius: 10px; /* Arredonda os cantos da imagem */
}


.img {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 220px;
  border-radius: 200px;
  margin: 0 auto; /* Centraliza horizontalmente */
}

.card-text {
  margin-top: 20px;
  font-size: 1.2rem;
  width: 100%;
  border-top: 2px solid black;
  font-weight: bold;
  color: black;
  padding-top: 10px; /* Espaçamento entre a linha e o texto */
}

.add, .delete, .editar {
  font-size: 30px;
  position: fixed;
  height: 70px;
  width: 70px;
  border-radius: 100px;
  border: none;
  color: #fff;
  bottom: 10px;
}

.add {
  right: 10px;
  background-color: rgb(14, 231, 14);
}

.delete {
  right: 200px;
  background-color: rgb(231, 14, 61);
}

.editar {
  right: 100px;
  background-color: #0382f8;
}

/* Estilos para os botões */
.button-group {
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: 10px; /* Espaçamento entre os botões */
}

.action-button {
  font-size: 30px;
  height: 70px;
  width: 70px;
  border-radius: 100px;
  border: none;
  transition: transform 0.2s; /* Efeito de transição */
}

.action-button:hover {
  transform: scale(1.1); /* Efeito de zoom ao passar o mouse */
}

.add {
  background-color: rgb(14, 231, 14);
  color: #fff;
}

.delete {
  background-color: rgb(231, 14, 61);
  color: #fff;
}

.editar {
  background-color: #0382f8;
  color: #fff;
}


</style>
