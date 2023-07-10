<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

// Import Data
import {
    addressData,
    bestBlogsData,
    carouselData,
    footerMenu,
    headerMenu,
    courseData,
    tutoringData
} from './assets/data/index';

export default {
    name: 'MaxCoach',
    data() {
        return {
            addressData,
            bestBlogsData,
            carouselData,
            footerMenu,
            headerMenu,
            courseData,
            tutoringData,
        }
    },
    components: {
        AppMain,
        AppHeader,
        AppFooter,
    },
}
</script>

<template>
    <!-- Header -->
    <AppHeader :headerMenu="headerMenu" />

    <!-- Main -->
    <AppMain />

    <!-- Footer -->
    <AppFooter />
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>