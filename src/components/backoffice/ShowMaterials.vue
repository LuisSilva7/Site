<template>
    <div class="row row-cols-2">
        <div class="column">
            <div class="space">
                <p>Materiais Disponíveis:</p>
                <div v-for="(material, index) in materials" :key="index" class="ola">
                    <p>Material {{ index + 1 }} - {{ material.name }}</p>
                    <BlueButton @click="handleMaterial(index)" content="+"/>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="space">
                <p>Materiais Selecionados:</p>
                <div v-for="(finalMaterial, index) in finalMaterials" :key="index" class="ola">
                    <p>Material {{ index + 1 }} - {{ finalMaterial.name }}</p>
                    <BlueButton @click="handleFinalMaterial(index)" content="-"/>
                </div>
            </div>
        </div>
        <div class="button">
        <BlueButton @click="saveMaterials" content="Confirmar materiais" />
    </div>
    </div>
    
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
p{
    font-size: 12px;
}

.ola {
    display: flex;
    padding-left: 6vh;
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