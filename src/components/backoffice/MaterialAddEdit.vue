<template>
  <section class="vh-100 gradient-custom">
       <div class="container py-5 mt-3 h-100">
         <div class="row justify-content-center align-items-center h-100">
           <div class="col-12 col-lg-9 col-xl-7">
             <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
               <div class="card-body p-4 p-md-5" id="card">
                 <form>
                  <div class="row">
                    <h2 class ="letra" v-if="materialEdit">Editar Material</h2>
                    <h2 class ="letra" v-else>Adicionar Material</h2>
                  </div>
                
                   <div class="row">
                     <div class="col-md-6 mb-4">
                       <div data-mdb-input-init class="form-outline">
                         <label class="form-label"  for="Nome">Nome do Material</label>
                         <input v-if="materialEdit" v-model="materialEdit.name" type="text" id="nome" class="form-control form-control-lg"/>
                         <input v-else v-model="material.name" placeholder="Ex: Halter" type="text" id="nome" class="form-control form-control-lg"/>
                       </div>
                     </div>
                     <div class="col-md-6 mb-4 pb-2">
                       <div data-mdb-input-init class="form-outline">
                         <label class="form-label"  for="quantidade">Quantidade</label>
                         <input v-if="materialEdit" v-model="materialEdit.quantity" type="number" id="quantidade" class="form-control form-control-lg"/>
                         <input v-else v-model="material.quantity" placeholder="Ex: 0" type="number" id="quantidade" class="form-control form-control-lg"/>
                       </div>
                     </div>
                   </div>
                   <div class="row">
                    <div class="col-md-6 mb-4" id="container-descricao">
                      <div data-mdb-input-init class="form-outline">
                        <label class="form-label" for="descricao">Descrição:</label>
                          <textarea v-if="materialEdit" v-model="materialEdit.description"  id="descricao" class="form-control form-control-lg"></textarea>
                            <textarea v-else v-model="material.description" id="descricao" placeholder="Introduza a sua descrição..." class="form-control form-control-lg"></textarea>
                      </div>
                    </div>
                        <div class="col-md-6 mb-4 pb-2 d-flex align-items-center ">
                          
                        <label for="fileUpload">Foto:</label>
                        <input type="file" @change="handleFileChange" id="fileUpload" name="photo" accept="image/*">
                        </div>
                   </div>
                      <div class="">
                     <BlueButton v-if="materialEdit" @click="materialEditHandler" id="button" content="Guardar"/>
                     <BlueButton v-else @click="materialHandler" id="button" content="Guardar"/>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
</template>

<script>
import BlueButton from './BlueButton.vue'
import { getStorage, ref as storageRef, uploadBytes  } from 'firebase/storage'

export default {
  components: { BlueButton },
  props: ['materialEdit', 'index'],
  data() {
    return {
      material: {photo: '', name: '', quantity: '', description: '', check: false},
      file: null
    }
  },
  methods: {
    materialHandler() {
      if (localStorage.getItem('materials')) {
            if(this.file) {
              const storage = getStorage()
              const imageRef = storageRef(storage, 'images/' + this.file.name)
              uploadBytes(imageRef, this.file).then((snapshot) => {
                console.log('Imagem enviada com sucesso para o Firebase!')
                this.material = {photo: '', name: '', quantity: '', description: '', check: false}
              }).catch((error) => {
                console.error('Erro ao enviar imagem:', error)
              })
            }

              let materials = JSON.parse(localStorage.getItem('materials'))
              if(this.file) {
                  this.material.photo = this.file.name
              }
              materials.push(this.material)
              localStorage.setItem('materials', JSON.stringify(materials))
              alert("Material registado com sucesso!")
              this.material = {photo: '', name: '', quantity: '', description: '', check: false}
      }
    },
    materialEditHandler() {
      if (localStorage.getItem('materials')) {
            if(this.file) {
              const storage = getStorage()
              const imageRef = storageRef(storage, 'images/' + this.file.name)
              uploadBytes(imageRef, this.file).then((snapshot) => {
                console.log('Imagem enviada com sucesso para o Firebase!')
              }).catch((error) => {
                console.error('Erro ao enviar imagem:', error)
              })
            }

              let materials = JSON.parse(localStorage.getItem('materials'))
               materials.splice(this.index, 1)
               if(this.file) {
                  this.materialEdit.photo = this.file.name
              }
              materials.push(this.materialEdit)
              localStorage.setItem('materials', JSON.stringify(materials))
              alert("Material editado com sucesso!")
      }
    },
    handleFileChange(event) {
      this.file = event.target.files[0]
    }
  }
}
</script>

<style>


 .letra
      {font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;}

    .form-label{
      font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

#image{
  display: flex;
  
}

#button{

  display: flex;
  float: right;
  margin-top: 7%;

}

#descricao{
  height: 120px;
  font-size: 12px;
}

#container-descricao {
  margin-bottom: 2rem;
}

#nome{
  font-size: 12px;
}

#quantidade{
  font-size: 12px;  
}

</style>