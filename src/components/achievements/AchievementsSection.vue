<script>
import AchievementsCard from './AchievementsCard.vue';

// Import Data
import { achievementsData } from '../../assets/data/index';

export default {
    components: { AchievementsCard },

    data() {
        return {
            achievementsData,
        }
    }
}
</script>

<template>
    <AchievementsCard v-for="card in achievementsData" :achievementsData="card" />
</template>

<style></style>