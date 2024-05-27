<template>
    <div>
      <button @click="returnIniciatives" class="red-button">{{ content }}</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['content'],
    methods: {
      returnIniciatives() {
        console.log('ola')
        this.$emit('returnStatus', this.content)
      }
    }
  }
  </script>
  
  <style scoped>
  .red-button {
    font-weight: bold;
    background-color: rgb(255, 255, 255);
    color: rgb(114, 6, 6);
    padding: 5px 10px;
    border: 2px solid rgb(0, 0, 0); /* Adiciona borda vermelha escura */
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s; /* Adiciona transição para o efeito hover */
  }
  
  .red-button:hover {
    background-color: #990000; /* Torna o tom vermelho mais escuro ao passar o mouse */
    color: white;
  }
  </style>