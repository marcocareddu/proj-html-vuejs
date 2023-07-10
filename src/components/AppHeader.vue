<script>
import SearchBar from './BaseSearchBar.vue';

export default {
    props: {
        headerMenu: Object
    },
    components: { SearchBar },
}
</script>

<template>
    <header class="">
        <div class="container d-flex align-items-center justify-content-between h-100">

            <!-- Logo -->
            <div class="logo">
                <img src="../assets/img/dark-logo.png" alt="MaxCoach Logo">
            </div>

            <!-- Navbar -->
            <div class="navbar py-3">

                <!-- Navbar Menu -->
                <div class="menu">
                    <ul class="d-flex mb-0">
                        <li v-for="voice in headerMenu" :key="voice.title" class="px-4">
                            <a :href="voice.title">{{ voice.title }}</a>
                        </li>
                    </ul>
                </div>

                <!-- User section -->
                <div class="user">
                    <!-- !TODO Insert icon -->
                </div>

                <!-- SearchBar -->
                <SearchBar />
            </div>

        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/_vars.scss' as *;

header {
    height: 80px;
    background: $mainBgColor;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    box-shadow: 0px 2px 20px 0px #63f2ff5e;
}

img {
    height: 30px;
}

ul li {
    list-style-type: none;
}

a {
    text-decoration: none;
    color: black;
    transition: 0.3s;

    &:hover {
        color: $secondaryColor;
    }
}
</style>