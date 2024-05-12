<template>
    <TheNavBar />
    <CollaboratorAddEdit :collaboratorEdit="collaboratorEdit" />
</template>

<script>
import TheNavBar from '@/components/backoffice/TheNavBar.vue'
import CollaboratorAddEdit from '@/components/backoffice/CollaboratorAddEdit.vue'

export default {
    components: { TheNavBar, CollaboratorAddEdit },
    props: ['index'],
    data() {
        return {
            collaboratorEdit: null
        }
    },
    created() {
        if(localStorage.getItem('collaborators')) {
            this.collaboratorEdit = JSON.parse(localStorage.getItem('collaborators'))[this.index]
        }
    }
}
</script>

<style>

</style>