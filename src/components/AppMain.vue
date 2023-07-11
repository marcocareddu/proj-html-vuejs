<script>
import Jumbotron from './JumbotronSection.vue';
import CoursesSection from './courses/CoursesSection.vue';
import TutoringSection from './tutoring/TutoringSection.vue';

export default {
    components: {
        Jumbotron,
        CoursesSection,
        TutoringSection,
    }
}
</script>

<template>
    <!-- Jumbotron Section-->
    <Jumbotron />

    <!-- Courses Section -->
    <CoursesSection />

    <!-- Tutoring Section -->
    <TutoringSection />
</template>

<style></style>