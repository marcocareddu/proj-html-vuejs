<script>
import CoursesCard from '../courses/CoursesCard.vue'
import BaseButton from '../BaseButton.vue';


// Import Data
import { courseData } from '../../assets/data/index';

export default {
    components: { CoursesCard, BaseButton },

    data() {
        return {
            courseData,
        }
    }
}
</script>

<template>
    <div class="courses-section">

        <div class="container p-4">
            <div class="title text-center py-5">
                <h6>STIMULATED TO LEARN?</h6>
                <h3 class="fw-bolder">Featured Online Courses</h3>
            </div>

            <!-- Courses card section -->
            <div class="row">

                <!-- Courses Cards -->
                <CoursesCard v-for="card in courseData" :courseData="card" />
            </div>

            <!-- Button -->
            <div class="text-center">
                <BaseButton>
                    <span> View all courses <font-awesome-icon :icon="['fas', 'arrow-right']" class="ps-2" /></span>
                </BaseButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_vars.scss' as *;

.courses-section {
    background-color: $onlineCoursesBg;

    h6 {
        color: $customLilla;
    }
}

.title {
    color: $tertiaryColor;
}
</style>