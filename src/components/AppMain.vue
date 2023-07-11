<script>
import Jumbotron from './JumbotronSection.vue';
import CoursesSection from './courses/CoursesSection.vue';
import TutoringSection from './tutoring/TutoringSection.vue';
import CompanionshipSection from './companionship/CompanionshipSection.vue';
import CarouselSection from './carousel/CarouselSection.vue';


export default {
    components: {
        Jumbotron,
        CoursesSection,
        TutoringSection,
        CompanionshipSection,
        CarouselSection,
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

    <!-- Carousel Section -->
    <CarouselSection />
</template>

<style></style>