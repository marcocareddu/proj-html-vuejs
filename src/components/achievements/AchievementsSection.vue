<script>
import AchievementsCard from './AchievementsCard.vue';

// Import Data
import { achievementsData } from '../../assets/data/index';

export default {
    components: { AchievementsCard },

    data() {
        return { achievementsData }
    }
}
</script>

<template>
    <div class="achievements-section"></div>
    <div class="container">
        <div class="row">
            <AchievementsCard v-for="card in achievementsData" :achievementsData="card" />
        </div>
    </div>
</template>

<style></style>