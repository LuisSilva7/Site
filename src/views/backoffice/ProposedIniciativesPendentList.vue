<template>
  <div>
    <TheNavBar />
    <br />
    <br />
    <br />
    <div class="titulo">
    <h2>Iniciativas Propostas</h2>
    </div>
    <div class="page-container">
      <div class="iniciativas-container">
        <div v-if="proposedIniciatives" class="iniciativas-row">
          <div v-for="proposedIniciative in proposedIniciatives" :key="proposedIniciative.theme">
            <IniciativeBox :proposedIniciative="proposedIniciative" :status="status"
              @createIniciativePlan="createIniciativePlan" />
          </div>
        </div>
        <h4 v-else>Não existem iniciativas propostas!</h4>
      </div>
    </div>
    <div v-if="plan">
      <CreateIniciativePlan :iniciative="iniciative" @closeHandler="handleClosePlan" />
    </div>
  </div>
</template>

<script>
import TheNavBar from "@/components/backoffice/TheNavBar.vue";
import IniciativeBox from "@/components/backoffice/IniciativeBox.vue";
import CreateIniciativePlan from "@/components/backoffice/CreateIniciativePlan.vue";

export default {
  components: { TheNavBar, IniciativeBox, CreateIniciativePlan },
  data() {
    return {
      proposedIniciatives: [],
      status: false,
      plan: false,
      iniciative: {}
    };
  },
  methods: {
    createIniciativePlan(iniciative) {
      this.iniciative = iniciative
      this.plan = true
    },
    handleClosePlan() {
      this.plan = false
    },
  },
  created() {
    if (localStorage.getItem("proposedIniciatives")) {
      this.proposedIniciatives = JSON.parse(
        localStorage.getItem("proposedIniciatives")
      ).filter(
        (proposedIniciative) => proposedIniciative.status !== "rejeitada"
      );
    }
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 80vh;
  margin-top: 13.5%;
  margin-left: 0.5%;
}

.iniciativas-container {
  background: url("@/assets/background-header-image.jpeg");
  width: 80%;
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}

.iniciativas-container::-webkit-scrollbar {
  width: 12px;
}

.iniciativas-container::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 6px;
}

.iniciativas-container::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.iniciativas-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 6px;
}

.iniciativas-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
}

.iniciativas-row>div {
  width: calc(50% - 5px);
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .iniciativas-row>div {
    width: calc(100% - 5px);
  }
}
.titulo{
  margin-top: 3%;
  margin-bottom: -13%;
  margin-left: 11%;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

</style>