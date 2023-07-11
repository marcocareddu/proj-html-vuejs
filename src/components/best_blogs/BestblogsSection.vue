<script>
import BestblogsCard from '../best_blogs/BestblogsCard.vue';

// Import Data
import { bestblogsData } from '../../assets/data/index';
import { bestBlogsList } from '../../assets/data/index';

export default {
    components: { BestblogsCard },

    data() {
        return { bestblogsData, bestBlogsList }
    }
}
</script>

<template>
    <div class="bestblogs-section">

        <!-- Bestblogs card here -->
        <BestblogsCard />
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_vars.scss' as *;

.bestblogs-section {
    background-color: $bestBlogsBgColor;
}
</style>