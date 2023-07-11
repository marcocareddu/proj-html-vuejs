<script>
import Jumbotron from './JumbotronSection.vue';
import CoursesSection from './courses/CoursesSection.vue';
import TutoringSection from './tutoring/TutoringSection.vue';
import CompanionshipSection from './companionship/CompanionshipSection.vue';
import CarouselSection from './carousel/CarouselSection.vue';
import AchievementsSection from './achievements/AchievementsSection.vue';

export default {
    components: {
        Jumbotron,
        CoursesSection,
        TutoringSection,
        CompanionshipSection,
        CarouselSection,
        AchievementsSection,
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

    <!-- Achievements Section -->
    <AchievementsSection />
</template>