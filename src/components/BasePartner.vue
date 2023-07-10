<script>
export default {
    computed: {

        // Generate six image path 
        getSixImagePath() {
            const imagesPath = [];
            for (let i = 0; i < 6; i++) {
                imagesPath.push(`./src/assets/img/client-logo-0${i + 1}.png`)
            }
            return imagesPath;
        }
    }
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