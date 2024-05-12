<template>
    <HomeHeader />
    <HomeIniciatives />
    <HomeAbout />
    <HomeFeedback />
    <HomeStatistics />
    <HomeFooter />
</template>

<script>
import HomeHeader from './HomeHeader.vue'
import HomeIniciatives from './HomeIniciatives.vue'
import HomeAbout from './HomeAbout.vue'
import HomeFeedback from './HomeFeedback.vue'
import HomeStatistics from './HomeStatistics.vue'
import HomeFooter from './HomeFooter.vue'

export default {
    components: { HomeHeader, HomeIniciatives, HomeAbout, HomeFeedback, HomeStatistics, HomeFooter }
}
</script>

<style scoped>

</style>