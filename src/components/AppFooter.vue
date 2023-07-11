<script>

// Import data
import addressData from '../assets/data/_addressData';
import footerMenu from '../assets/data/_footerMenu';

export default {
    data() {
        return {
            addressData,
            footerMenu,
        }
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <div>
                <div class="address">
                    <h2>Address</h2>
                    <ul>
                        <li v-for="text in addressData">{{ text }}</li>
                    </ul>
                </div>
            </div>

        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/vars' as *;

footer {
    background-color: $topsBgColor;
    height: 500px;
}
</style>