<script>
import { courseData } from '../../assets/data';

export default {
    props: { courseData: Object }
}
</script>

<template>
    <div>
        <img :src="`./src/assets/img/${courseData.image}`" alt="">
    </div>
    <div>
        <h3>{{ courseData.cost }}</h3>
        <h1>{{ courseData.title }}</h1>
        <div class="d-flex">
            <p>{{ courseData.lessonsNumber }} Lessons</p>
            <p>{{ courseData.enrolledStudents }} Students</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 100%;
}
</style>