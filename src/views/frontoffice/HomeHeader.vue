<template>
  <TheHeader :class="{'scrolled': isScrolled}"/>
  <AboutSimple />
</template>

<script>
import TheHeader from '../../components/frontoffice/TheHeader.vue';
import AboutSimple from '../../components/frontoffice/AboutSimple.vue';

export default {
  components: { TheHeader, AboutSimple },
  data() {
    return {
      isScrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 450;
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

header.scrolled {
  background: url("@/assets/background-header-image.jpeg");
}
</style>