<template>
  <div class="container mt-4">
  <div class="row justify-content-center">
    <button
      v-for="box in boxes"
      :key="box.id"
      class="card col-12 col-sm-6 col-md-4 col-lg-3 m-2"
      @click="goToList(box.id)"
    >
      <div class="card-img">
        <div class="img"><img src="../assets/caixa.png" alt=""  class="img-fluid"/></div>
      </div>
      <div class="card-text text-center">{{ box.descricao }}</div>
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
  title="Novo Box"
  :visible.sync="showModal"
  width="400px" 
  @close="resetForm"
>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <el-form ref="boxForm" :model="novoBox" label-width="130px" >
          <el-form-item label="descricao do Box">
            <el-input v-model="novoBox.descricao"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>

  <div slot="footer" class="dialog-footer">
    <el-button @click="showModal = false">Cancelar</el-button>
    <el-button type="primary" @click="criarBox">Criar</el-button>
  </div>
</el-dialog>


<el-dialog
  title="Editar Box"
  :visible.sync="showModalEdit"
  width="400px" 
  @close="resetEditForm"
>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <el-form ref="editForm" :model="boxEdicao" label-width="135px">
          <el-form-item label="Selecionar Box">
            <el-select
              v-model="boxSelecionado"
              placeholder="Selecione um box"
            >
              <el-option
                v-for="box in boxes"
                :key="box.id"
                :label="box.descricao"
                :value="box.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="descricao do Box">
            <el-input v-model="boxEdicao.descricao"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>

  <div slot="footer" class="dialog-footer">
    <el-button @click="showModalEdit = false">Cancelar</el-button>
    <el-button type="primary" @click="confirmarEdicaoBox">Confirmar</el-button>
  </div>
</el-dialog>


<el-dialog
  title="Excluir Box"
  :visible.sync="showModalDelete"
  width="400px" 
  @close="resetDeleteForm"
>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <el-form ref="deleteForm" :model="boxExclusao" label-width="135px">
          <el-form-item label="Selecionar Box">
            <el-select
              v-model="boxSelecionadoExclusao"
              placeholder="Selecione um box"
            >
              <el-option
                v-for="box in boxes"
                :key="box.id"
                :label="box.descricao"
                :value="box.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>

  <div slot="footer" class="dialog-footer">
    <el-button @click="showModalDelete = false">Cancelar</el-button>
    <el-button type="danger" @click="confirmarExclusaoBox">Excluir</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>
import boxServices from '@/services/boxService';

export default {
  name: "GerenciamentoBox",
  components: {},
  data() {
    return {
      boxes: [],
      showModal: false,
      showModalEdit: false,
      showModalDelete: false,
      novoBox: {
        descricao: "",
      },
      boxEdicao: {
        descricao: "",
      },
      boxSelecionado: null,
      boxExclusao: {
        id: null,
      },
      boxSelecionadoExclusao: null,
    };
  },
  created () {
    this.getBoxes()
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
      boxServices.cadastraBox({ descricao: this.novoBox.descricao, armarioId: this.$route.params.id} ).then(resp =>{
        this. getBoxes()
        console.log(resp);
      })
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
        boxServices.updateBox(this.boxSelecionado.id, { id: this.boxSelecionado.id, descricao: this.boxEdicao.descricao, armarioId: this.$route.params.id  } ).then( resp =>{
          this.getBoxes()
          console.log(resp);
        })
        this.showModalEdit = false;
        this.resetEditForm();
      }
    },
    resetDeleteForm() {
      this.$refs.deleteForm.resetFields();
    },
    confirmarExclusaoBox() {
      if (this.boxSelecionadoExclusao) {
        boxServices.deleteBox(this.boxSelecionadoExclusao).then( resp =>{
          this.getBoxes()
          console.log(resp);
        })
          this.showModalDelete = false;
          this.getBoxes()
          this.resetDeleteForm();
      }
    },
    async getBoxes(){
      this.boxes = await boxServices.getboxes(this.$route.params.id)
    }
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
