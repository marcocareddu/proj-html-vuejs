<script>

// Import data
import footerMenu from '../assets/data/_footerMenu';

export default {
    data() {
        return {
            footerMenu,
        }
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="d-flex justify-content-between py-5">
                <!-- Address Section -->
                <div class="address">
                    <h5 class="fw-bolder">Address</h5>
                    <ul>
                        <li class="py-2">382 NE 191st St # 87394 Miami, FL 33179-3899</li>
                        <li class="py-2">+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</li>
                        <li class="py-2"><a href="#">support@maxcoach.com</a></li>
                    </ul>

                    <!-- Social Icons -->
                    <div class="social">
                        <span>ico</span>
                        <span>ico</span>
                        <span>ico</span>
                        <span>ico</span>
                    </div>
                </div>

                <!-- Footer Menu -->
                <div v-for="voice in footerMenu" class="">
                    <h5 class="fw-bolder">{{ voice.title }}</h5>
                    <div class="row">
                        <ul>
                            <li v-for="link in voice.link" class="py-2"><a href="#">{{ link }}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p class="text-center">© 2020 Maxcoach. All Rights Reserved</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/vars' as *;

footer {
    background-color: $topsBgColor;
}

a {
    color: black;

    &:hover {
        color: $secondaryColor;
    }
}
</style>