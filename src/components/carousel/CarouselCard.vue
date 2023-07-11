<script>
export default {
    props: { carouselData: Object }
}
</script>

<template>
    <div class="customCol bg-white mx-3 rounded-3">
        <div class="text p-4">
            <h4 class="fw-bolder">{{ carouselData.title }}</h4>
            <p> {{ carouselData.text }}</p>
        </div>
        <div class="d-flex py-3 align-items-center justify-content-start">
            <div class="pe-3">
                <img :src="`./src/assets/img/${carouselData.image}`" alt="avatar">
            </div>
            <div class="">
                <h4 class="fw-bolder py-2">{{ carouselData.name.toUpperCase() }}</h4>
                <h5>/ {{ carouselData.job }}</h5>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_vars.scss' as *;

.customCol {
    flex-basis: 22%;
}

h4 {
    font-size: 1rem;
    color: $tertiaryColor;
    text-transform: capitalize;
}

h5 {
    color: $customLilla;
    font-size: 0.8rem;
}

img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 100%;
}
</style>