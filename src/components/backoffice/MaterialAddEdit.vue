<template>
    <section class="vh-100 gradient-custom">
         <div class="container py-5 mt-3 h-100">
           <div class="row justify-content-center align-items-center h-100">
             <div class="col-12 col-lg-9 col-xl-7">
               <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
                 <div class="card-body p-4 p-md-5">
                   <form>
                     <div class="row">
                       <div class="col-md-6 mb-4">
                         <div data-mdb-input-init class="form-outline">
                           <label class="form-label" for="Nome">Nome do Material</label>
                           <input v-if="materialEdit" v-model="materialEdit.name" type="text" id="nome" class="form-control form-control-lg"/>
                           <input v-else v-model="material.name" type="text" id="nome" class="form-control form-control-lg"/>
                         </div>
                       </div>
                       <div class="col-md-6 mb-4 pb-2">
                         <div data-mdb-input-init class="form-outline">
                           <label class="form-label" for="quantidade">Quantidade</label>
                           <input v-if="materialEdit" v-model="materialEdit.quantity" type="number" id="Telefone" class="form-control form-control-lg"/>
                           <input v-else v-model="material.quantity" type="number" id="Telefone" class="form-control form-control-lg"/>
                         </div>
                       </div>
                     </div>
                     <div class="row">
                       <div class="col-md-6 mb-4 pb-2">
                         <label class="form-label" for="imagem">Foto</label>
                         <input type="file" @change="handleFileChange" id="imagem" name="imagem" accept="image/*">
                       </div>
                     </div>
                     <div class="row">
                       <div class="col-md-6 mb-4 pb-2">
                         <div data-mdb-input-init class="form-outline">
                           <label class="form-label" for="descricao">Descrição</label>
                           <input v-if="materialEdit" v-model="materialEdit.description" type="text" id="descricao" class="form-control form-control-lg"/>
                           <input v-else v-model="material.description" type="text" id="descricao" class="form-control form-control-lg"/>
                         </div>
                       </div>
                     </div>
                     <div class="">
                       <BlueButton v-if="materialEdit" @click="materialEditHandler" content="Guardar"/>
                       <BlueButton v-else @click="materialHandler" content="Guardar"/>
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

 export default {
    components: { BlueButton },
    props: ['materialEdit', 'index'],
    data() {
      return {
        material: {photo: '', name: '', quantity: '', description: ''},
        file: null,
        imageData: ''
      }
    },
    methods: {
      materialHandler() {
        if (localStorage.getItem('materials')) {

              const reader = new FileReader()

              reader.onload = (event) => {

                const base64Image = event.target.result;

                let materials = JSON.parse(localStorage.getItem('materials'))
                this.material.photo = base64Image
                materials.push(this.material)
                localStorage.setItem('materials', JSON.stringify(materials))
              }
              if(this.file) {
                reader.readAsDataURL(this.file)
                location.reload()
                alert("Material registado com sucesso!")
              }
              else {
                let materials = JSON.parse(localStorage.getItem('materials'))
              materials.push(this.material)
              localStorage.setItem('materials', JSON.stringify(materials))
              this.material = {photo: '', name: '', quantity: '', description: ''}
              alert("Material registado com sucesso!")
              }
        }
      },
      materialEditHandler() {
        if (localStorage.getItem('materials')) {
          
              const reader = new FileReader()

              reader.onload = (event) => {

                const base64Image = event.target.result;

                let materials = JSON.parse(localStorage.getItem('materials'))
                 materials.splice(this.index, 1)
                this.materialEdit.photo = base64Image
                materials.push(this.materialEdit)
                localStorage.setItem('materials', JSON.stringify(materials))
              }
              if(this.file) {
                reader.readAsDataURL(this.file)
                alert("Material editado com sucesso!")
              }
              else {
                let materials = JSON.parse(localStorage.getItem('materials'))
          materials.splice(this.index, 1)
          materials.push(this.materialEdit)
          localStorage.setItem('materials', JSON.stringify(materials))
          alert("Material editado com sucesso!")
              }
        }
      },
      handleFileChange(event) {
        this.file = event.target.files[0]
      }
    }
 }
 </script>
 
 <style>
 
 </style>