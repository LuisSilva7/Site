<template>
    <div class="row row-cols-2">
        <div class="column">
            <div class="space">
                <p>Colaboradores Disponíveis:</p>
                <div v-for="(collaborator, index) in collaborators" :key="index" class="ola">
                    <p>Colaborador {{ index + 1 }} - {{ collaborator.name }}</p>
                    <BlueButton @click="handleCollaborator(index)" content="+"/>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="space">
                <p>Colaboradores Selecionados:</p>
                    <div v-for="(finalCollaborator, index) in finalCollaborators" :key="index" class="ola">
                        <p>Colaborador {{ index + 1 }} - {{ finalCollaborator.name }}</p>
                        <BlueButton @click="handleFinalCollaborator(index)" content="-"/>
                    </div>
            </div>   
        </div>
        <div class="button">
            <BlueButton @click="saveCollaborators" content="Confirmar colaboradores" />
        </div>
    </div>
</template>

<script>
import BlueButton from './BlueButton.vue'

export default {
    components: { BlueButton },
    props:['collaborators'],
    data() {
        return {
            finalCollaborators: []
        }
    },
    methods: {
        handleCollaborator(index) {
            this.finalCollaborators.push(this.collaborators[index])
            this.collaborators.splice(index, 1)
        },
        handleFinalCollaborator(index) {
            this.collaborators.push(this.finalCollaborators[index])
            this.finalCollaborators.splice(index, 1)
        },
        saveCollaborators() {
            console.log("QUNADO ENVIA")
            console.log(this.finalCollaborators)
            this.$emit('collaboratorsSaved', this.finalCollaborators)
        }
    }
}
</script>

<style scoped>

p{
    font-size: 12px;
}

.ola {
    display: flex;
    text-align: justify;
    padding-left: 5vh;
}

.button{
    margin-top: auto;
    text-align: center;
}

.space{
    width:100%;
    text-align: center;
 }
</style>