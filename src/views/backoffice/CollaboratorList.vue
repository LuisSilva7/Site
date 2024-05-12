<template>
    <TheNavBar />
    <br><br><br><br><br><br>
    <CollaboratorList :collaboratorList="collaboratorList" />
</template>

<script>
import TheNavBar from '@/components/backoffice/TheNavBar.vue'
import CollaboratorList from '@/components/backoffice/CollaboratorList.vue'

export default {
    components: { TheNavBar, CollaboratorList },
    data() {
        return {
            collaboratorList: []
        }
    },
    created() {
        if (localStorage.getItem('collaborators')) {
            this.collaboratorList = JSON.parse(localStorage.getItem('collaborators'))
        }
    }
}
</script>

<style scoped>

</style>