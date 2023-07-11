<script>
import TutoringCard from './TutoringCard.vue';

// Import Data
import { tutoringData } from '../../assets/data/index';

export default {
    components: { TutoringCard },

    data() {
        return {
            tutoringData,
        }
    }
}
</script>

<template>
    <!-- Courses Section -->
    <div class="tutoring-section">

        <div class="container p-4">

            <div class="title text-center py-5">
                <h6>MAXCOACH AVAILABLE COURSES</h6>
                <h3 class="fw-bolder">Access <span>Smart Tutoring</span> Program For Benefits.</h3>
            </div>

            <!-- Courses card section -->
            <div class="row">

                <!-- Courses Cards -->
                <TutoringCard v-for="card in tutoringData" :tutoringData="card" />
            </div>
        </div>
    </div>
</template>

<style></style>