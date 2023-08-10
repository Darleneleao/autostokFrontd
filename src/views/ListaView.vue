<template>
  <div>
    <el-table :data="tabelaData[idCaixa]" style="width: 100%">
      <el-table-column prop="nome" label="Nome"></el-table-column>
      <el-table-column prop="obs" label="Observações"></el-table-column>
      <el-table-column prop="qtd" label="Quantidade"></el-table-column>
      <el-table-column label="Operações">
        <template slot-scope="scope">
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="excluirItem(scope.row)"
          ></el-button>
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="editarItem(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="Confirmar Exclusão"
      :visible="exclusaoModalVisible"
      @close="exclusaoModalVisible = false"
    >
      <span>Tem certeza de que deseja excluir este item?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="exclusaoModalVisible = false">Cancelar</el-button>
        <el-button type="danger" @click="confirmarExclusaoItem"
          >Confirmar</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="Adicionar Item"
      :visible="adicaoModalVisible"
      @close="adicaoModalVisible = false"
    >
      <el-form label-width="120px">
        <el-form-item label="Nome">
          <el-input v-model="novoItem.nome"></el-input>
        </el-form-item>
        <el-form-item label="Observações">
          <el-input v-model="novoItem.obs"></el-input>
        </el-form-item>
        <el-form-item label="Quantidade">
          <el-input v-model="novoItem.qtd"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="adicaoModalVisible = false">Cancelar</el-button>
        <el-button type="primary" @click="confirmarAdicaoItem"
          >Adicionar</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="Editar Item"
      :visible="edicaoModalVisible"
      @close="edicaoModalVisible = false"
    >
      <el-form label-width="120px">
        <el-form-item label="Nome">
          <el-input v-model="itemEdicao.nome"></el-input>
        </el-form-item>
        <el-form-item label="Observações">
          <el-input v-model="itemEdicao.obs"></el-input>
        </el-form-item>
        <el-form-item label="Quantidade">
          <el-input v-model="itemEdicao.qtd"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="edicaoModalVisible = false">Cancelar</el-button>
        <el-button type="primary" @click="confirmarEdicaoItem"
          >Confirmar</el-button
        >
      </span>
    </el-dialog>
    <el-button
      class="btn-add add"
      icon="el-icon-plus"
      @click="exibirModalAdicao"
    ></el-button>
  </div>
</template>

