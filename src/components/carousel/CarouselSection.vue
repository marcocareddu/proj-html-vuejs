<script>
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';

import CarouselCard from './CarouselCard.vue';
import BaseButton from '../BaseButton.vue';

// Import Data
import { carouselData } from '../../assets/data/index';

export default {
    components: { CarouselCard, BaseButton },

    data() {
        return {
            carouselData,
            activeIndex: 1,
            inactiveIndex: 2,
        }
    },
    computed: {
        indexTest() {
            if (this.activeIndex === 0) {
                this.inactiveIndex = this.carouselData.length - 1
            } else if (this.activeIndex === this.carouselData.length - 1) {
                this.inactiveIndex = 0
            } else {
                this.inactiveIndex = this.activeIndex + 1
            }
        }
    },
    methods: {
        iconType(index) {
            const isActive = this.activeIndex === index;
            if (index === this.inactiveIndex) {
                return 'inactive'
            } else {
                return isActive ? 'active' : 'ready';
            }
        },
    },
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
                <CarouselCard v-for="(card, i) in carouselData" :key="card.name" @click="activeIndex = i"
                    :carouselData="card" :class="iconType(i)" />
            </div>
            <div class="dots text-center pt-3">
                <font-awesome-icon v-for="(item, i) in carouselData" :icon="['fas', 'circle']" class="dot px-1"
                    @click="activeIndex = i" />
            </div>
        </div>

        <!-- Online Certification -->
        <div class="text-center py-5 certification">
            <h4 class="fw-bolder">Start today for getting <span>Online Certification</span></h4>
            <h2 class="fw-bolder">You can be your own guiding star with our help!</h2>
            <img src="../../assets/img/maxcoach-shape-02.png" alt="" class="bg-1">
            <img src="../../assets/img/maxcoach-shape-01.png" alt="" class="bg-2">
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

.dots {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}

.dot:hover {
    font-size: 1.3rem;
}

.active {
    display: block;
    opacity: 1;
}

.inactive {
    display: none;
}

.ready {
    opacity: 0.5;
}

.certification {
    position: relative;
}

.bg-1 {
    position: absolute;
    top: 60px;
    right: 200px;
}

.bg-2 {
    position: absolute;
    top: 100px;
    left: 200px;
}
</style>