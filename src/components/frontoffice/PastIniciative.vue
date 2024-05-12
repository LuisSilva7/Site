<template>
    <div class="quadrado">
        <h2>Título Aqui</h2>
        <p>Texto.</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.quadrado {
    width: 300px; /* Largura do quadrado */
    height: 300px; /* Altura do quadrado */
    background-image: url("@/assets/gym-class-image.png"); /* URL da imagem de fundo */
    background-size: cover; /* Ajusta o tamanho da imagem para cobrir todo o quadrado */
    background-position: center; /* Centraliza a imagem de fundo */
    text-align: center; /* Alinha o texto ao centro do quadrado */
    padding: 20px; /* Espaçamento interno */
    color: white; /* Cor do texto */
    border: 2px solid #fff; /* Adiciona borda branca */
    box-sizing: border-box; /* Faz com que a borda seja incluída no cálculo da largura e altura */
    display: flex; /* Usa flexbox para alinhar itens verticalmente */
    flex-direction: column; /* Coloca os itens um em cima do outro */
    justify-content: center; /* Alinha os itens verticalmente ao centro */
    align-items: center; /* Alinha os itens horizontalmente ao centro */
}

h2 {
    font-size: 24px; /* Tamanho do título */
    margin-bottom: 10px; /* Espaçamento inferior entre o título e o texto */
}

p {
    font-size: 16px; /* Tamanho do texto */
    margin: 0; /* Remove margens padrão */
}
</style>