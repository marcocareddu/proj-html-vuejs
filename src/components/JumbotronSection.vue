<script>
import BasePartner from './BasePartner.vue';
import BaseButton from './BaseButton.vue';


export default {
    components: {
        BasePartner, BaseButton,
    }
}
</script>

<template>
    <div class="jumbotron">
        <div class="container d-flex justify-content-between py-5">

            <!-- Text Section -->
            <div class="text-box">
                <h1 class="fw-bolder">Distant learning for further expansion</h1>
                <p class="py-2">Learning is a life-long journey that in fact we never find the termonate stop. Stop
                    searching, enjoy the
                    process.</p>

                <!-- Base Button -->
                <div>
                    <BaseButton buttonText="Download Free Guide" />
                </div>

                <p class="py-2">Have questions? <a href="#" class="fw-bolder">Get Free Samples</a></p>
            </div>

            <!-- Picture section -->
            <div class="picture-section d-flex justify-content-center align-items-center">
                <img src="../assets/img/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="Girl Photo">
            </div>
        </div>

        <!-- Base Partner -->
        <BasePartner class="py-5" />
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/vars' as *;

.jumbotron {
    color: $tertiaryColor;
    margin-top: 80px;
}

.test {
    width: 60%;
}

.text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;

    a {
        text-decoration: none;
        color: $secondaryColor;
    }
}

h1 {
    font-size: 50px;
}

img {
    object-fit: contain;
    border-radius: 100%;
}
</style>