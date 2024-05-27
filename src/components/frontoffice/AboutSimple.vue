<template>
  <div class="video-background">
    <video autoplay muted loop class="video">
      
      
      <source src="@/assets/course-video2.mp4" type="video/mp4">
      <!-- Adicione mais sources se necessário para suportar diferentes formatos de vídeo -->
    </video>
    <div class="content">
      <h2>BEM-VINDO À GO HELP</h2>
      <p>Somos uma organização sem fins lucrativos dedicada a promover a saúde e o bem-estar através de iniciativas no ramo do desporto.
      </p>
      <Button @click="scrollToComponent" content="JUNTA-TE AGORA!" />
    </div>
  </div>
</template>

<script>
import Button from '../frontoffice/Button.vue'

export default {
  components: { Button },
  methods: {
    scrollToComponent() {
      const secondComponent = document.getElementById('scrollHere')
      secondComponent.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

</script>

<style scoped>
.video-background {
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}


.content {
  position: absolute;
  top: 30%;
  left: 0;
  /* alinha a margem esquerda com a margem esquerda da página */
  transform: translateY(-50%);
  transform: translateX(30%);
  max-width: 30%;
  text-align: left;
  /* alinha o texto à esquerda */
  color: white;
  /* ou outra cor desejada para o texto */
}

.content h2 {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
  /* ajuste conforme desejado */
}

.content p {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
  font-size: 1em;
  width: 80%;
 
  /* ajuste conforme desejado */
}
</style>