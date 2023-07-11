<script>
export default {
    props: { achievementsData: Object }
}
</script>

<template>
    <div class="customCard py-5 text-center d-flex flex-column justify-content-center">
        <h5 class="fw-bolder px-5">{{ achievementsData.title }}</h5>
        <h1 class="display-3 fw-bold">{{ achievementsData.number }}</h1>
        <h6 class="fw-bolder">{{ achievementsData.type }}</h6>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_vars.scss' as *;

.customCard {
    height: 350px;
    border: 2px solid $topsBgColor;
    flex-basis: 25%;
}

h5 {
    color: $tertiaryColor;
}

h1 {
    color: $secondaryColor;
}

h6 {
    color: $customLilla;
}
</style>