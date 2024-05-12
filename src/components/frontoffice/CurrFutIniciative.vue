<template>
    <div class="quadrado">
      <div class="conteudo-imagem">
        <img id="img" src="@/assets/gym-class-image.png" alt="Imagem">
      </div>
      <div class="informacoes">
        <div class="date">
          <h4 id="month">Dez</h4>
          <h5 id="day">12</h5>
        </div>
        <div class="texto">
          <h5 id="titulo">Aula de Basket</h5> <!-- titulo-->
          <p id="local">Local: Braga</p> <!-- Local do evento-->
          <p id="numero">Nº de participantes: 15</p>
        </div>
        <button class="botao">Consultar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {

  }
  </script>
  
  <style scoped>
  
  .quadrado {
  margin-top: 60px;
  position: relative;
  width: 375px; /* Largura do quadrado */
  height: 325px; /* Altura do quadrado */
  background-color: #f0f0f0; /* Cor de fundo do quadrado */
  border-radius: 30px; /* Borda arredondada */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
  overflow: hidden; /* Para esconder partes da imagem que saem do quadrado */
  
  }
  
  .conteudo-imagem {
  position: relative;
  width: 100%;
  height: 100%; 
  overflow: hidden;
  margin-bottom: 0;
  }
  
  #img {
    display: block; /* Garante que a imagem seja exibida como bloco */
    width: 100%; /* Garante que a imagem não ultrapasse a largura do quadrado */
    height: 50%; /* Garante que a imagem não ultrapasse a altura do quadrado */
    margin: auto; 
    overflow: hidden;
  }
  
  .informacoes {
  background-color:#ffffff;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  text-align: center;
  padding-top:20px;
  padding-left:20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content:left;
  }
  
  .date {
  padding: 0 10px 10px 10px; /* Aqui dá para mexer para centrar no container*/ 
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  }
  
  #month {
  margin-bottom: 0;
  text-align:justify;
  color: crimson;
  }
  
  #day {
  color: black;
  }
  
  .texto {
  padding-left: 10px;
  padding-top: 3px;
  flex-grow:5;
  text-align: left;
  }
  
  #titulo {
  margin-bottom: 5px;
  font-weight: bold;
  color:black;
  }
  
  #local {
  margin-bottom: 3px;
  color:black;
  }
  
  #numero {
  color:black;
  }
  
  .botao {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #ffffff; /* Cor do botão */
  color: #7e0a0a; /* Cor do texto do botão */
  border: none;
  border-radius: 30px 0 0 0; /* Borda arredondada - tenho que definir apenas a esquerda superior e direita inferior */
  padding: 7px 14px; /* Espaçamento interno */
  cursor: pointer;
  transition: background-color 0.3s ease; /* Transição suave de cor de fundo */
  border: 2px solid black;
  border-bottom-right-radius: 30px;
  }
  
  .botao:hover {
  background-color: #bcc2c7; /* Cor do botão ao passar o mouse */
  }
  </style>