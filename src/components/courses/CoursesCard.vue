<script>
export default {
    props: { courseData: Object }
}
</script>

<template>
    <div class="custom-card d-flex col-6 px-5 py-3 align-items-center">
        <div class="px-3">
            <img :src="`./src/assets/img/${courseData.image}`" alt="">
        </div>
        <div class="px-2 info-box">
            <h4 class="fw-bolder">{{ courseData.cost }}</h4>
            <h5 class="fw-bolder">{{ courseData.title }}</h5>
            <div class="d-flex info-lessons">
                <p class="pe-3">{{ courseData.lessonsNumber }} Lessons</p>
                <p>{{ courseData.enrolledStudents }} Students</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_vars.scss' as *;

.info-box {
    color: $tertiaryColor;
}

h4 {
    color: $secondaryColor;
}

h5 {
    font-size: 1.2rem;
}

.info-lessons {
    color: $customLilla;
    font-size: 0.8rem;
}

img {
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 100%;
}
</style>