<template>
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/image.css' rel='stylesheet'>
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
                              <label class="form-label" for="Nome">Nome</label>
                              <input v-if="collaboratorEdit" v-model="collaboratorEdit.name" type="text" id="nome" class="form-control form-control-lg"/>
                              <input v-else v-model="collaborator.name" type="text" id="nome" class="form-control form-control-lg"/>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 mb-4 d-flex align-items-center">
                            <div data-mdb-input-init class="form-outline datepicker w-100">
                              <label for="dataDeNascimento" class="form-label">Data de Nascimento</label>
                              <input v-if="collaboratorEdit" v-model="collaboratorEdit.birthDate" type="date" class="form-control form-control-lg" id="dataDeNascimento"/>
                              <input v-else v-model="collaborator.birthDate" type="date" class="form-control form-control-lg" id="dataDeNascimento"/>
                            </div>
                          </div>
                          <div class="col-md-6 mb-4 d-flex align-items-center">
                            <label for="imagem">Foto:</label>
                            <input type="file" @change="handleFileChange" id="image" name="imagem" accept="image/*">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 mb-4 pb-2">
                            <div data-mdb-input-init class="form-outline">
                              <label class="form-label" for="emailAddress">Email</label>
                              <input v-if="collaboratorEdit" v-model="collaboratorEdit.email" type="email" id="emailAddress" class="form-control form-control-lg"/>
                              <input v-else v-model="collaborator.email" type="email" id="emailAddress" class="form-control form-control-lg"/>
                            </div>
                          </div>
                          <div class="col-md-6 mb-4 pb-2">
                            <div data-mdb-input-init class="form-outline">
                              <label class="form-label" for="phoneNumber">Telemóvel</label>
                              <input v-if="collaboratorEdit" v-model="collaboratorEdit.telNumber" type="tel" id="Telefone" class="form-control form-control-lg"/>
                              <input v-else v-model="collaborator.telNumber" type="tel" id="Telefone" class="form-control form-control-lg"/>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4 pb-2">
                          <div data-mdb-input-init class="form-outline">
                            <label class="form-label" for="phoneNumber">Morada</label>
                            <input v-if="collaboratorEdit" v-model="collaboratorEdit.address" type="text" id="morada" class="form-control form-control-lg"/>
                            <input v-else v-model="collaborator.address" type="text" id="morada" class="form-control form-control-lg"/>
                          </div>
                        </div>
                        <div class="">
                          <BlueButton v-if="collaboratorEdit" @click="collaboratorEditHandler" content="Guardar"/>
                          <BlueButton v-else @click="collaboratorHandler" content="Guardar"/>
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
    props: ['collaboratorEdit', 'index'],
    data() {
      return {
        collaborator: {photo: '', name: '', birthDate: '', telNumber: '', address: '', email: ''},
        file: null,
        imageData: ''
      }
    },
    methods: {
      collaboratorHandler() {
        if (localStorage.getItem('collaborators')) {

              const reader = new FileReader()

              reader.onload = (event) => {

                const base64Image = event.target.result;

                let collaborators = JSON.parse(localStorage.getItem('collaborators'))
                this.collaborator.photo = base64Image
                collaborators.push(this.collaborator)
                localStorage.setItem('collaborators', JSON.stringify(collaborators))
              }
              if(this.file) {
                reader.readAsDataURL(this.file)
                location.reload()
                alert("Colaborador registado com sucesso!")
              }
              else {
                let collaborators = JSON.parse(localStorage.getItem('collaborators'))
                collaborators.push(this.collaborator)
                localStorage.setItem('collaborators', JSON.stringify(collaborators))
                this.collaborator = {photo: '', name: '', birthDate: '', telNumber: '', address: '', email: ''}
                alert("Colaborador registado com sucesso!")
              }
        }
      },
      collaboratorEditHandler() {
        if (localStorage.getItem('collaborators')) {
          let collaborators = JSON.parse(localStorage.getItem('collaborators'))
          let index = collaborators.indexOf(this.collaboratorEdit)
          collaborators.splice(index, 1)
          collaborators.push(this.collaboratorEdit)
          localStorage.setItem('collaborators', JSON.stringify(collaborators))

              const reader = new FileReader()

              reader.onload = (event) => {

                const base64Image = event.target.result;

                let collaborators = JSON.parse(localStorage.getItem('collaborators'))
                collaborators.splice(this.index, 1)
                this.collaboratorEdit.photo = base64Image
                collaborators.push(this.collaboratorEdit)
                localStorage.setItem('collaborators', JSON.stringify(collaborators))
              }
              if(this.file) {
                reader.readAsDataURL(this.file)
                alert("Colaborador editado com sucesso!")
              }
              else {
                let collaborators = JSON.parse(localStorage.getItem('collaborators'))
                collaborators.splice(this.index, 1)
                collaborators.push(this.collaboratorEdit)
                localStorage.setItem('collaborators', JSON.stringify(collaborators))
                alert("Colaborador editado com sucesso!")
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
      
        .row{
            height: 100px;
        }
    
        
    #image {
        margin: 10px;
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs,1));
        width: 20px;
        height: 16px;
        overflow: hidden;
        box-shadow: 0 0 0 2px;
        border-radius: 2px
    }
    #image::after,
    #image::before {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        border: 2px solid
    }
    #image::after {
        transform: rotate(45deg);
        border-radius: 3px;
        width: 16px;
        height: 16px;
        top: 9px;
        left: 6px
    }
    #image::before {
        width: 6px;
        height: 6px;
        border-radius: 100%;
        top: 2px;
        left: 2px
    }
        
    </style>