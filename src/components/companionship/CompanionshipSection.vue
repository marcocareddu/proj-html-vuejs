<script>
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
export default {}
</script>

<template>
    <div class="container d-flex py-5 justify-content-evenly">
        <div class="picture px-5 rounded-3">
            <img src="../../assets/img/home-2-popup-video-poster.jpg" class="main-pic" alt="">
            <img src="../../assets/img/icon-youtube-play.png" class="youtube img-fluid" alt="">
        </div>

        <div class="text d-flex flex-column align-self-center">
            <h6>GET STARTED <span class="fw-bolder">EFFORTLESSLY</span></h6>
            <h1 class="fw-bolder pt-3">Enjoy Our</h1>
            <h1 class="companionship">Companionship</h1>
            <p>Sneek peek into what has in store for you on our online teaching and mentoring portal. Seek for some hidden
                hints of early-bird rewards as well.</p>
            <a href="#" class="fw-bolder">Download free guidebook <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
        </div>

        <img src="../../assets/img/maxcoach-shape-05-150x150.png" alt="" class="bg-1">
        <img src="../../assets/img/maxcoach-shape-02.png" alt="" class="bg-3">
        <img src="../../assets/img/maxcoach-shape-07.png" alt="" class="bg-4">
        <img src="../../assets/img/maxcoach-shape-01.png" alt="" class="bg-5">
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/_vars.scss' as *;

.container {
    position: relative;
}

.picture {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    z-index: 1;
}

.main-pic {
    height: 450px;
    transform: scale(1.2);
    transition: 1s;

    &:hover {
        transform: scale(1.4);
    }
}

.bg-1 {
    position: absolute;
    top: 10px;
    left: 0px;
}

.bg-3 {
    position: absolute;
    top: -10px;
    right: 300px;
}

.bg-4 {
    position: absolute;
    bottom: 0px;
    right: 420px;
}

.bg-5 {
    position: absolute;
    bottom: 20px;
    left: -60px;
}

.youtube {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 60px;
    transform: translate(-50%, -50%);
    cursor: pointer;
}

.text {
    flex-basis: 20%;
}

h1,
h6 {
    color: $tertiaryColor;
}

.companionship,
a {
    color: $secondaryColor;
}

a {
    font-size: 0.8rem;
}
</style>