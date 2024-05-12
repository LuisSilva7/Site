<template>
    <p>Colaboradores Disponíveis:</p>
    <div v-for="(collaborator, index) in collaborators" :key="index">
        <BlueButton @click="handleCollaborator(index)" content="+"/>
        <p>Colaborador {{ index + 1 }} - {{ collaborator.name }}</p>
    </div>
    <p>Colaboradores Selecionados:</p>
    <div v-for="(finalCollaborator, index) in finalCollaborators" :key="index">
        <BlueButton @click="handleFinalCollaborator(index)" content="-"/>
        <p>Colaborador {{ index + 1 }} - {{ finalCollaborator.name }}</p>
    </div>
    <BlueButton @click="saveCollaborators" content="Confirmar colaboradores" />
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
            this.$emit('collaboratorsSaved', {collaboratorsSaved: this.finalCollaborators})
        }
    }
}
</script>

<style>

</style>