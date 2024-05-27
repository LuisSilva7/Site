<template>
    <div>
      <button class="red-button">{{ content }}</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['content']
  }
  </script>
  
  <style scoped>
  .red-button {
    background-color: rgb(163, 9, 9);
    color: white;
    padding: 5px 10px;
    border: 2px solid rgb(145, 7, 7); /* Adiciona borda vermelha escura */
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s; /* Adiciona transição para o efeito hover */
  }
  
  .red-button:hover {
    background-color: #700505; /* Torna o tom vermelho mais escuro ao passar o mouse */
  }
  </style>