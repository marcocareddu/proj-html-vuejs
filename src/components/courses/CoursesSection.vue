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
    <div class="container py-4">
        <div class="row">
            <!-- Courses Card -->
            <CoursesCard v-for="card in courseData" :courseData="card" />
        </div>
    </div>
</template>

<style></style>