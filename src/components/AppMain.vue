<script>
import Jumbotron from './JumbotronSection.vue';
import CoursesSection from './courses/CoursesSection.vue';
import TutoringSection from './tutoring/TutoringSection.vue';
import CompanionshipSection from './companionship/CompanionshipSection.vue';

export default {
    components: {
        Jumbotron,
        CoursesSection,
        TutoringSection,
        CompanionshipSection,
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

    <!-- Championship Section -->
    <CompanionshipSection />
</template>

<style></style>