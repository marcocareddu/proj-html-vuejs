<script>
export default {
    props: { bestblogsData: Object }
}
</script>

<template>
    <div class="custom-card col-4 bg-white">
        <div class="">
            <img :src="`./src/assets/img/${bestblogsData.image}`" class="img-fluid" alt="">
        </div>
        <div class="px-2 info-box">
            <h6>{{ bestblogsData.type.toUpperCase() }}</h6>
            <h4 class="fw-bolder">{{ bestblogsData.title }}</h4>
            <div class="d-flex info-lessons">
                <p class="pe-3">{{ bestblogsData.data }}</p>
                <p>{{ bestblogsData.views }} views</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_vars.scss' as *;

h4 {
    color: $tertiaryColor;
}

h6 {
    color: $customLilla;
}

p {
    color: $customDarkGrey;
    font-size: 1rem;
}

a {
    text-decoration: none;
    color: $customLilla;
    font-size: 0.8rem;
    transition: 0.3s;
}
</style>