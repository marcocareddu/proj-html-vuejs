<script>
export default {
    props: { bestblogsData: Object }
}
</script>

<template>
    <div class="bg-white rounded-bottom big-box">
        <div class="picture">
            <img :src="`./src/assets/img/${bestblogsData.image}`" class="img-fluid rounded-top" alt="">
        </div>
        <div class="px-3 pt-4 info-box">
            <h6>{{ bestblogsData.type.toUpperCase() }}</h6>
            <h4 class="fw-bolder">{{ bestblogsData.title }}</h4>
            <div class="d-flex py-3">
                <p class="pe-3">{{ bestblogsData.data }}</p>
                <p>{{ bestblogsData.views }} views</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_vars.scss' as *;

.big-box {

    &:hover img {
        transform: scale(1.1);
    }
}

.picture {
    overflow: hidden;
}

img {

    transition: 1s;
    cursor: pointer;
}

h4 {
    color: $tertiaryColor;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        color: $secondaryColor;
    }
}

h6 {
    color: $customLilla;
}

p {
    color: $customDarkGrey;
    font-size: 1rem;
}

a {
    color: $customLilla;
    font-size: 0.8rem;
    transition: 0.3s;
}
</style>