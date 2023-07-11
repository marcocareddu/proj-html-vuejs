<script>
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';

import BestblogsCard from '../best_blogs/BestblogsCard.vue';

// Import Data
import { bestBlogsData } from '../../assets/data/index';
import { bestBlogsList } from '../../assets/data/index';

export default {
    components: { BestblogsCard },

    data() {
        return { bestBlogsData, bestBlogsList }
    }
}
</script>

<template>
    <div class="bestblogs-section py-5">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">

                <!-- Bestblogsist -->
                <div class="list">
                    <h6>ENJOYABLE INSIGHTS</h6>
                    <h3 class="fw-bolder">Most Viewed <span class="fw-normal">Best Blogs</span></h3>
                    <ul>
                        <li v-for="link in bestBlogsList" class="py-3"><a href="#" class="fw-bolder"><font-awesome-icon
                                    :icon="['fas', 'arrow-right']" /> {{ link }}</a></li>
                    </ul>
                </div>

                <!-- Bestblogs card here -->
                <BestblogsCard v-for="card in bestBlogsData" :key="card.name" :bestblogsData="card" class="custom-card" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_vars.scss' as *;

.bestblogs-section {
    background-color: $bestBlogsBgColor;
}

h3 {
    color: $tertiaryColor;

}

h6 {
    color: $customLilla;
}

span {
    color: $secondaryColor;
}

a {
    color: $tertiaryColor;
    transition: 0.3s;

    &:hover {
        color: $secondaryColor;
    }
}

.custom-card {
    flex-basis: 28%;
}
</style>