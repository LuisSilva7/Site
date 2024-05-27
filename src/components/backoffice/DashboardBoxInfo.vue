<template>
    <div class="rectangle">
      <span v-if="content === 'PEDIDOS DE INICIATIVAS'" class="text1">{{ content }}</span>
      <span v-if="content === 'INICIATIVAS FUTURAS'" class="text2">{{ content }}</span>
      <span v-if="content === 'DESPESAS'" class="text3">{{ content }}</span>
      <span v-if="content === 'FUNCIONÁRIOS DISPONÍVEIS'" class="text4">{{ content }}</span>
      <span v-if="content === 'DONATIVOS'" class="text5">{{ content }}</span>
      <span v-if="content === 'RISCOS DETETADOS'" class="text6">{{ content }}</span>
      <span v-if="(content === 'DONATIVOS') || (content === 'DESPESAS')" class="right-number">{{ number }} €</span>
      <span v-if="(content !== 'DONATIVOS') && (content !== 'DESPESAS')" class="right-number">{{ number }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: ['content', 'number']
  }
  </script>
  
  <style scoped>
  .rectangle {
    background-color: white;
    width: 300px; /* Defina a largura desejada */
    height: 70px; /* Defina a altura desejada */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc; /* Opcional: Adicione uma borda para melhor visualização */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Opcional: Adicione uma sombra para profundidade */
  }
  
  .text1 {
    font-size: 16px;
    color: #4229b2;
  }
  
  .text2 {
    font-size: 16px;
    color: #109dd0;
  }

  .text3 {
    font-size: 16px;
    color: #d69316;
  }

  .text4 {
    font-size: 16px;
    color: #10d676;
  }

  .text5 {
    font-size: 16px;
    color: #2da715;
  }

  .text6 {
    font-size: 16px;
    color: #e31616;
  }

  .right-number {
    font-size: 16px;
    color: #333;
  }
  </style>