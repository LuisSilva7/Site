<template>
    <p>Materiais Disponíveis:</p>
    <div v-for="(material, index) in materials" :key="index">
        <BlueButton @click="handleMaterial(index)" content="+"/>
        <p>Material {{ index + 1 }} - {{ material.name }}</p>
    </div>
    <p>Materiais Selecionados:</p>
    <div v-for="(finalMaterial, index) in finalMaterials" :key="index">
        <BlueButton @click="handleFinalMaterial(index)" content="-"/>
        <p>Material {{ index + 1 }} - {{ finalMaterial.name }}</p>
    </div>
    <BlueButton @click="saveMaterials" content="Confirmar materiais" />
</template>

<script>
import BlueButton from './BlueButton.vue'

export default {
    components: { BlueButton },
    props:['materials'],
    data() {
        return {
            finalMaterials: []
        }
    },
    methods: {
        handleMaterial(index) {
            this.finalMaterials.push(this.materials[index])
            this.materials.splice(index, 1)
        },
        handleFinalMaterial(index) {
            this.materials.push(this.finalMaterials[index])
            this.finalMaterials.splice(index, 1)
        },
        saveMaterials() {
            this.$emit('materialsSaved', {materialsSaved: this.finalMaterials})
        }
    }
}
</script>

<style>

</style>