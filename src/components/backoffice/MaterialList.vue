<template>
  <div class="header">
    <h2>Lista de Materiais</h2>
    <div class="material-table-wrapper">
    <div class="collaborator-table-container">
      <table class="collaborator-table">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(material, index) in materialList" :key="index">
            <td>
              <img v-if="material.photo === ''" src="@/assets/default-image.png" height="80px" width="80px" alt="Foto do Colaborador">
              <img v-else :src="imageUrl[index]" height="80px" width="80px" alt="Foto do Colaborador">
            </td>
            <td>{{ material.name }}</td>
            <td>{{ material.description }}</td>
            <td>{{ material.quantity }}</td>
            <td><svg @click="editHandler(index)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
            </svg></td>
            <td><svg @click="removeHandler(index)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>
</template>

<script>
import { getStorage, ref as storageRef, getDownloadURL  } from 'firebase/storage'

export default {
  props: ['materialList'],
  data() {
    return {
      imageUrl: []
    }
  },
  methods: {
    editHandler(index) {
      this.$router.push({ name: 'MaterialEdit', params: { index: index }})
    },
    removeHandler(index) {
      this.materialList.splice(index, 1)
      if(localStorage.getItem('materials')) {
        localStorage.setItem('materials', JSON.stringify(this.materialList))
      }
    }
  },
  created() {
    const storage = getStorage()
    const promises = []

    for (const material of this.materialList) {
      if (material.photo) {
        const imageRef = storageRef(storage, 'images/' + material.photo)
        promises.push(getDownloadURL(imageRef).then((url) => ({ material, url })))
      } else {
        this.imageUrl.push('defaultImage.png')
      }
    }

    Promise.all(promises)
      .then((results) => {
        results.forEach(({ material, url }) => {
          const index = this.materialList.findIndex((m) => m === material)
          this.imageUrl[index] = url
        })
        console.log('URLs das imagens obtidas:', this.imageUrl)
      })
      .catch((error) => {
        console.error('Erro ao obter URLs das imagens:', error)
      })
  }
}
</script>

<style scoped>
.material-table-wrapper {
  display: flex;
  justify-content: center;
  width: calc(100% - 40px); /* Reduzido 40px para margem */
}
.header {
  margin: 20px; /* Adiciona margem ao redor do contêiner */
}

.collaborator-table-container {
  overflow-y: auto;
  overflow-x: hidden; 
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
  display: flex;
  justify-content: right;
  width: 100%;
  max-height: 510px; 
  border-radius: 10px;
  box-sizing: border-box;
  margin-left: -20%;
}

h2 {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: flex;
  margin-left: 10%;
  margin-top: -3%;
}

.collaborator-table {
  width: 80%;
  border-collapse: collapse;
  
  background-image: url("@/assets/background-header-image.jpeg");
}

th, td {
  padding: 12px 15px;
  text-align: left;
}

thead {
  background-color: #0b1027;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

th {
  font-weight: bold;
}

tbody tr {
  border-bottom: 1px solid #ccc;
}

tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.2)
}

img {
  max-width: 80px;
  max-height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #0b1027;
}

svg {
  cursor: pointer;
  height: 30px;
  width: 30px;
}

</style>