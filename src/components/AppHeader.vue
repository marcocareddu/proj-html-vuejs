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
    <header>

        <!-- Logo -->
        <div class="logo">
            <img src="" alt="MaxCoach Logo">
        </div>

        <!-- Navbar -->
        <div class="navbar">

            <!-- Navbar Menu -->
            <div class="menu">
                <ul>
                    <li v-for="voice in headerMenu" :key="voice.title">
                        <a :href="voice.title">{{ voice.title }}</a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- User section -->
        <div class="user">
            <!-- !TODO Insert icon -->
        </div>

        <!-- SearchBar -->
        <SearchBar />
    </header>
</template>

<style></style>