<script>
import CoursesCard from '../courses/CoursesCard.vue'

// Import Data
import { courseData } from '../../assets/data/index';

export default {
    components: { CoursesCard },

    data() {
        return {
            courseData,
        }
    }
}
</script>

<template>
    <!-- Courses Card -->
    <CoursesCard v-for="card in courseData" />
</template>

<style></style>