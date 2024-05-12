<template>
    <TheNavBar />
    <MaterialAddEdit :materialEdit="materialEdit" :index="index"/>
</template>

<script>
import TheNavBar from '@/components/backoffice/TheNavBar.vue'
import MaterialAddEdit from '@/components/backoffice/MaterialAddEdit.vue'

export default {
    components: { TheNavBar, MaterialAddEdit },
    props: ['index'],
    data() {
        return {
            materialEdit: null
        }
    },
    created() {
        if(localStorage.getItem('materials')) {
            this.materialEdit = JSON.parse(localStorage.getItem('materials'))[this.index]

        }
    }
}
</script>

<style>

</style>