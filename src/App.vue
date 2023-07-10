<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'MaxCoach',
    components: {
        AppMain,
        AppHeader,
        AppFooter,
    },
}
</script>

<template>
    <!-- Header -->
    <AppHeader />

    <!-- Main -->
    <AppMain />

    <!-- Footer -->
    <AppFooter />
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>