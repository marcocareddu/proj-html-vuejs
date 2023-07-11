<script>
export default {
    props: { tutoringData: Object }
}
</script>

<template>
    <div class="custom-card col-4 px-5 py-3">
        <div class="px-3">
            <img :src="`./src/assets/img/${tutoringData.image}`" alt="">
        </div>
        <div class="px-2 info-box">
            <h4 class="fw-bolder">{{ tutoringData.title }}</h4>
            <h5 class="fw-bolder">{{ tutoringData.text }}</h5>
            <a :href="tutoringData.text">{{ tutoringData.textLink }}</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_vars.scss' as *;

h4 {
    color: $secondaryColor;
}

h5 {
    font-size: 1.2rem;
}

img {
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 100%;
}
</style>