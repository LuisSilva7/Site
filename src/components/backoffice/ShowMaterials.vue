<template>
    <p>Materiais Disponíveis:</p>
    <div v-for="(material, index) in materials" :key="index" class="ola">
        <p>Material {{ index + 1 }} - {{ material.name }}</p>
        <BlueButton @click="handleMaterial(index)" content="+"/>
    </div>
    <br>
    <p>Materiais Selecionados:</p>
    <div v-for="(finalMaterial, index) in finalMaterials" :key="index" class="ola">
        <p>Material {{ index + 1 }} - {{ finalMaterial.name }}</p>
        <BlueButton @click="handleFinalMaterial(index)" content="-"/>
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
            this.$emit('materialsSaved', this.finalMaterials)
        }
    }
}
</script>

<style scoped>
.ola {
    display: flex;
}
</style>