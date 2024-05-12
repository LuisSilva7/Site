<template>
  <TheHeader class="header"/>
  <AboutSimple />
</template>

<script>
import TheHeader from '../../components/frontoffice/TheHeader.vue';
import AboutSimple from '../../components/frontoffice/AboutSimple.vue';

export default {
    components: { TheHeader, AboutSimple },
}
</script>

<style scoped>
  .header{
    background: url("@/assets/background-header-image.jpeg");
  }
</style>