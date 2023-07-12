<script>
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
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
                            <a :href="voice.title" class="d-flex align-items-center">{{ voice.title }}
                                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                            </a>

                            <!-- Dropdown -->
                            <div class="d-down pt-3">
                                <ul>
                                    <li v-for="link in voice.link" :key="link.name" class="p-2 px-4"><a :href="link.url">{{
                                        link.name }}</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- User section -->
                <div class="user mx-3">
                    <a href="#"><font-awesome-icon :icon="['far', 'circle-user']" /></a>
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
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    box-shadow: 0px 2px 20px 0px $customLilla;
}

.user {
    font-size: 1.3rem;
}

.fa-chevron-down {
    margin-left: 5px;
    font-size: 0.6rem;
}

img {
    height: 30px;
}

ul li {
    list-style-type: none;

    &:hover {
        .d-down {
            display: block;
        }
    }
}

a {
    text-decoration: none;
    color: black;
    transition: 0.3s;

    &:hover {
        color: $secondaryColor;
    }
}

.menu {
    position: relative;
}

.d-down {
    position: absolute;
    top: 25px;
    width: 250px;
    display: none;
    background-color: white;
    z-index: 1;
    border-bottom: 5px solid $secondaryColor;

    ul li a {
        color: $customLilla;

        &:hover {
            color: black;
        }
    }
}
</style>