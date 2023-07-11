<script>
import Jumbotron from './JumbotronSection.vue';
import CoursesSection from './courses/CoursesSection.vue';
import TutoringSection from './tutoring/TutoringSection.vue';
import CompanionshipSection from './companionship/CompanionshipSection.vue';
import CarouselSection from './carousel/CarouselSection.vue';
import AchievementsSection from './achievements/AchievementsSection.vue';
import BestBlogsSection from './best_blogs/BestblogsSection.vue';

export default {
    components: {
        Jumbotron,
        CoursesSection,
        TutoringSection,
        CompanionshipSection,
        CarouselSection,
        AchievementsSection,
        BestBlogsSection,
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

    <!-- BestBlogs Section -->
    <BestBlogsSection />
</template>