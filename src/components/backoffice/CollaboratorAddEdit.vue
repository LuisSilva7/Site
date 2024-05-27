<template>
  <link href='https://unpkg.com/css.gg@2.0.0/icons/css/image.css' rel='stylesheet'>
    <section class="vh-100 gradient-custom">
          <div class="container py-5 mt-3 h-100">
            <div class="row justify-content-center align-items-center h-100">
              <div class="col-12 col-lg-9 col-xl-7">
                <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
                  <div class="card-body p-4 p-md-3">
                    <form>
                      <div class="row">
                        <h2 class ="letra" v-if="collaboratorEdit">Editar Colaborador</h2>
                        <h2 class ="letra" v-else>Adicionar Colaborador</h2>
                      </div>
                      <div class="row row-cols-2">
                        <div class="col-md-6 mb-4 pb-2">
                          <div data-mdb-input-init class="form-outline"> 
                            <label class="form-label" for="Nome">Nome</label>
                            <input v-if="collaboratorEdit" v-model="collaboratorEdit.name" type="text" id="nome" class="form-control form-control-lg"/>
                            <input v-else v-model="collaborator.name" placeholder="Ex: André Silva" type="text" id="nome" class="form-control form-control-lg"/>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4 pb-2">
                          <div data-mdb-input-init class="form-outline">
                            <label class="form-label" for="emailAddress">Email</label>
                            <input v-if="collaboratorEdit" v-model="collaboratorEdit.email" type="email" id="emailAddress" class="form-control form-control-md"/>
                            <input v-else v-model="collaborator.email" placeholder="Ex: asilva17@gmail.com" type="email" id="emailAddress" class="form-control form-control-md"/>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6 mb-4 pb-2">
                          <div data-mdb-input-init class="form-outline datepicker w-100">
                            <label for="dataDeNascimento" class="form-label">Data de Nascimento</label>
                            <input v-if="collaboratorEdit" v-model="collaboratorEdit.birthDate" type="date" class="form-control form-control-md" id="dataDeNascimento"/>
                            <input v-else v-model="collaborator.birthDate"  type="date" class="form-control form-control-md" id="dataDeNascimento"/>
                          </div>
                        </div>
                         <div class="col-md-6 mb-4 pb-2">
                          <div data-mdb-input-init class="form-outline">
                            <label class="form-label" for="phoneNumber">Telemóvel</label>
                            <input v-if="collaboratorEdit" v-model="collaboratorEdit.telNumber" type="tel" id="Telefone" class="form-control form-control-md"/>
                            <input v-else v-model="collaborator.telNumber" placeholder="Ex: 939348283" type="tel" id="Telefone" class="form-control form-control-md"/>
                          </div>
                        </div>
                        
                      </div>
                      <div class="row">
                        
                       <div class="col-md-6 mb-4 pb-2">
                        <div data-mdb-input-init class="form-outline">
                          <label class="form-label" for="phoneNumber">Morada</label>
                          <input v-if="collaboratorEdit" v-model="collaboratorEdit.address" type="text" id="morada" class="form-control form-control-md"/>
                          <input v-else v-model="collaborator.address" placeholder="Ex: Rua São Cipriano" type="text" id="morada" class="form-control form-control-md"/>
                        </div>
                      </div>
                        <div class="col-md-6 mb-4 d-flex align-items-center  ">
                          <label for="image" class="row" id="foto">Foto:</label>
                          <div>
                            <input type="file" @change="handleFileChange" name="foto" id= "foto2" accept="image/*" required > 
                          </div>
                        </div>
                      </div>
                      
                      <div class="botao">
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
import { getStorage, ref as storageRef, uploadBytes  } from 'firebase/storage'

export default {
  components: { BlueButton },
  props: ['collaboratorEdit', 'index'],
  data() {
    return {
      collaborator: {photo: '', name: '', birthDate: '', telNumber: '', address: '', email: '', check: false },
      file: null
    }
  },
  methods: {
    collaboratorHandler() {
      if (localStorage.getItem('collaborators')) {
        if(this.file) {
              const storage = getStorage()
              const imageRef = storageRef(storage, 'images/' + this.file.name)
              uploadBytes(imageRef, this.file).then((snapshot) => {
                console.log('Imagem enviada com sucesso para o Firebase!')
                this.collaborator = {photo: '', name: '', birthDate: '', telNumber: '', address: '', email: '', check: false }
              }).catch((error) => {
                console.error('Erro ao enviar imagem:', error)
              })
            }

            let collaborators = JSON.parse(localStorage.getItem('collaborators'))
              if(this.file) {
                  this.collaborator.photo = this.file.name
              }
              collaborators.push(this.collaborator)
              localStorage.setItem('collaborators', JSON.stringify(collaborators))
              alert("Colaborador registado com sucesso!")
              this.collaborator = {photo: '', name: '', birthDate: '', telNumber: '', address: '', email: '', check: false }
      }
    },
    collaboratorEditHandler() {
      if (localStorage.getItem('collaborators')) {
        if(this.file) {
              const storage = getStorage()
              const imageRef = storageRef(storage, 'images/' + this.file.name)
              uploadBytes(imageRef, this.file).then((snapshot) => {
                console.log('Imagem enviada com sucesso para o Firebase!')
              }).catch((error) => {
                console.error('Erro ao enviar imagem:', error)
              })
            }

            let collaborators = JSON.parse(localStorage.getItem('collaborators'))
            collaborators.splice(this.index, 1)
               if(this.file) {
                  this.collaboratorEdit.photo = this.file.name
              }
              collaborators.push(this.collaboratorEdit)
              localStorage.setItem('collaborators', JSON.stringify(collaborators))
              alert("Colaborador editado com sucesso!")
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
.letra{
margin:3%;
padding:0%;
}

.botao{
display: flex;
float: right;
margin-top: 0%;
}

.card-body{
  padding:0%;
} 
  
#foto{
  margin-right: -40px;
  margin-left: 3px;
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

input::placeholder {
  font-size: 13px; 
}

input[type="date"].form-control-md {
  font-size: 13px; 
  padding: 0.6rem 1rem; 
}
</style>