<script>
export default {
  name: "ListaView",
  data() {
    return {
      tabelaData: [
        [
          {
            nome: "Kit chassi 2 rodas",
            obs: "-",
            qtd: 5,
          },
          {
            nome: "Plug bateria 9V",
            obs: "-",
            qtd: 25,
          },
          {
            nome: "Botão",
            obs: "-",
            qtd: "2x35",
          },
          {
            nome: "Kit chassi 4 rodas",
            obs: "-",
            qtd: 3,
          },
          {
            nome: 'Display 3"',
            obs: "-",
            qtd: 4,
          },
          {
            nome: "Arduino Uno",
            obs: "-",
            qtd: 15,
          },
        ],
        [
          {
            nome: "Módulo I2C",
            obs: "-",
            qtd: "-",
          },
          {
            nome: "Mini Protoboard",
            obs: "-",
            qtd: 20,
          },
          {
            nome: "Jumpers",
            obs: "-",
            qtd: "-",
          },
          {
            nome: "Protoboard 480P",
            obs: "-",
            qtd: 50,
          },
          {
            nome: "Mini bomba d'água",
            obs: "-",
            qtd: 10,
          },
          {
            nome: "Bomba d'água média",
            obs: "-",
            qtd: 2,
          },
          {
            nome: "Sensor cardiáco ECG",
            obs: "-",
            qtd: 2,
          },
          {
            nome: "Arduido Nano",
            obs: "-",
            qtd: 9,
          },
          {
            nome: "Shield Arduino Nano",
            obs: "-",
            qtd: 8,
          },
          {
            nome: "Bateria 18650 42V",
            obs: "-",
            qtd: 18,
          },
          {
            nome: "Conversor HDMI/VGA",
            obs: "-",
            qtd: 9,
          },
          {
            nome: "Arduino Leonardo",
            obs: "-",
            qtd: 10,
          },
          {
            nome: "Nano Shield Solda",
            obs: "-",
            qtd: 12,
          },
        ],
        [
          {
            nome: "Sonoff Basic",
            obs: "-",
            qtd: 5,
          },
          {
            nome: "Sonoff Mini",
            obs: "-",
            qtd: 4,
          },
          {
            nome: "Lâmpada LED EWS-410",
            obs: "-",
            qtd: 4,
          },
          {
            nome: "Bateria 9V alcalina normal",
            obs: "-",
            qtd: 25,
          },
          {
            nome: "Sensor inteligente sonoff PIR2",
            obs: "-",
            qtd: 8,
          },
          {
            nome: 'LCD Display 5"',
            obs: "-",
            qtd: 2,
          },
          {
            nome: "Garra Jacaré",
            obs: "50 red / 50 black",
            qtd: 100,
          },
          {
            nome: "Bobina de Tesla",
            obs: "-",
            qtd: 5,
          },
          {
            nome: "Sensor RFID + Tag",
            obs: "-",
            qtd: 5,
          },
          {
            nome: "Sensor Shield p/ motor",
            obs: "-",
            qtd: 3,
          },
          {
            nome: "Tag RFID",
            obs: "-",
            qtd: 50,
          },
          {
            nome: "Sensor ultrassônico",
            obs: "-",
            qtd: 15,
          },
          {
            nome: "2C",
            obs: "-",
            qtd: 9,
          },
          {
            nome: "Tela 16x2",
            obs: "-",
            qtd: 15,
          },
          {
            nome: "Tela 20x4",
            obs: "-",
            qtd: 9,
          },
        ],
        [
          {
            nome: "Kit Make Makey",
            obs: "-",
            qtd: 8,
          },
          {
            nome: "Módulo Botão Direcional",
            obs: "-",
            qtd: 12,
          },
          {
            nome: "Servo Motor",
            obs: "-",
            qtd: 20,
          },
          {
            nome: "Sensor Umidade/Sol",
            obs: "-",
            qtd: 40,
          },
          {
            nome: "Controlador de Temperatura",
            obs: "-",
            qtd: 20,
          },
          {
            nome: "Sensor de Temperatura",
            obs: "-",
            qtd: 4,
          },
          {
            nome: "Placa de Fenolite 30x24",
            obs: "-",
            qtd: 50,
          },
          {
            nome: "Jumpers",
            obs: "-",
            qtd: "-",
          },
          {
            nome: "Válvula Selenoide",
            obs: "-",
            qtd: 2,
          },
          {
            nome: "Servo MG90S",
            obs: "-",
            qtd: 10,
          },
          {
            nome: "Servo Grande MG995",
            obs: "-",
            qtd: 3,
          },
          {
            nome: "Shield Multifunção Arduino",
            obs: "-",
            qtd: 8,
          },
        ],
        [
          {
            nome: "Sugador",
            obs: "-",
            qtd: 4,
          },
          {
            nome: "Ferro de solda",
            obs: "-",
            qtd: 10,
          },
          {
            nome: "Suporte para ferro de solda",
            obs: "-",
            qtd: 10,
          },
        ],

        [
          {
            nome: "Arduino Mega",
            obs: "-",
            qtd: 3,
          },
          {
            nome: "Arduino Uno",
            obs: "-",
            qtd: 25,
          },
          {
            nome: "Módulo Wi-fi",
            obs: "-",
            qtd: 11,
          },
          {
            nome: "Node MCU",
            obs: "-",
            qtd: 39,
          },
          {
            nome: "Arduino Nano",
            obs: "-",
            qtd: 20,
          },
        ],
        [],
        [
          {
            nome: "Carregador bateria 18650",
            obs: "-",
            qtd: 4,
          },
          {
            nome: "Carregador MO CP51 9V",
            obs: "-",
            qtd: 6,
          },
          {
            nome: "Pilhas",
            obs: "-",
            qtd: 48,
          },
        ],
        [
          {
            nome: "Leitor Biométrico",
            obs: "-",
            qtd: 2,
          },
          {
            nome: "Capacitor",
            obs: "-",
            qtd: 20,
          },
          {
            nome: "Sensor de Toque",
            obs: "-",
            qtd: 10,
          },
          {
            nome: "Sensor de Pulso",
            obs: "-",
            qtd: 6,
          },
          {
            nome: "Sensor de Chuva",
            obs: "-",
            qtd: 6,
          },
          {
            nome: "Sensor de Fogo",
            obs: "-",
            qtd: 10,
          },
          {
            nome: "Sensor de Corrente",
            obs: "-",
            qtd: 6,
          },
          {
            nome: "Buzzer",
            obs: "-",
            qtd: 40,
          },
          {
            nome: 'Módulo LCD 1.9"',
            obs: "-",
            qtd: 10,
          },
          {
            nome: "LDR 2mm",
            obs: "-",
            qtd: 50,
          },
          {
            nome: "Sensor Umidade/Temperatura DHT11",
            obs: "-",
            qtd: 17,
          },
          {
            nome: "Sensor de Presença TIR",
            obs: "-",
            qtd: 4,
          },
          {
            nome: "Resistor 220",
            obs: "-",
            qtd: 100,
          },
        ],
        [
          {
            nome: "Suporte para 4 pilhas",
            obs: "2x23",
            qtd: "-",
          },
          {
            nome: "Suporte com plug",
            obs: "-",
            qtd: 20,
          },
          {
            nome: "Suporte com dois lados",
            obs: "-",
            qtd: 20,
          },
        ],
        [
          {
            nome: "Kit Joystick Fliperama",
            obs: "-",
            qtd: 2,
          },
          {
            nome: "Fonte Raspberry",
            obs: "-",
            qtd: 9,
          },
          {
            nome: "Fonte Arduino",
            obs: "-",
            qtd: 56,
          },
        ],
        [
          {
            nome: "Placa Udo",
            obs: "-",
            qtd: 1,
          },
          {
            nome: "Motor turbilhão",
            obs: "-",
            qtd: 2,
          },
          {
            nome: "Servo com módulo",
            obs: "-",
            qtd: 3,
          },
          {
            nome: "Motor de passo nema",
            obs: "-",
            qtd: 2,
          },
          {
            nome: "Raspberry Pi 3",
            obs: "-",
            qtd: 1,
          },
          {
            nome: "Sensor de temperatura de água",
            obs: "-",
            qtd: 8,
          },
        ],
      ],
      idCaixa: this.$route.params.id - 1,
      exclusaoModalVisible: false,
      itemExclusao: null,
      adicaoModalVisible: false,
      edicaoModalVisible: false,
      novoItem: {
        nome: "",
        obs: "",
        qtd: 0,
      },
      itemEdicao: {
        nome: "",
        obs: "",
        qtd: 0,
      },
    };
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
      this.novoItem = { nome: "", obs: "", qtd: 0 };
      this.adicaoModalVisible = true;
    },
    confirmarAdicaoItem() {
      // Lógica para adicionar o novo item à tabela
      this.tabelaData.push({ ...this.novoItem });
      this.adicaoModalVisible = false;
    },
    confirmarEdicaoItem() {
      // Lógica para confirmar a edição do item
      this.edicaoModalVisible = false;
    },
  },
};
</script>

<style>
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
