<template>
  <h4>CANDIDATURAS E SOBRE NÓS</h4>
  <hr />
  <div class="container">
    <div class="row row-cols-2">
      <div class="col-6">
        <div class="row-3">
          <CollaboratorFormBox />
        </div>
        <div class="row-3">
          <IniciativeFormBox />
        </div>
      </div>
      <div class="col-6">
        <AboutComplex class="oal"/>
      </div>
    </div>
  </div>
</template>

<script>
import AboutComplex from "../../components/frontoffice/AboutComplex.vue";
import CollaboratorFormBox from "../../components/frontoffice/CollaboratorFormBox.vue";
import IniciativeFormBox from "../../components/frontoffice/IniciativeFormBox.vue";

export default {
  components: { AboutComplex, CollaboratorFormBox, IniciativeFormBox },
};
</script>

<style scoped>

* {
  box-sizing: border-box;
}

.container {
  background: url("@/assets/people-class.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: relative;
  display: flex;
  justify-content:space-between;
  align-items: center;
  height: 80vh; /* Altura total da viewport */
  padding-bottom: 60vh;
  overflow: hidden;
  margin-top: 1.5%;
}

.oal {
  height: 90%;
  padding-right: 90px;
  padding-left: 50px;
}

h4 {
  position: relative;
  margin-top: 4.5%;
  text-align: center;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

hr {
  position: relative;
  max-width: 65%;
  margin: 0 auto;
  margin-top: 1%;
  
}
</style>