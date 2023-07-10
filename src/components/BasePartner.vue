<script>
export default {

}
</script>

<template>
    <div class="container partner-row d-flex justify-content-evenly align-items-center">
        <img v-for="image in getSixImagePath" :src="image" alt="#">
    </div>
</template>

<style lang="scss" scoped>
img {
    opacity: 0.5;
    transition: 0.3s;

    &:hover {
        opacity: 1;
    }
}
</style>