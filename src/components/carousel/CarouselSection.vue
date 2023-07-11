<script>
import CarouselCard from './CarouselCard.vue';
import BaseButton from '../BaseButton.vue';

// Import Data
import { carouselData } from '../../assets/data/index';

export default {
    components: { CarouselCard, BaseButton },

    data() {
        return {
            carouselData,
        }
    }
}

</script>

<template>
    <div class="carousel-section">
        <div class="container">
            <div class="title text-center py-5">
                <h6>GREAT WORDS ABOUT MAXCOACH</h6>
                <h3 class="fw-bolder">Our <span>top learners'</span> verbatim</h3>
            </div>

            <!-- Carousel Section Start -->
            <div class="row">

                <!-- Carousel Card Inject -->
                <CarouselCard v-for="card in carouselData" :key="card.name" :carouselData="card" />
            </div>
        </div>

        <!-- Online Certification -->
        <div class="text-center py-5">
            <h4 class="fw-bolder">Start today for getting <span>Online Certification</span></h4>
            <h2 class="fw-bolder">You can be your own guiding star with our help!</h2>

            <!-- Base Button -->
            <BaseButton :buttonText="'Get started now'" />
        </div>


    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_vars.scss' as *;

.carousel-section {
    background: $topsBgColor;
}

h6 {
    color: $customLilla;
}

span {
    color: $secondaryColor;
    font-weight: 500;
}

.title,
h4,
h2 {
    color: $tertiaryColor;
}
</style>