<script>
export default {
    props: { tutoringData: Object }
}
</script>

<template>
    <div class="custom-card col-4 px-5 py-3">
        <div class="py-4 px-2">
            <img :src="`./src/assets/img/${tutoringData.image}`" alt="">
        </div>
        <div class="px-2 info-box">
            <h4 class="fw-bolder">{{ tutoringData.title }}</h4>
            <p class="pt-2">{{ tutoringData.text }}</p>
            <a :href="tutoringData.text" class="fw-bolder pt-2">{{ tutoringData.textLink }}</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_vars.scss' as *;

.custom-card {
    &:hover a {
        color: $secondaryColor;
    }
}

h4 {
    color: $tertiaryColor;
}

p {
    font-size: 0.9rem;
}

a {
    text-decoration: none;
    color: $customLilla;
    font-size: 0.8rem;
    transition: 0.3s;
}
</style>