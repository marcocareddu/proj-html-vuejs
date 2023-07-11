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
    <div class="container">
        <div class="row">
            <CarouselCard v-for="card in carouselData" :key="card.name" :carouselData="card" />
        </div>
    </div>
</template>

<style></style>