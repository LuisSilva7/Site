<template>
    <TheNavBar />
    <br><br><br><br><br><br>
    <MaterialList :materialList="materialList" />
</template>

<script>
import TheNavBar from '@/components/backoffice/TheNavBar.vue'
import MaterialList from '@/components/backoffice/MaterialList.vue'

export default {
    components: { TheNavBar, MaterialList },
    data() {
        return {
            materialList: []
        }
    },
    created() {
        if (localStorage.getItem('materials')) {
            this.materialList = JSON.parse(localStorage.getItem('materials'))
        }
    }
}
</script>

<style scoped>

</style>