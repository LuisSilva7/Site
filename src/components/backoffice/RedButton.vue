<template>
  <div>
         <button type="button" class="btn">{{ content }}</button>
       </div>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style scoped>
.button-body {
 margin-left: 0%;
 padding: 0;
 padding-left: 70%;
 padding-bottom: 2%;
}

.btn {
 color: white;
 background-image: linear-gradient(to bottom, #f0260b, #530505);
 border-radius: 50px;
 font-size:13px;
 border:#161934;
 font-style: bold;
}

.btn:hover{
color: #e47070; /* Torna o tom vermelho mais escuro ao passar o mouse */
}
</style>