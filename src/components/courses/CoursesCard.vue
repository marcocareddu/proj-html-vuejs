<script>
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';

export default {
    props: { courseData: Object }
}
</script>

<template>
    <div class="custom-card d-flex col-6 px-5 py-3 align-items-center rounded-3">
        <div class="px-3">
            <img :src="`./src/assets/img/${courseData.image}`" alt="">
        </div>
        <div class="px-2 info-box">
            <h4 class="fw-bolder">{{ courseData.cost }}</h4>
            <h5 class="fw-bolder">{{ courseData.title }}</h5>
            <div class="d-flex info-lessons">
                <p class="pe-3"><font-awesome-icon :icon="['far', 'file-lines']" /> {{ courseData.lessonsNumber }} Lessons
                </p>
                <p><font-awesome-icon :icon="['far', 'user']" /> {{ courseData.enrolledStudents }} Students</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_vars.scss' as *;

.custom-card {
    transition: 0.3s;

    &:hover {
        background-color: white;
    }
}

h5 {
    font-size: 1.2rem;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        color: $secondaryColor;
    }
}

.info-box {
    color: $tertiaryColor;
}

h4 {
    color: $secondaryColor;
}

.info-lessons {
    color: $customLilla;
    font-size: 0.8rem;
}

img {
    height: 180px;
    width: 180px;
    object-fit: cover;
    border-radius: 100%;
}
</style>