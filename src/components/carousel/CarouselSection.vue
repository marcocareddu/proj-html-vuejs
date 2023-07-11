<script>
import CarouselCard from './CarouselCard.vue';

// Import Data
import { carouselData } from '../../assets/data/index';

export default {
    components: { CarouselCard },

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
            <div class="row">
                <CarouselCard v-for="card in carouselData" :key="card.name" :carouselData="card" />
            </div>
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

.title {
    color: $tertiaryColor;
}
</style>